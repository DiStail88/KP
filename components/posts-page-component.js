import { renderHeaderComponent } from "./header-component.js";
import { goToPage, getToken } from "../index.js";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import { getPosts, toggleLike } from "../api.js"; // Правильное название для API функции

export function renderPostsPageComponent({ appEl }) {
  console.log("Загружаем посты...");

  // Получаем посты с API
  getPosts({ token: getToken() })
    .then((posts) => {
      const postsHtml = posts
        .map((post) => {
          const createdAgo = formatDistanceToNow(new Date(post.createdAt), {
            addSuffix: true,
            locale: ru,
          });

          return `
            <li class="post">
              <div class="post-header" data-user-id="${post.user.id}">
                <img src="${post.user.imageUrl}" class="post-header__user-image">
                <p class="post-header__user-name">${post.user.name}</p>
              </div>
              <div class="post-image-container">
                <img class="post-image" src="${post.imageUrl}">
              </div>
              <div class="post-likes">
                <button data-post-id="${post.id}" class="like-button">
                  <img src="assets/images/${post.isLiked ? 'like-active' : 'like-not-active'}.svg">
                </button>
                <p class="post-likes-text">
                  Нравится: <strong>${post.likes.length}</strong>
                </p>
              </div>
              <p class="post-text">
                <span class="user-name">${post.user.name}</span>
                ${post.description}
              </p>
              <p class="post-date">
                ${createdAgo}
              </p>
            </li>
          `;
        })
        .join("");


      const appHtml = `
        <div class="page-container">
          <div class="header-container"></div>
          <ul class="posts">
            ${postsHtml}
          </ul>
        </div>
      `;

      appEl.innerHTML = appHtml;

      renderHeaderComponent({
        element: document.querySelector(".header-container"),
      });

      // Обработчик клика по пользователю
      document.querySelectorAll(".post-header").forEach((userEl) => {
        userEl.addEventListener("click", () => {
          const userId = userEl.dataset.userId;

          if (!userId) {
            console.error("❌ userId отсутствует у элемента:", userEl);
            return;
          }

          console.log("👉 Переход к постам пользователя с ID:", userId);
          goToPage("user-posts", {
            userId,
          });
        });
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
              likeButton.src = updatedPost.isLiked ? "assets/images/like-active.svg" : "assets/images/like-not-active.svg";
              
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
      console.error("Ошибка при загрузке постов:", error);
      appEl.innerHTML = "<p>Ошибка загрузки постов.</p>";
    });
}
