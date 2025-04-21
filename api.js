import { getToken } from './index.js'; 

const personalKey = "DIS";
const baseHost = "https://wedev-api.sky.pro";
const postsHost = `${baseHost}/api/v1/${personalKey}/instapro`;

export function getPosts({ token, userId }) {
  let url = postsHost;

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
  if (!description || typeof description !== 'string' || description.trim() === '') {
    return Promise.reject(new Error("Описание обязательно"));
  }

  if (!imageUrl || typeof imageUrl !== 'string' || !imageUrl.includes('skypro-webdev-homework-bucket')) {
    return Promise.reject(new Error("Требуется валидный URL из Yandex Cloud"));
  }

  const postData = {
    description: description.trim(),
    imageUrl: imageUrl.trim()
  };

  console.log("Отправляемые данные на сервер:", JSON.stringify(postData));

  return fetch(`${baseHost}/api/v1/${personalKey}/instapro`, {
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
      return responseData.post || responseData; 
    }

    if (response.status === 400) {
      throw new Error(responseData.message || "Проверьте данные: описание 1-500 символов, корректная ссылка");
    }

    throw new Error(`Ошибка сервера: ${response.status}`);
  });
}

export function toggleLike({ postId, isLiked, token }) {
  if (!postId || typeof postId !== 'string') {
    console.error('Invalid postId:', postId);
    return Promise.reject(new Error("Неверный ID поста"));
  }

  if (typeof isLiked !== 'boolean') {
    return Promise.reject(new Error("Не указано действие (лайк/дизлайк)"));
  }

  if (!token) {
    return Promise.reject(new Error("Требуется токен авторизации"));
  }

  const endpoint = isLiked ? '/dislike' : '/like';
  const url = `${baseHost}/api/v1/${personalKey}/instapro/${postId}${endpoint}`;

  console.log('[API] toggleLike request to:', url);

  return fetch(url, {
    method: "POST",
    headers: {
      "Authorization": token,
    }
  })
    .then(async (response) => {
      // Проверка на успешность ответа
      if (!response.ok) {
        const errorData = await response.text();
        console.error('[API] toggleLike error: Unexpected response:', errorData);
        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      // Парсинг ответа как JSON
      const data = await response.json();
      console.log('[API] toggleLike response:', data);

      return data.post || data;
    })
    .catch((error) => {
      console.error('[API] toggleLike error:', error.message);
      throw error;
    });
}
