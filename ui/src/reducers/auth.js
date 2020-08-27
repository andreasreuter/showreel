const authReducer = (value) => {
  const auth = {
    userId: value.userID,
    accessToken: value.accessToken,
    expiresIn: value.expiresIn,
  }

  return (auth)
}

export default authReducer
