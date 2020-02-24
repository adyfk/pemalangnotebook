import React from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import BrowserRouter from "react-router-dom/BrowserRouter"

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

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{element}</BrowserRouter>
    </ThemeProvider>
  )
}
