import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

const Logo = () => {
  const [src, setSrc] = useState("")
  useEffect(() => {
    async function getImage() {
      const data = await graphql`
        query {
          placeholderImage: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      `
      setSrc(data.placeholderImage.childImageSharp.original.src)
    }
    getImage()
  }, [])
  return <img alt="logo-pemalangnotebook" src={src}></img>
}

export default Logo
