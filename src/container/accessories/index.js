import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

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
            image2
            image3
            image4
          }
          modified
        }
      }
    }
    `);
  const data = nodes.filter((item) => (item.categories[0].slug === 'accessories'));
  return (
    <div>
      {data.map((item) => {
        const image = item.acf.image1;
        const src = image ? image.url : '';
        const alt = image ? image.alt : '';
        return (
          <Link to={`/product/accessories/${item.slug}`}>
            <div key={item.slug}>
              <img alt={alt} src={src} />
              <div>{item.title}</div>
            </div>
          </Link>
        );
      })}
      <div />
    </div>
  );
}
