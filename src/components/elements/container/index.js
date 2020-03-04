import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    margin: '0 auto',
  },
}));

export default function Component(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.children}
    </div>
  );
}
