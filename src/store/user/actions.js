import { checkToEqualVerificationCodeService, getCodeFromPhoneNumberService, logoutService, refreshTokenService } from 'src/services/auth'

const getCodeFromPhoneNumber = async (_, { phone, device_id }) => {
  return await getCodeFromPhoneNumberService({ phone, device_id })
}

const checkToEqualVerificationCode = async ({ commit }, { code, device_id }) => {
  const data = await checkToEqualVerificationCodeService({ code, device_id })
  commit('SET_USER_UUID', data.client_uuid)
  commit('SET_REFRESH_TOKEN', data.refresh_token)
  localStorage.setItem('userData', JSON.stringify(data))
}

const refreshToken = async ({ commit, state }) => {
  const data = await refreshTokenService({ refresh: state.refresh_token })
  commit('SET_REFRESH_TOKEN', data.refresh_token)
  localStorage.setItem('userData', JSON.stringify(data))
  return data
}

const logout = ({ commit }) => {
  logoutService()
  commit('DELETE_USER_UUID')
}

export { getCodeFromPhoneNumber, checkToEqualVerificationCode, refreshToken, logout }
