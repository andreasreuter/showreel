import React from "react"
import { Button } from "../Button"

export default {
  title: "Outlined Buttons",
  component: Button,
}

export const Normal = () => (
  <Button variant="outlined">
    Normal
  </Button>
)

export const Disabled = () => (
  <Button variant="outlined" disabled>
    Disabled
  </Button>
)

export const Primary = () => (
  <Button variant="outlined" color="primary">
    Primary
  </Button>
)

export const Secondary = () => (
  <Button variant="outlined" color="secondary">
    Secondary
  </Button>
)

export const WithIcon = () => (
  <Button variant="outlined" withIcon="/share--black.svg"/>
)

export const WithLabel = () => (
  <Button variant="outlined" withIcon="/map-pin--black.svg">
    New York
  </Button>
)
