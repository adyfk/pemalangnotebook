import makeStyles from '@material-ui/core/styles/makeStyles';
// import { fade } from '@material-ui/core/styles';
// import CONSTANT from '../../../constants';

const useStyles = makeStyles(() => ({
  container: {
    minHeight: 200,
    width: 375,
  },
  containerParentSubList: {
    padding: 5,
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  menuBox: {
    backgroundColor: 'white',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
  },
  leftMenu: {
    display: 'block',
    padding: 3,
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  colorBlue: {
    color: '#00A9FF',
  },
  subList: {
    color: '#AAAAAA',
    fontSize: 12,
    padding: 1,
    '&:hover': {
      color: '#f99b3b',
    },
  },
  containerRight: {
    padding: '10px 20px 10px 15px',
  },
}));
export default useStyles;
