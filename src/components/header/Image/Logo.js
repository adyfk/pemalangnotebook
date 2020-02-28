import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Logo = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp(filter:{fixed:{originalName:{eq:"logo.png"}}}){
            nodes{
              original{
                src
              }
            }
          }
        }
      `}
      render={data => {
        console.log
        return (
          <img
            alt="logo-pemalangnotebook"
            src={data.allImageSharp.nodes.original.src}
          ></img>
        )
      }}
    ></StaticQuery>
  )
}

export default Logo
