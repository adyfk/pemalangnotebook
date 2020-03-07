import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import useStyles from './style';
import Desktop from './desktop';

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar classes={{ root: classes.appBar }} position="static">
        <Desktop />
      </AppBar>
    </div>
  );
}

/* <IconButton
    edge="start"
    className={classes.menuButton}
    color="inherit"
    aria-label="open drawer"
  >
    <MenuIcon />
  </IconButton> */
