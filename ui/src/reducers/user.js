const userReducer = (value) => {
  const user = {
    firstName: value.first_name,
    lastName: value.last_name,
    email: value.email,
    photography: value.picture.data.url,
    location: value.location.name
  }

  return (user)
}

export default userReducer
