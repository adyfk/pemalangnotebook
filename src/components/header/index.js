import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './style';
import TextButton from '../elements/textbuton';
import Logo from './Image/Logo';

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar classes={{ root: classes.appBar }} position="static">
        <Toolbar>
          <Logo />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <TextButton to="/" className={classes.menuAppbar}>
              Dashboard
            </TextButton>
            <TextButton className={classes.menuAppbar}>Category</TextButton>
            <TextButton className={classes.menuAppbar}>Laptop</TextButton>
            <TextButton className={classes.menuAppbar}>Accessories</TextButton>
            <TextButton to="#" className={classes.menuAppbar}>
              Merchandise
            </TextButton>
          </div>
          <div className={classes.searchDesktop}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
        </Toolbar>
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
