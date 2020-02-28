import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Logo = () => {
  return (
    <StaticQuery
      query={graphql`
      query{
        imageSharp(fixed: {originalName: {eq: "logo.png"}}) {
          original {
            src
          }
        }
      }`}
      render={data => (
          <img
            alt="logo-pemalangnotebook"
            src={data.imageSharp.original.src}
          ></img>
        )}
    ></StaticQuery>
  )
}

export default Logo
