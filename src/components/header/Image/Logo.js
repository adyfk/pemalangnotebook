import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Logo = () => {
  return (
    <StaticQuery
      query={graphql`
      query MyQuery {
        imageSharp(fixed: {originalName: {eq: "logo.png"}}) {
          original {
            src
          }
        }
      }
      `}
      render={data => {
console.log(data)
       return  <img
        alt="logo-pemalangnotebook"
        src=""
        // src={data.allImageSharp.edges[0].node.original.src}
        ></img>
      }}
    ></StaticQuery>
  )
}

export default Logo
