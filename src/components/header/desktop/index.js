import React from 'react';
import { push } from 'gatsby';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { globalHistory } from '@reach/router';
import TextButton from '../../elements/textbuton';
import useStyles from './style';
import Logo from '../../Image/Logo';
import MenuLaptop from './menu';

export default function Desktop(props) {
  const classes = useStyles();
  const { location } = globalHistory;
  const [productMenu, setProductMenu] = React.useState(false);
  return (
    <Toolbar>
      <Logo onClick={() => push('/')} />
      <div className={classes.grow} />
      <div className={classes.sectionDesktop}>
        <TextButton to="/" className={classes.menuAppbar}>
          Dashboard
        </TextButton>
        <TextButton
          display="block"
          className={clsx(classes.menuAppbar, classes.relative)}
          onMouseEnter={() => setProductMenu(true)}
          onMouseLeave={() => setProductMenu(false)}
        >
          Product
          {productMenu && (
          <div
            id="dropdown-menu"
            className={clsx(classes.menuDropdown)}
          >
            <MenuLaptop category={props.category} />
          </div>
          )}
        </TextButton>
        <TextButton
          to={`${location.pathname}#footer`}
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
          value={props.search[0]}
          onChange={(e) => props.search[1](e.target.value)}
          inputProps={{ 'aria-label': 'search' }}
        />
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
      </div>
    </Toolbar>
  );
}
