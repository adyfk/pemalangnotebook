import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Grid } from '@material-ui/core';
import CardProduct from '../../components/elements/card';
import TextButon from '../../components/elements/textbuton';

export default function Laptop(props) {
  const { allWordpressWpLaptop: { nodes } } = useStaticQuery(graphql`
    query {
      allWordpressWpLaptop {
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
          acf{
            available
            price
            image1{
              alt_text
              source_url
            }
          }
        }
      }
    }
  `);
  const data = nodes.filter((item) => (item.categories[0].parent_element.slug === props.brand && item.categories[0].slug === props.series));
  return (
    <Grid container>
      {data.map(({ acf, title, slug }) => {
        const image = acf.image1;
        return (
          <Grid key={slug} lg={3} md={3} sm={12} xs={12} item>
            <TextButon display="block" to={`/product/${props.brand}/${props.series}/${slug}`}>
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
