import { getToken } from './index.js'; 

const personalKey = "prod";
const baseHost = "https://webdev-hw-api.vercel.app";
const postsHost = `${baseHost}/api/v1/${personalKey}/instapro`;

export function getPosts({ token, userId }) {
  let url = postsHost;

  // Правильный путь для получения постов пользователя
  if (userId) {
    url += `/user-posts/${userId}`;
  }

  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      if (response.status === 401) {
        throw new Error("Нет авторизации");
      }
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      if (!data.posts) {
        throw new Error("Нет данных для постов");
      }
      return data.posts;
    });
}

export function registerUser({ login, password, name, imageUrl }) {
  return fetch(baseHost + "/api/user", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
      name,
      imageUrl,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Такой пользователь уже существует");
    }
    return response.json();
  });
}

export function loginUser({ login, password }) {
  return fetch(baseHost + "/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    return response.json();
  });
}

export function uploadImage({ file }) {
  const data = new FormData();
  data.append("file", file);

  return fetch(baseHost + "/api/upload/image", {
    method: "POST",
    body: data,
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Ошибка загрузки изображения");
    }
    return response.json();
  });
}

export function addPost({ imageUrl, description, token }) {
  // Проверяем данные по всем требованиям документации
  if (!description || typeof description !== 'string' || description.trim() === '') {
    return Promise.reject(new Error("Описание обязательно"));
  }

  if (!imageUrl || typeof imageUrl !== 'string' || !imageUrl.includes('skypro-webdev-homework-bucket')) {
    return Promise.reject(new Error("Требуется валидный URL из Yandex Cloud"));
  }

  // Формируем тело запроса с правильным форматом даты
  const postData = {
    description: description.trim(),
    imageUrl: imageUrl.trim()
  };

  console.log("Отправляемые данные на сервер:", JSON.stringify(postData));

  return fetch("https://wedev-api.sky.pro/api/v1/prod/instapro", {
    method: "POST",
    headers: {
      'Authorization': token,
      'Accept': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(async (response) => {
    const responseData = await response.json();
    console.log("Ответ сервера:", responseData);

    if (response.status === 201) {
      return responseData.post || responseData; // Возвращаем созданный пост
    }

    if (response.status === 400) {
      throw new Error(responseData.message || "Проверьте данные: описание 1-500 символов, корректная ссылка");
    }

    throw new Error(`Ошибка сервера: ${response.status}`);
  });
}

export function toggleLike(postId, isLiked) {
  const endpoint = isLiked
    ? `/api/v1/prod/instapro/posts/${postId}/dislike`   // для снятия лайка
    : `/api/v1/prod/instapro/posts/${postId}/like`;      // для добавления лайка
  const url = baseHost + endpoint;
  console.log("Отправка запроса по URL:", url);

  return fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${getToken()}`,
    },
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка при запросе: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then((updatedPost) => {
    return updatedPost;
  })
  .catch((error) => {
    console.error("Ошибка при обновлении лайка:", error);
    throw new Error("Не удалось обновить лайк");
  });
}
