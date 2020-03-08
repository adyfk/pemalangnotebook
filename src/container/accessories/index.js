import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Grid } from '@material-ui/core';
import CardProduct from '../../components/elements/card';
import TextButon from '../../components/elements/textbuton';

export default function Accessories() {
  const { allWordpressWpOther: { nodes } } = useStaticQuery(graphql`
    query {
      allWordpressWpOther {
        nodes {
          slug
          title
          content
          categories {
            name
            slug
          }
          acf {
            price
            available
            image1{
              url
              alt
            }
          }
          modified
        }
      }
    }
    `);
  const data = nodes.filter((item) => (item.categories[0].slug === 'accessories'));
  return (
    <Grid container>
      {data.map(({ acf, title, slug }) => {
        const image = acf.image1;
        return (
          <Grid key={slug} lg={3} md={3} sm={12} xs={12} item>
            <TextButon to={`/product/accessories/${slug}`}>
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
  );
}
