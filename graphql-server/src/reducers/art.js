"use strict"

const artReducer = (value) => {
  const art = {
    artId: value.art_id.S,
    title: value.title.S,
    url: value.url.S,
  }

  return (art)
}

export default artReducer
