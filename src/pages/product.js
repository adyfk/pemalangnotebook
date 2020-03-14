import React from 'react';
import { Router } from '@reach/router';
import { Grid } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Accessories from '../container/accessories';
import Laptop from '../container/laptop';
import Marchandise from '../container/marchandise';
import Treeview from '../components/elements/treeviewcategory';
import BreadCrumb from '../components/elements/breadcrumb';
import Layout from '../components/layout';
import SEO from '../components/seo';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 15,
  },
}));


function Product() {
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
    return {
      ...acc,
      [item.parent_element.slug]: [
        item.slug,
        ...sub,
      ],
    };
  }, {});
  const childrenLaptop = Object.keys(laptopCategory).map((item) => ({
    name: item,
    children: laptopCategory[item].sort().map((name) => ({ name })),
  }));
  return (
    <SEO title="Pemalang Notebook | Product">
      <Layout container>
        <Grid container spacing={3} className={classes.container}>
          <Grid item lg={12} md={12} xs={12} sm={12}>
            <BreadCrumb />
          </Grid>
          <Grid item lg={12} md={12} xs={12} sm={12}>
            <Grid container spacing={5}>
              <Grid item lg={3} md={3} xs={12} sm={12}>
                <TreeViewWrapper laptopCategory={laptopCategory} childrenLaptop={childrenLaptop} />
              </Grid>
              <Grid item lg={9} md={9} xs={12} sm={12}>
                <Router basepath="/product">
                  <Accessories path="/accessories" />
                  <Laptop path="/:brand/:series" />
                  <Marchandise path="/marchandise" />
                </Router>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </SEO>
  );
}
const useStylesTreeViewWrapper = makeStyles(() => ({
  category: {
    fontWeight: 600,
    fontSize: 18,
    marginLeft: 22,
  },
  containerFilter: {
    border: '1px solid grey',
    padding: '10px 0px',
  },
  treeView: {
    marginTop: 10,
    minHeight: 300,
  },
}));


function TreeViewWrapper({ laptopCategory, childrenLaptop }) {
  const classes = useStylesTreeViewWrapper();
  return (
    <div className={classes.containerFilter}>
      <span className={classes.category}>
        Category
      </span>
      <Treeview
        classes={{ root: classes.treeView }}
        expands={Object.keys(laptopCategory)}
        data={[
          { name: 'accessories' },
          {
            name: 'laptop',
            children: childrenLaptop,
          },
          { name: 'marchandise' }]}
      />
    </div>
  );
}

export default Product;
