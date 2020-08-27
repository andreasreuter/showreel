import React from "react"
import { Button } from "./Button"
import { mapPin } from "../icons"

const Residence = ({ name }) => (
  <div className="residence">
    <Button variant="contained" size="medium" withIcon={mapPin}>
      {name}
    </Button>
  </div>
)

export default Residence
