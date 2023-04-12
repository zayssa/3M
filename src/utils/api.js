const onResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getPostList() {
    return fetch(`${this._baseUrl}/posts`, {
      headers: this._headers,
    }).then(onResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(onResponse);
  }
  getPostById(idPost) {
    return fetch(`${this._baseUrl}/posts/${idPost} `, {
      headers: this._headers,
    }).then(onResponse);
  }

  setUserInfo(dataUser) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(dataUser),
    }).then(onResponse);
  }

  search(searchQuery) {
    return fetch(`${this._baseUrl}/posts/search?query=${searchQuery}`, {
      headers: this._headers,
    }).then(onResponse);
  }
  changeLikePost(postId, isLike) {
    return fetch(`${this._baseUrl}/posts/likes/${postId}`, {
      method: isLike ? "DELETE" : "PUT",
      headers: this._headers,
    }).then(onResponse);
  }

  deletePost(postId) {
    return fetch(`${this._baseUrl}/posts/${postId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(onResponse);
  }

  changePost(postId, data) {
    return fetch(`${this._baseUrl}/posts/${postId}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: this._headers,
    }).then(onResponse);
  }

  addNewPost(data) {
    return fetch(`${this._baseUrl}/posts`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: this._headers,
    }).then(onResponse);
  }
}

const config = {
    baseUrl: 'https://api.react-learning.ru/v2/DN',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA4NWE4OTRlZTQxOTk3NWZiZDJlZWEiLCJncm91cCI6IkROIiwiaWF0IjoxNjc4MjY5MTQ3LCJleHAiOjE3MDk4MDUxNDd9.blMfWXpvtILmDCTXFrmCYya2VZwAKC1rB5Q2kndKUQU'
    }
}

const api = new Api(config);

export default api;