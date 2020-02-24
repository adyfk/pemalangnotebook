import React from "react"
import BrowserRouter from "react-router-dom/BrowserRouter"

export const wrapRootElement = ({ element }) => {
  return <BrowserRouter>{element}</BrowserRouter>
}
