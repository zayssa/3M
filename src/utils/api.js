const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res.text());
};

const JWT_LABEL = 'jwt';

class Api {
  constructor({ baseUrl, headers }) {
    this.token = localStorage.getItem(JWT_LABEL);
    this._headers = {
      Authorization: `Bearer ${this.token}`,
      ...headers,
    };
    this._baseUrl = baseUrl;
  }

  protectedFetch(...attributes) {
    if (!this.token) {
      return Promise.reject('Authorization required');
    }

    return fetch(...attributes);
  }

  getPostList() {
    return this.protectedFetch(`${this._baseUrl}/posts`, {
      headers: this._headers,
    }).then(onResponse);
  }

  getUserInfo() {
    return this.protectedFetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(onResponse);
  }
  getPostById(idPost) {
    return this.protectedFetch(`${this._baseUrl}/posts/${idPost} `, {
      headers: this._headers,
    }).then(onResponse);
  }

  setUserInfo(dataUser) {
    return this.protectedFetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(dataUser),
    }).then(onResponse);
  }

  search(searchQuery) {
    return this.protectedFetch(
      `${this._baseUrl}/posts/search?query=${searchQuery}`,
      {
        headers: this._headers,
      }
    ).then(onResponse);
  }
  changeLikePost(postId, isLike) {
    return this.protectedFetch(`${this._baseUrl}/posts/likes/${postId}`, {
      method: isLike ? 'DELETE' : 'PUT',
      headers: this._headers,
    }).then(onResponse);
  }

  deletePost(postId) {
    return this.protectedFetch(`${this._baseUrl}/posts/${postId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(onResponse);
  }

  changePost(postId, data) {
    return this.protectedFetch(`${this._baseUrl}/posts/${postId}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: this._headers,
    }).then(onResponse);
  }

  addNewPost(data) {
    return this.protectedFetch(`${this._baseUrl}/posts`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: this._headers,
    }).then(onResponse);
  }

  registerUser(dataUser) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        ...dataUser,
      }),
    }).then(onResponse);
  }

  loginUser(dataUser) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(dataUser),
    })
      .then(onResponse)
      .then((data) => {
        localStorage.setItem(JWT_LABEL, data.token);
      });
  }

  logoutUser() {
    return Promise.resolve(localStorage.removeItem(JWT_LABEL));
  }

  requestPasswordReset(data) {
    return fetch(`${this._baseUrl}/forgot-password`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(onResponse);
  }
}

const config = {
  baseUrl: 'https://api.react-learning.ru/v2/fron10',
  headers: {
    'Content-Type': 'application/json',
  },
};

const api = new Api(config);

export default api;
