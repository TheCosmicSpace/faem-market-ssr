const userData = JSON.parse(localStorage.getItem('userData'))

export default function () {
  return {
    user_uuid: userData ? userData.client_uuid : null,
    refresh_token: userData ? userData.refresh_token : null
    //
  }
}
