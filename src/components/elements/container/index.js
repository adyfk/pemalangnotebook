import React from 'react';
import clsx from 'clsx';
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
  rootSm: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    margin: '0 auto',
  },
  rootTop: {
    paddingTop: theme.spacing(2),
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  rootGlobal: {
    minHeight: '100vh',
  },
}));

export default function Component(props) {
  const classes = useStyles();
  return (
    <div className={clsx(
      classes.rootGlobal,
      {
        [classes.root]: !props.sm,
        [classes.rootSm]: props.sm,
        [classes.rootTop]: props.top,
        [classes.bgWhite]: props.bgWhite,
      },
    )}
    >
      {props.children}
    </div>
  );
}
