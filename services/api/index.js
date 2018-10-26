import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://192.168.5.160:3000/api/v1',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })

export function setHeaders (headers) {
  return api.interceptors.request.use(
    config => {
      config.headers = headers;
      return config;
    },
    error => Promise.reject(error)
  )
}
