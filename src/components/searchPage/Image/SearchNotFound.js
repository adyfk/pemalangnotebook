import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';


function SearchNotFound(props) {
  const data = useStaticQuery(graphql`
  query {
    imageSharp(original: { src: { regex: "/search-not-found/" } }) {
      original {
        src
      }
    }
  }`);

  return (
    <img
      {...props}
      alt="search-not-found"
      src={data.imageSharp.original.src}
    />
  );
}
export default SearchNotFound;
