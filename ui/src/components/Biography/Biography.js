import React from "react"
import "./Biography.css"
import { Link } from "react-router-dom"

const Biography = ({ foldedText, text, moreLink }) => (
  <>
    <div className="biography">
      <div className="heading heading--variant-h3 heading--color-primary">
        <h3>Biography</h3>
      </div>
      <p>{foldedText} {moreLink && <Link className="biography__more" to={moreLink}>Read more</Link>}</p>
    </div>
  </>
)

export default Biography
