import api from './axios'

const baseClientURL = process.env.VUE_APP_API_CLIENT

const getCodeFromPhoneNumberService = async ({ phone, device_id }) => {
  try {
    return await api.client.post(`${baseClientURL}/auth/new`, {
      phone, device_id
    })
  } catch (e) {
    return Promise.reject(e)
  }
}

const checkToEqualVerificationCodeService = async ({ code, device_id }) => {
  try {
    return await api.client.post(`${baseClientURL}/auth/verification`, {
      code, device_id
    })
  } catch (e) {
    return Promise.reject(e)
  }
}

const refreshTokenService = async ({ refresh }) => {
  try {
    return await api.client.post(`${baseClientURL}/auth/refresh`, {
      refresh
    })
  } catch (e) {
    return Promise.reject(e)
  }
}

const logoutService = () => {
  api.token = null
  api.refreshToken = null
}

export { getCodeFromPhoneNumberService, checkToEqualVerificationCodeService, refreshTokenService, logoutService }
