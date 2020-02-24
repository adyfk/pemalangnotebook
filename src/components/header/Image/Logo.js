import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
  return <img src={data.placeholderImage.childImageSharp.fluid.src} />
}

export default Logo
