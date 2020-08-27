import React from "react"
import "./Photography.css"
import Image from "../Image"
import { mediaPlay } from "../../icons"

const Photography = ({ url, alt, watchMyVideo = false }) => (
  <div className="photography">
    <Image
      className="photography__bottom"
      url={url}
      alt={alt}
    />
    <Image
      className={`photography__icon ${watchMyVideo && "with-heading"}`}
      url={mediaPlay}
    />
    {watchMyVideo && (
      <div className="heading heading--variant-h2 heading--color-secondary">
        <h2><span>Watch my video</span></h2>
      </div>
    )}
  </div>
)

export default Photography
