import React from "react"
import { get } from "lodash"
import "./Image.css"

const Image = (props) => {
  const { url } = props

  const className = get(props, "className", "")
  const alt = get(props, "alt", "")

  return (
    <img
      className={`
        image
        ${className}
      `}
      src={url}
      alt={alt}
    />
  )
}

export default Image
