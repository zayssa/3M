class Api {
  constructor(data) {
    this.baseUrl = data.baseUrl;
    this.headers = data.headers;
  }
  getProductsList() {
    // XHR Request
    return fetch("https://api.react-learning.ru/products?limit=250", {
      headers: this.headers
    })
      .then((res) => res.json())
  }
  getListBySearch (searchPath) {
    return fetch(`https://api.react-learning.ru/products/search?query=${searchPath}`,  {
      headers: this.headers,
      method: 'GET'
    }).then(e => e.json())
  }
}

const config = {
  headers: {
    'content-type': 'application/json',
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQ5YTI0ZDM5MmQzNjBiNzhhYjIzM2EiLCJpYXQiOjE2Nzg4MTIxNjQsImV4cCI6MTcxMDM0ODE2NH0.DAQbfu0jmq4DvnkuIMjVRPTNZmGT-p0C0t-uxMERtnA'
  },
  baseUrl: 'https://api.react-learning.ru/' 
}


export const api = new Api(config); 