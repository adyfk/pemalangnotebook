/* eslint-disable import/prefer-default-export, react/prop-types */
import React from "react"
import TopLayout from "./TopLayout"

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <TopLayout {...props}>{element}</TopLayout>
}
