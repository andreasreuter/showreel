import React from "react"
import "./ComingSoon.css"
import Image from "../Image"
import { timeWhite } from "../../icons"

const ComingSoon = () => (
  <div className="coming-soon">
    <div className="coming-soon__icon">
      <Image url={timeWhite}/>
    </div>
    <span className="coming-soon__text">Coming soon</span>
  </div>
)

export default ComingSoon
