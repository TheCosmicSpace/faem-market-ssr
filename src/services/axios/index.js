import AxiosApi from './axios-api'

const userData = JSON.parse(localStorage.getItem('userData')) || {}

let SOURSE = 'eda.faem.ru'
if (window.appSpecialStore) SOURSE = 'partner_web_site'

export default new AxiosApi({
  ...userData,
  boot: {
    baseURL: process.env.VUE_APP_API_CRM,
    headers: {
      'Content-Type': 'application/json',
      Source: SOURSE
    }
  }
})
