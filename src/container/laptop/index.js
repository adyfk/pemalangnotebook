import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

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
              alt
              url
            }
          }
        }
      }
    }
  `);
  const data = nodes.filter((item) => (item.categories[0].parent_element.slug === props.brand && item.categories[0].slug === props.series));
  return (
    <div>
      {data.map((laptop) => {
        const image = laptop.acf.image1;
        const src = image ? image.url : '';
        const alt = image ? image.alt : '';
        return (
          <Link to={`/product/${props.brand}/${props.series}/${laptop.slug}`}>
            <div key={laptop.slug}>
              <img alt={alt} src={src} />
              <div>{laptop.title}</div>
            </div>
          </Link>
        );
      })}
      <div />
    </div>
  );
}
