import * as React from "react"

import "./layout.css"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
