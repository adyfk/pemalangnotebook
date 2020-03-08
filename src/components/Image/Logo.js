import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';


function Logo(props) {
  const data = useStaticQuery(graphql`
  query {
    imageSharp(original: { src: { regex: "/logo-pemalang-notebook/" } }) {
      original {
        src
      }
    }
  }`);

  return (
    <img
      {...props}
      alt="logo-pemalangnotebook"
      src={data.imageSharp.original.src}
    />
  );
}
export default Logo;
