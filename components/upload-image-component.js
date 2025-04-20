import { uploadImage } from "../api.js";

export function renderUploadImageComponent({ element, onImageUrlChange }) {
  let imageUrl = "";

  const render = () => {
    element.innerHTML = `
      <div class="upload-image">
        ${
          imageUrl
            ? `
            <div class="file-upload-image-container">
              <img class="file-upload-image" src="${imageUrl}" alt="Загруженное изображение">
              <button class="file-upload-remove-button button">Заменить фото</button>
            </div>
            `
            : `
            <label class="file-upload-label secondary-button">
              <input
                type="file"
                class="file-upload-input"
                style="display:none"
                accept="image/*"
              />
              Выберите фото
            </label>
          `
        }
      </div>
    `;

    const fileInputElement = element.querySelector(".file-upload-input");
    fileInputElement?.addEventListener("change", () => {
      const file = fileInputElement.files[0];
      if (file) {
        const labelEl = document.querySelector(".file-upload-label");
        if (labelEl) {
          labelEl.setAttribute("disabled", true);
          labelEl.textContent = "Загружаю файл...";
        }
        
        uploadImage({ file })
        .then(({ fileUrl }) => {
          if (!fileUrl.startsWith("https://storage.yandexcloud.net/skypro-webdev-homework-bucket/")) {
            throw new Error("Ссылка должна быть из Yandex Cloud");
          }
          imageUrl = fileUrl;
          onImageUrlChange(imageUrl);
          render();
          })
          .catch(() => {
            alert("Ошибка загрузки изображения");
            if (labelEl) {
              labelEl.removeAttribute("disabled");
              labelEl.textContent = "Выберите фото";
            }
          });
      }
    });

    element
      .querySelector(".file-upload-remove-button")
      ?.addEventListener("click", () => {
        imageUrl = "";
        onImageUrlChange(imageUrl);
        render();
      });
  };

  render();
}