import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Logo = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          imageSharp(original: { src: { regex: "/logo-pemalang-notebook/" } }) {
            original {
              src
            }
          }
        }
      `}
      render={data => {
        return (
          <img
            alt="logo-pemalangnotebook"
            src={data.imageSharp.original.src}
          ></img>
        )
      }}
    ></StaticQuery>
  )
}

export default Logo
