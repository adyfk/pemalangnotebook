import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Grid } from '@material-ui/core';

export default function SearchPage() {
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
                url
                alt
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
              url
              alt
            }
          }
        }
      }
    }
    `);
  //   const strRegExPattern = props.search[0];
  //   console.log(allWordpressWpLaptop.nodes.filter((item) => item.title.match(new RegExp(strRegExPattern, 'gi')) || item.content.match(new RegExp(strRegExPattern, 'gi'))));
  //   console.log(allWordpressWpOther.nodes.filter((item) => item.title.match(new RegExp(strRegExPattern, 'gi')) || item.content.match(new RegExp(strRegExPattern, 'gi'))));
  return (
    <div>
      <h2>Search Result</h2>
      <h3>Laptop Category</h3>
      <Grid container>
        <Grid item>
          {JSON.stringify(allWordpressWpLaptop.nodes, null, 4)}
        </Grid>
      </Grid>
      <h3>Accessories and Marchandise</h3>
      <Grid container>
        <Grid item>
          {JSON.stringify(allWordpressWpOther.nodes, null, 4)}
        </Grid>
      </Grid>
    </div>
  );
}
