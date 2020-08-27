import React from "react"
import { Button } from "../Button"

export default {
  title: "Contained Buttons",
  component: Button,
}

export const Normal = () => (
  <Button variant="contained">
    Normal
  </Button>
)

export const Disabled = () => (
  <Button variant="contained" disabled>
    Disabled
  </Button>
)

export const Primary = () => (
  <Button variant="contained" color="primary">
    Primary
  </Button>
)

export const Secondary = () => (
  <Button variant="contained" color="secondary">
    Secondary
  </Button>
)

export const WithIcon = () => (
  <Button variant="contained" withIcon="/share--black.svg"/>
)

export const WithLabel = () => (
  <Button variant="contained" withIcon="/map-pin--black.svg">
    New York
  </Button>
)
