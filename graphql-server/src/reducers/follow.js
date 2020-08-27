"use strict"

const followReducer = (value) => {
  const follow = {
    userId: value.user_id.S,
    artistId: value.artist_id.S,
  }

  return (follow)
}

export default followReducer
