export const SET_USER_UUID = (store, uuid) => {
  store.user_uuid = uuid
}

export const DELETE_USER_UUID = store => {
  store.user_uuid = null
}

export const SET_REFRESH_TOKEN = (state, refresh_token) => {
  state.refresh_token = refresh_token
}
