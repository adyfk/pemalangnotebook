import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

export const replaceRouterComponent = ({ history }) => {
  const RouterWrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  )
  return RouterWrapper
}
