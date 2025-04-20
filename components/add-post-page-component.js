import { renderHeaderComponent } from "./header-component.js";
import { renderUploadImageComponent } from "./upload-image-component.js";
import { goToPage, onAddPostClick } from "../index.js";

export function renderAddPostPageComponent({ appEl }) {
  let imageUrl = "";
  let description = "";

  const render = () => {
    appEl.innerHTML = `
      <div class="page-container">
        <div class="header-container"></div>
        <div class="form">
          <h3 class="form-title">Добавить пост</h3>
          <div class="form-inputs">
            <div class="upload-image-container"></div>
            <label>Описание:
              <textarea class="input description-input" placeholder="Введите описание поста"></textarea>
            </label>
            <button class="button add-button">Добавить</button>
          </div>
        </div>
      </div>
    `;

    renderHeaderComponent({
      element: document.querySelector(".header-container"),
    });

    renderUploadImageComponent({
      element: document.querySelector(".upload-image-container"),
      onImageUrlChange: (newImageUrl) => {
        imageUrl = newImageUrl;
      },
    });

    document.querySelector(".add-button").addEventListener("click", () => {
      const description = document.querySelector(".description-input").value.trim();
  
      if (!imageUrl) {
        alert("Сначала загрузите изображение");
        return;
      }
    
      // Удаляем все спецсимволы из описания
      const cleanDescription = description.replace(/[^\w\sа-яА-ЯёЁ.,!?]/gi, '');
    
      if (cleanDescription.length < 1) {
        alert("Введите корректное описание");
        return;
      }
    
      onAddPostClick({ description: cleanDescription, imageUrl });
    });
  };

  render();
}