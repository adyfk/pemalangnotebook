import React from "react"
import { push } from "gatsby"
import Typography from "@material-ui/core/Typography"

function TextButton({ children, to, history, ...rest }) {
  const props = {
    classes: rest.classes || {},
    className: rest.className || "",
    variant: rest.variant,
  }
  if (to)
    props.onClick = () => {
      push(to)
    }
  return (
    <Typography
      style={{
        cursor: "pointer",
      }}
      {...props}
    >
      {children}
    </Typography>
  )
}

export default TextButton
