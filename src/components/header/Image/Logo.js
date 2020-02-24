import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
    }
  `)
  return (
    <img
      alt="logo-pemalangnotebook"
      src={data.placeholderImage.childImageSharp.original.src}
    ></img>
  )
}

export default Logo
