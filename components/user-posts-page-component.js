import { getPosts, toggleLike } from "../api.js";
import { renderHeaderComponent } from "./header-component.js";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import { POSTS_PAGE } from "../routes.js";
import { getToken, goToPage } from "../index.js";

export function renderUserPostsPageComponent({ appEl, userId }) {
  console.log("Загружаем посты пользователя с ID:", userId);

  // Проверяем, что userId передан
  if (!userId) {
    console.error("Ошибка: Не передан userId.");
    appEl.innerHTML = `
      <div class="page-container">
        <div class="header-container"></div>
        <div class="error">
          <p>Ошибка: Не удалось загрузить посты пользователя.</p>
          <button class="back-button">← Вернуться к ленте</button>
        </div>
      </div>
    `;
    document.querySelector(".back-button").addEventListener("click", () => {
      goToPage(POSTS_PAGE);
    });
    renderHeaderComponent({
      element: document.querySelector(".header-container"),
    });
    return;
  }

  // Показываем заглушку загрузки
  appEl.innerHTML = `
    <div class="page-container">
      <div class="header-container"></div>
      <div class="loading">Загрузка постов...</div>
    </div>
  `;
  renderHeaderComponent({
    element: document.querySelector(".header-container"),
  });

  // Получаем посты конкретного пользователя
  getPosts({ token: getToken(), userId })
    .then((posts) => {
      if (posts.length === 0) {
        appEl.innerHTML = `
          <div class="page-container">
            <div class="header-container"></div>
            <div class="no-posts">
              <p>Пользователь еще не добавил ни одного поста</p>
              <button class="back-button">← Вернуться к ленте</button>
            </div>
          </div>
        `;
        document.querySelector(".back-button").addEventListener("click", () => {
          goToPage(POSTS_PAGE);
        });
        renderHeaderComponent({
          element: document.querySelector(".header-container"),
        });
        return;
      }

      const userName = posts[0]?.user?.name || "Пользователя";
      const postsHtml = posts
        .map((post) => {
          const createdAgo = formatDistanceToNow(new Date(post.createdAt), {
            addSuffix: true,
            locale: ru,
          });

          return `
            <li class="post" data-post-id="${post.id}">
              <div class="post-header" data-user-id="${post.user.id}">
                <img src="${post.user.imageUrl}" class="post-header__user-image">
                <p class="post-header__user-name">${post.user.name}</p>
              </div>
              <div class="post-image-container">
                <img class="post-image" src="${post.imageUrl}" alt="Пост пользователя ${post.user.name}">
              </div>
              <div class="post-footer">
                <p class="post-text">
                  <span class="user-name">${post.user.name}</span>
                  ${post.description}
                </p>
                <p class="post-date">
                  ${createdAgo}
                </p>
              </div>
              <div class="post-likes">
                <button class="like-button" data-post-id="${post.id}">
                  <img src="assets/images/${post.isLiked ? "like-active" : "like-not-active"}.svg" alt="Лайк">
                </button>
                <p class="post-likes-text">
                  Нравится: <strong>${post.likes.length}</strong>
                </p>
              </div>
            </li>
          `;
        })
        .join("");

      appEl.innerHTML = `
        <div class="page-container">
          <div class="header-container"></div>
          <div class="user-posts-header">
            <h1>Посты ${userName}</h1>
            <button class="back-button">← Вернуться к ленте</button>
          </div>
          <ul class="posts">
            ${postsHtml}
          </ul>
        </div>
      `;

      renderHeaderComponent({
        element: document.querySelector(".header-container"),
      });

      // Обработчик кнопки "Назад"
      document.querySelector(".back-button").addEventListener("click", () => {
        goToPage(POSTS_PAGE);
      });

      // Обработчик клика по кнопке лайка
      document.querySelectorAll(".like-button").forEach((button) => {
        button.addEventListener("click", (event) => {
          const postId = event.target.closest("button").dataset.postId;
          const isLiked = event.target.src.includes("like-active"); // Проверка, стоит ли лайк

          // Обновляем состояние лайка и перерисовываем UI
          toggleLike(postId, isLiked)
            .then((updatedPost) => {
              const postElement = document.querySelector(`[data-post-id="${updatedPost.id}"]`);
              const likeButton = postElement.querySelector("button img");
              const likeCount = postElement.querySelector(".post-likes-text strong");

              // Обновляем картинку лайка
              likeButton.src = updatedPost.isLiked ? "./assets/images/like-active.svg" : "./assets/images/like-not-active.svg";
              
              // Обновляем счетчик лайков
              likeCount.textContent = updatedPost.likes.length;
            })
            .catch((error) => {
              console.error("Ошибка при обновлении лайка:", error);
            });
        });
      });
    })
    .catch((error) => {
      console.error("Ошибка загрузки постов:", error);
      appEl.innerHTML = `
        <div class="page-container">
          <div class="header-container"></div>
          <div class="error">
            <p>Ошибка загрузки постов пользователя</p>
            <button class="back-button">← Вернуться к ленте</button>
          </div>
        </div>
      `;
      document.querySelector(".back-button").addEventListener("click", () => {
        goToPage(POSTS_PAGE);
      });
      renderHeaderComponent({
        element: document.querySelector(".header-container"),
      });
    });
}
