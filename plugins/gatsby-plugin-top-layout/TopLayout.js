import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import CssBaseline from "@material-ui/core/CssBaseline"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createMuiTheme({
  color: {
    blue: "#208dd7",
    orange: "#f0820d",
    white: "#FFFFFF",
    grey: "rgb(0, 0, 0, 0.7)",
    greyLight: "rgb(0, 0, 0, 0.1)",
    black: "#000000",
  },
  palette: {
    primary: {
      light: "#67bdff",
      main: "#208dd7",
      dark: "#0060a5",
    },
    secondary: {
      main: "#f0820d",
      light: "#ffb247",
      dark: "#b75400",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
  },
})

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
