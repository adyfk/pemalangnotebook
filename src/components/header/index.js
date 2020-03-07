import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { useStaticQuery, graphql } from 'gatsby';
import useStyles from './style';
import Desktop from './desktop';

export default function Header(props) {
  const classes = useStyles();
  const { allWordpressCategory: { nodes } } = useStaticQuery(graphql`
    query{
        allWordpressCategory(filter: {parent_element: {name: {regex: "/LP/"}}}) {
            nodes {
            parent_element {
                name
                slug
            }
            name
            slug
            }
        }
    }
  `);
  const laptopCategory = nodes.reduce((acc, item) => {
    let sub = [];
    if (acc[item.parent_element.slug]) { sub = acc[item.parent_element.slug]; }
    const data = {
      ...acc,
      [item.parent_element.slug]: [
        item.slug,
        ...sub,
      ],
    };

    return data;
  }, {});
  const childrenLaptop = Object.keys(laptopCategory).map((item) => ({
    name: item,
    list: laptopCategory[item].sort().map((name) => name),
  }));
  return (
    <div className={classes.grow}>
      <AppBar classes={{ root: classes.appBar }} position="static">
        <Desktop search={props.search} category={childrenLaptop} />
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
