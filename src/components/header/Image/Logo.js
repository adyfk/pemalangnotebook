import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Logo = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <img
            alt="logo-pemalangnotebook"
            src={data.placeholderImage.childImageSharp.original.src}
          ></img>
        )
      }}
    ></StaticQuery>
  )
}

export default Logo
