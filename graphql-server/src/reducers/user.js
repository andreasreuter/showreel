"use strict"

const userReducer = (value) => {
  const user = {
    userId: value.user_id.S,
    firstName: value.first_name.S,
    lastName: value.last_name.S,
    email: value.email.S,
    photography: value.photography.S,
    accessToken: value.access_token.S,
    expiresIn: value.expires_in.N,
  }

  return (user)
}

export default userReducer
