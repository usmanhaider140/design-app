import * as React from "react"
import { Link } from "gatsby"
import assets from "../assets/assetImport"
import "./header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScroll: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({
        hasScroll: true,
      })
    } else {
      this.setState({
        hasScroll: false,
      })
    }
  }

  render() {
    return (
      <header className={this.state.hasScroll ? "headerScroll" : ""}>
        <div className="headerGroup">
          <Link to="/">
            <img src={assets.Logo} alt="Logo" />
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
  }
}

export default Header
