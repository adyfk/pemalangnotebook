import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
  return (
    <img
      alt="logo-pemalangnotebook"
      src={data?.placeholderImage?.childImageSharp?.fluid?.src}
    />
  )
}

export default Logo
