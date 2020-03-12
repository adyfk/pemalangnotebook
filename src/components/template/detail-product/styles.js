import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10,
  },
  category: {
    fontWeight: 600,
    fontSize: 18,
    marginLeft: 22,
  },
  containerFilter: {
    border: '1px solid grey',
    padding: '10px 0px',
  },
  containerImage: {
    position: 'relative',
  },
  content: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: 50,
    },
  },
  emptyStock: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 400,
    height: 400,
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.3)',
    borderRadius: 7,
  },
  imageSmall: {
    borderRadius: 7,
    cursor: 'pointer',
    backgroundColor: 'red',
    filter: 'blur(0.5px)',
    webkitFilter: 'blur(0.5px)',
  },
  imageSmallActive: {
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.3)',
    filter: 'none',
  },
  treeView: {
    marginTop: 10,
    minHeight: 250,
  },
  smallImageActive: {
    backgroundColor: 'red',
  },
}));

export default useStyles;
