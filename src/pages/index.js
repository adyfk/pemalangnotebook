import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { graphql, useStaticQuery } from 'gatsby';
import { Grid, Typography, Box } from '@material-ui/core';
import Layout from '../components/layout';
import TextButon from '../components/elements/textbuton';
import CardProduct from '../components/elements/card';
import Container from '../components/elements/container';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    [theme.breakpoints.up('lg')]: {
      width: '85vw',
    },
    width: '95vw',
    margin: '10px auto',
    justifyContent: 'center',
  },
  jumbotron: {
    height: '90vh',
    backgroundColor: '#26D1F6',
  },
}));

const IndexPage = () => {
  const classes = useStyles();
  const { allWordpressWpLaptop: { nodes } } = useStaticQuery(graphql`
  {
    allWordpressWpLaptop(sort: {order: ASC, fields: modified}, limit: 8) {
      nodes {
        modified
        slug
        title
        content
        categories {
          parent_element {
            slug
          }
          slug
        }
        acf {
          available
          price
          image1 {
            alt_text
            source_url
          }
        }
      }
    }
  }`);

  return (
    <Layout>
      <Container top sm>
        <div className={classes.jumbotron} />
        <div style={{ margin: '50px 0px' }}>
          <Typography>
            <Box
              fontWeight={500}
              fontSize={24}
            >
              RECENT PRODUCT
            </Box>
          </Typography>
          <hr />
          <div className={classes.cardContainer}>
            <Grid container spacing={3}>
              {nodes.map(({
                categories, acf, title, slug,
              }) => {
                const image = acf.image1;
                return (
                  <Grid key={slug} lg={3} md={3} sm={6} xs={12} item>
                    <TextButon display="block" to={`/product/${categories[0].parent_element.slug}/${categories[0].slug}/${slug}`}>
                      <CardProduct
                        title={title}
                        acf={{
                          ...acf,
                          image,
                        }}
                      />
                    </TextButon>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
