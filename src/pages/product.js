import React from 'react';
import { Router } from '@reach/router';
import { Grid } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import Accessories from '../container/accessories';
import Laptop from '../container/laptop';
import Marchandise from '../container/marchandise';
import Treeview from '../components/elements/treeviewcategory';
import BreadCrumb from '../components/elements/breadcrumb';
import Layout from '../components/layout';

const Product = () => {
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
    children: laptopCategory[item].sort().map((name) => ({ name })),
  }));
  return (
    <Layout>
      <Grid container>
        <Grid item lg={12} md={12} xs={12} sm={12}>
          <BreadCrumb />
        </Grid>
        <Grid item lg={3} md={3} xs={12} sm={12}>
          <Treeview
            expands={Object.keys(laptopCategory)}
            data={[
              { name: 'accessories' },
              {
                name: 'laptop',
                children: childrenLaptop,
              },
              { name: 'marchandise' }]}
          />
        </Grid>
        <Grid item lg={9} md={9} xs={12} sm={12}>
          <Router basepath="/product">
            <Accessories path="/accessories" />
            <Laptop path="/:brand/:series" />
            <Marchandise path="/marchandise" />
          </Router>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Product;
