import { createMuiTheme } from "@material-ui/core"
const theme = createMuiTheme({
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
  color: {
    blue: "#208dd7",
    orange: "#f0820d",
    white: "#ffffff",
    grey: "rgb(0, 0, 0, 0.7)",
    greyLight: "rgb(0, 0, 0, 0.1)",
    black: "#000000",
  },
})

export default theme
