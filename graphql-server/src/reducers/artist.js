"use strict"

const artistReducer = (value) => {
  const artist = {
    artistId: value.artist_id.S,
    sequence: value.sequence.N,
    firstName: value.first_name.S,
    lastName: value.last_name?.S,
    categoryOfArt: value.category_of_art.S,
    practiceSinceYear: value.practice_since_year.N,
    residence: value.residence.S,
    biography: value.biography.S,
    myVideo: value.my_video.S,
    photography: value.photography.S,
  }

  return (artist)
}

export default artistReducer
