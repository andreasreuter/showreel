import React from "react"
import "./Modal.css"
import { Button } from "../../components/Button"
import { close } from "../../icons"

const Modal = ({ handleClose, hide, children }) => (
  <div className={`modal ${!hide ? "modal--show" : "modal--hide"}`}>
    <div className="modal-main">
      {children}
      <div className="close">
        <Button
          variant="text"
          size="small"
          withIcon={close}
          onClick={handleClose}
        />
      </div>
    </div>
  </div>
)

export default Modal
