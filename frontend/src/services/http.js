import axios from 'axios'
import ls from 'local-storage'

axios.defaults.baseURL = `${process.env.API_ENV}/api`

// Intercept the request to make sure the token is injected into the header.
axios.interceptors.request.use(config => {
  config.headers.Authorization = `${ls('token')}`
  return config
})

axios.interceptors.response.use(response => {
  //NProgress.done()
  return response
}, error => {
  //NProgress.done()
  // Also, if we receive a Bad Request / Unauthorized error
  // if (error.response.status === 400 || error.response.status === 401) {
  //   // and we're not trying to login
  // }

  return Promise.reject(error)
})

const http = {
  post: (url, data) => {
    return axios.post(url, data);
  },
  put: (url, data) => {
    return axios.put(url, data);
  },
  get: (url) => axios.get(url),
};

export default http;