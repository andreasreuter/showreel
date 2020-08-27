import React, { useState } from "react"
import Modal from "./Modal"

const withModal = (Component) => {
  const WithModalComponent = (props) => {
    const [hide, setHide] = useState(0)
    const { onClose } = props

    return (
      <Modal handleClose={() => { setHide(1); onClose() }} hide={hide}>
        <Component {...props}/>
      </Modal>
    )
  }

  return (WithModalComponent)
}

export { withModal }
