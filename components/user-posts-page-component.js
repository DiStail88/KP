import { getPosts, toggleLike } from "../api.js";
import { renderHeaderComponent } from "./header-component.js";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import { POSTS_PAGE } from "../routes.js";
import { getToken, goToPage } from "../index.js";
import { sanitizeHtml } from "./posts-page-component.js";

export function renderUserPostsPageComponent({ appEl, userId }) {



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


  appEl.innerHTML = `
    <div class="page-container">
      <div class="header-container"></div>
      <div class="loading">Загрузка постов...</div>
    </div>
  `;
  renderHeaderComponent({
    element: document.querySelector(".header-container"),
  });


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
                <p class="post-header__user-name">${sanitizeHtml(post.user.name)}</p>
              </div>
              <div class="post-image-container">
                <img class="post-image" src="${post.imageUrl}" alt="Пост пользователя ${post.user.name}">
              </div>
              <div class="post-footer">
                <p class="post-text">
                  <span class="user-name">${sanitizeHtml(post.user.name)}</span>
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
                    Нравится: <strong>${post.likes.length}</strong>${post.likes.length > 0 ? ` — ${post.likes[post.likes.length - 1].name}` : ""}
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
            <h1>Посты ${sanitizeHtml(userName)}</h1>
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

      document.querySelector(".back-button").addEventListener("click", () => {
        goToPage(POSTS_PAGE);
      });


      document.querySelectorAll(".like-button").forEach((button) => {
        button.addEventListener("click", (event) => {
          const buttonEl = event.target.closest("button");

          const postId = buttonEl?.dataset.postId;


          if (!postId) {
            console.error("❌ Не найден postId для лайка.");
            return; 
          }


          const isLiked = event.target.src.includes("like-active");



          toggleLike({ postId, isLiked, token: getToken() })
            .then((updatedPost) => {



              const postElement = document.querySelector(`[data-post-id="${updatedPost.id}"]`);
              if (postElement) {

                const likeButton = postElement.querySelector("button img");
                const likeCount = postElement.querySelector(".post-likes-text strong");

                if (likeButton && likeCount) {
                  likeButton.src = updatedPost.isLiked
                    ? "assets/images/like-active.svg"
                    : "assets/images/like-not-active.svg";
                  

                    likeCount.parentElement.innerHTML = `
                    Нравится: <strong>${updatedPost.likes.length}</strong>${updatedPost.likes.length > 0 ? ` — ${updatedPost.likes[updatedPost.likes.length - 1].name}` : ""}
                  `;
                } else {
                  console.error("Ошибка: элементы для обновления не найдены");
                }
              } else {
                console.error("Ошибка: элемент поста не найден");
              }
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

