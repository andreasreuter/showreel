import React from "react"
import { Button } from "./Button"
import "./BareSignInButton.css"

const BareSignInButton = ({ handleClick, children }) => (
  <Button
    variant="outlined"
    color="primary"
    size="medium"
    onClick={handleClick}
    className="bare-sign-in-button"
  >
    {children}
  </Button>
)

export { BareSignInButton }
