import React from "react"
import "./LoaderGif.css"
import gif from "../../images/loader.svg"

const LoaderGif = () => (
  <div className="loader-gif">
    <img src={gif} alt="Loading..."/>
  </div>
)

export default LoaderGif
