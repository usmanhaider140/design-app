import * as React from "react"
import { Link } from "gatsby"
import Logo from "../images/Logo.png"

import "./header.css"

const Header = () => (
  <header>
    <div className="headerGroup">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy">
        <button>Buy</button>
      </Link>
    </div>
  </header>
)

export default Header
