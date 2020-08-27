import React from "react"
import { get } from "lodash"
import "./Button.css"
import Image from "../Image"

const Button = (props) => {
  const { onClick, children } = props

  const className = get(props, "className", "")
  const variant = get(props, "variant", "")
  const color = get(props, "color", "")
  const size = get(props, "size", "large")
  const disabled = get(props, "disabled", false)
  const withIcon = get(props, "withIcon", "")

  return (
    <button
      className={`
        button
        ${className}
        ${variant && `button--variant-${variant}`}
        ${color && `button--color-${color}`}
        ${size && `button--size-${size}`}
        ${disabled ? "button--disabled" : ""}
        ${withIcon && "button__with-icon"}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      <Image url={withIcon}/>{children}
    </button>
  )
}

export { Button }
