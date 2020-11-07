const isAuthUser = state => state.user_uuid !== null
const getUserUUID = state => state.user_uuid

export { isAuthUser, getUserUUID }
