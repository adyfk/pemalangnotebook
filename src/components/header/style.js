import makeStyles from '@material-ui/core/styles/makeStyles';
import CONSTANT from '../../constants';

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: CONSTANT.COLOR.white,
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25);',
  },
}));
export default useStyles;
