import React from "react"
import Typography from "@material-ui/core/Typography"
import { withRouter } from "react-router-dom"

function TextButton({ children, to, history, ...rest }) {
  const props = {
    classes: rest.classes || {},
    className: rest.className || "",
    variant: rest.variant,
  }
  if (to)
    props.onClick = () => {
      history.push(to)
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

export default withRouter(TextButton)
