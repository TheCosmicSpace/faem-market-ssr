import axios from 'axios'

const baseClientURL = process.env.VUE_APP_API_CLIENT

export default class Api {
  constructor (options = {}) {
    // Singleton Pattern
    if (Api._instance) return Api._instance
    Api._instance = this

    this.client = axios.create(options.boot || {})
    this.token = options.token
    this.refreshToken = options.refresh_token
    this.refreshRequest = null

    this.client.interceptors.request.use(
      config => {
        if (!this.token) {
          return config
        }

        const newConfig = {
          headers: {},
          ...config
        }

        newConfig.headers.Authorization = `Bearer ${this.token}`
        return newConfig
      },
      e => Promise.reject(e)
    )

    this.client.interceptors.response.use(
      r => r,
      async error => {
        if (
          !this.refreshToken ||
          error.response.status !== 401 ||
          error.config.retry
        ) {
          throw error
        }

        if (!this.refreshRequest) {
          this.refreshRequest = this.client.post(`${baseClientURL}/auth/refresh`, {
            refresh: this.refreshToken
          })
        }
        const { data } = await this.refreshRequest
        delete this.refreshRequest
        this.token = data.token
        this.refreshToken = data.refresh_token
        const newRequest = {
          ...error.config,
          retry: true
        }

        return this.client(newRequest)
      }
    )
  }
}
