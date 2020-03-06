import makeStyles from '@material-ui/core/styles/makeStyles';
import { fade } from '@material-ui/core/styles';
import CONSTANT from '../../constants';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: CONSTANT.COLOR.white,
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25);',
  },
  grow: {
    flexGrow: 1,
  },
  menuAppbar: {
    '&:hover': {
      color: fade(CONSTANT.COLOR.black, 1),
    },
    color: CONSTANT.COLOR.grey,
    padding: theme.spacing(1.1),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  searchDesktop: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    color: CONSTANT.COLOR.black,
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    transform: 'translate(50%,20%)',
    pointerEvents: 'none',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    '&::placeholder': {
      color: CONSTANT.COLOR.black,
    },
    color: CONSTANT.COLOR.black,
    padding: theme.spacing(1, 4, 1, 1),
    background: CONSTANT.COLOR.greyLight,
    borderRadius: theme.spacing(1),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    margin: '0px auto',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));
export default useStyles;
