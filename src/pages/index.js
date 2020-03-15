import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { graphql, useStaticQuery } from 'gatsby';
import { Grid, Typography, Box } from '@material-ui/core';
import Layout from '../components/layout';
import TextButon from '../components/elements/textbuton';
import CardProduct from '../components/elements/card';
import Container from '../components/elements/container';
import SEO from '../components/seo';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    [theme.breakpoints.up('lg')]: {
      width: '85vw !important',
    },
    width: '95vw',
    margin: '10px auto',
  },
  jumbotron: {
    width: '100%',
    backgroundColor: '#26D1F6',
  },
}));

const IndexPage = () => {
  const classes = useStyles();
  const { allWordpressWpLaptop: { nodes }, wordpressMenusMenusItems: { items } } = useStaticQuery(graphql`
  {
    allWordpressWpLaptop(sort: {order: DESC, fields: modified}, limit: 4) {
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
    wordpressMenusMenusItems {
      items {
        url {
          source_url
        }
      }
    }
  }`);

  return (
    <Layout>
      <SEO title="Pemalang Notebook" />
      <Container top sm>
        <img className={classes.jumbotron} alt="jumbotron-pemalangnotebook" width="100%" src={items[0].url.source_url} />
        <div style={{ margin: '30px 0px' }}>
          <Typography>
            <Box
              fontWeight={500}
              fontSize={24}
            >
              RECENT PRODUCT
            </Box>
          </Typography>
          <hr />
          <Grid classes={{ root: classes.cardContainer }} container spacing={3}>
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
      </Container>
    </Layout>
  );
};

export default IndexPage;
