import { renderHeaderComponent } from "./header-component.js";
import { goToPage, getToken } from "../index.js";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import { getPosts, toggleLike } from "../api.js";

export function renderPostsPageComponent({ appEl }) {

  getPosts({ token: getToken() })
    .then((posts) => {
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
                <img class="post-image" src="${post.imageUrl}">
              </div>
              <div class="post-likes">
                <button data-post-id="${post.id}" class="like-button">
                  <img src="assets/images/${post.isLiked ? 'like-active.svg' : 'like-not-active.svg'}">
                </button>
                  <p class="post-likes-text">
                    Нравится: <strong>${post.likes.length}</strong>${post.likes.length > 0 ? ` — ${post.likes[post.likes.length - 1].name}` : ""}
                  </p>
              </div>
              <p class="post-text">
                <span class="user-name">${sanitizeHtml(post.user.name)}</span>
                ${sanitizeHtml(post.description)}
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

      document.querySelectorAll(".post-header").forEach((userEl) => {
        userEl.addEventListener("click", () => {
          const userId = userEl.dataset.userId;

          if (!userId) {
            console.error("❌ userId отсутствует у элемента:", userEl);
            return;
          }

          goToPage("user-posts", { userId });
        });
      });


      document.querySelectorAll(".like-button").forEach((button) => {
        button.addEventListener("click", (event) => {
          const postId = button.dataset.postId;
          const isLiked = button.querySelector("img").src.includes("like-active");



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
      console.error("Ошибка при загрузке постов:", error);
      appEl.innerHTML = "<p>Ошибка загрузки постов.</p>";
    });
}

export function sanitizeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}