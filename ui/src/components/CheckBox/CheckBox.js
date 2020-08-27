import React, { useState } from "react"
import "./CheckBox.css"

const CheckBox = ({ onClick, children }) => {
  const [clicked, setClicked] = useState(0)

  return (
    <div
      className={`check-box ${clicked ? "check-box--clicked" : "check-box--unclicked"}`}
      onClick={() => { setClicked(!clicked); onClick(clicked) }}
    >
      <div className="check-box__circle">

      </div>
      <div className="check-box__content">
        {children}
      </div>
    </div>
  )
}

export default CheckBox
