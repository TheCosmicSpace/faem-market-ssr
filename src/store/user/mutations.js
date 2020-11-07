const SET_USER_UUID = (store, uuid) => {
  store.user_uuid = uuid
}

const DELETE_USER_UUID = store => {
  store.user_uuid = null
}

const SET_REFRESH_TOKEN = (state, refresh_token) => {
  state.refresh_token = refresh_token
}

export { SET_USER_UUID, DELETE_USER_UUID, SET_REFRESH_TOKEN }
