import React from "react"
import { Button } from "./Button"

const FollowButton = ({ onClick, children }) => (
  <Button
    variant="contained"
    size="small"
    color="secondary"
    onClick={onClick}
  >
    {children}
  </Button>
)

export { FollowButton }
