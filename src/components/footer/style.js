import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  icon: {
    fill: 'grey',
    margin: 6,
    '&:hover': {
      cursor: 'pointer',
      fill: '#F79220',
    },
  },
  containerBrand: {
    margin: '30px 0px 30px 0px',
  },
  containerFooter: {
    paddingTop: 20,
    borderTop: '1px solid red',
  },
  containerContact: {
    paddingTop: 0, paddingBottom: 10, margin: '20px 0px 20px 0px',
    // backgroundColor: 'rgba(255, 255, 255, 0.38)',
  },
  textCopyright: {
    marginBottom: 20,
  },
}));
export default useStyles;
