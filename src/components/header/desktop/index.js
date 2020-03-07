import React from 'react';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import TextButton from '../../elements/textbuton';
import useStyles from './style';
import Logo from '../Image/Logo';
import MenuLaptop from './menu';

export default function Desktop() {
  const classes = useStyles();
  const [productMenu, setProductMenu] = React.useState(false);
  // console.log(productMenu);
  return (
    <Toolbar>
      <Logo />
      <div className={classes.grow} />
      <div className={classes.sectionDesktop}>
        <TextButton to="/" className={classes.menuAppbar}>
          Dashboard
        </TextButton>
        <TextButton
          className={clsx(classes.menuAppbar, classes.relative)}
          onMouseEnter={() => setProductMenu(true)}
          onMouseLeave={() => setProductMenu(false)}
        >
          Product
          {productMenu && (
          <div
            id="dropdown-menu"
            className={clsx(classes.menuDropdown, {
            //   [classes.hidden]: !productMenu,
            })}
          >
            <MenuLaptop />
          </div>
          )}
        </TextButton>
        <TextButton
          className={classes.menuAppbar}
        >
          About Us
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
  );
}
