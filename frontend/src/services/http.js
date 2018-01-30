import axios from 'axios'
import ls from 'local-storage'
import NProgress from 'nprogress'
import router from '@/router'

NProgress.configure({ showSpinner: false })

axios.defaults.baseURL = `${process.env.API_ENV}/api`

// Intercept the request to make sure the token is injected into the header.
axios.interceptors.request.use(config => {
  config.headers.Authorization = `${ls('token')}`
  NProgress.start()
  return config
})

axios.interceptors.response.use(response => {

  if (response.data.login) {
    router.push('/logout')
  }

  NProgress.done()
  return response
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

const http = {
  post: (url, data) => axios.post(url, data),
  put: (url, data) => axios.put(url, data),
  get: (url) => axios.get(url),
  delete: (url, data) => axios.delete(url, data)
};

export default http;