import makeStyles from "@material-ui/core/styles/makeStyles"
import { fade } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => {
  console.log(theme, theme.spacing())
  return {
    appBar: {
      backgroundColor: theme.color.white,
      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25);",
    },
    grow: {
      flexGrow: 1,
    },
    menuAppbar: {
      "&:hover": {
        color: fade(theme.color.black, 2),
      },
      color: theme.color.grey,
      padding: theme.spacing(1.1),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    searchDesktop: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(1),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      color: theme.color.black,
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      right: 0,
      top: 0,
      transform: "translate(50%,20%)",
      pointerEvents: "none",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      "&::placeholder": {
        color: theme.color.black,
      },
      color: theme.color.black,
      padding: theme.spacing(1, 4, 1, 1),
      background: theme.color.greyLight,
      borderRadius: theme.spacing(1),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
  }
})
export default useStyles
