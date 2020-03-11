import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Grid, Typography, Box } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Container from '../elements/container';
import TextButon from '../elements/textbuton';
import CardProduct from '../elements/card';
import SearchNotFound from './Image/SearchNotFound';

export default function SearchPage(props) {
  const { allWordpressWpLaptop, allWordpressWpOther } = useStaticQuery(graphql`
    query{  
        allWordpressWpLaptop {
            nodes {
            categories {
                name
                slug
                parent_element {
                name
                slug
                }
            }
            title
            content
            acf {
                available
                price
                image1 {
                  source_url
                  alt_text
                }
            }
            }
      }
      allWordpressWpOther{
        nodes {
          categories {
            name
            slug
            parent_element {
              name
              slug
            }
          }
          title
          content
          acf {
            available
            price
            image1 {
              source_url
              alt_text
            }
          }
        }
      }
    }
    `);
  const strRegExPattern = props.search[0];
  const laptop = allWordpressWpLaptop.nodes.filter((item) => item.title.match(new RegExp(strRegExPattern, 'gi')) || item.content.match(new RegExp(strRegExPattern, 'gi')));
  const accessories = allWordpressWpOther.nodes.filter((item) => item.title.match(new RegExp(strRegExPattern, 'gi')) || item.content.match(new RegExp(strRegExPattern, 'gi')));
  return (
    <Container bgWhite top sm>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography component="span">
            <Box fontWeight={500} fontSize={24}>
              Search Result
            </Box>
          </Typography>
        </Grid>
        <Grid item>
          <CloseIcon
            color="#F79220"
            cursor="pointer"
            onClick={() => {
              props.search[1]('');
            }}
          />
        </Grid>
      </Grid>
      <div style={{ paddingLeft: 25, paddingRight: 25, paddingTop: 10 }}>
        {laptop.length === 0
          || (
            <>
              <Typography>
                <Box paddingY={1} fontSize={20}>
                  Laptop
                </Box>
              </Typography>
              <Grid container style={{ marginBottom: 5 }} spacing={3}>
                {laptop.map(({
                  categories, acf, title, slug,
                }) => {
                  const image = acf.image1;
                  return (
                    <Grid key={slug} lg={2} md={2} sm={12} xs={12} item>
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
            </>
          )}
        {accessories.length === 0
          || (
            <>
              <Typography>
                <Box paddingY={1} fontSize={20}>
                  Accessories
                </Box>
              </Typography>
              <Grid container spacing={3}>
                {accessories.map(({
                  categories, acf, title, slug,
                }) => {
                  const image = acf.image1;
                  return (
                    <Grid key={slug} lg={2} md={2} sm={12} xs={12} item>
                      <TextButon display="block" to={`/product/${categories[0].slug}/${slug}`}>
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
            </>
          )}
      </div>
      {laptop.length === 0 && accessories.length === 0 && (
        <div style={{
          minHeight: '70vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        >
          <SearchNotFound />
          <Typography>
            <Box m={2} fontSize={25} color="#00A9FF">
              Produk tidak ditemukan
            </Box>
          </Typography>
        </div>
      )}
    </Container>
  );
}
