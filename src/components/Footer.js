import React from "react"
import styled from "styled-components"
import { FaTwitter } from "react-icons/fa"

import "./Footer.css"
const Container = styled.div`
  background-color: #f1f3f5;
  height: 630px;
`

const Footer = () => {
  return (
    <Container>
      <h2 className="footerTitle">
        Tweet “Prototype and build apps with React and Swift. New courses by
        @MengTo”
      </h2>
      <div className="footerButton">
        <div className="button">
          <FaTwitter />
          Tweet
        </div>
      </div>
      <div className="footerLinks">
        <div className="links">
          <div className="linkTitle">Main</div>
          <div className="linkGroup">
            <a href="/">Home</a>
            <a href="/">Courses</a>
            <a href="/">Design System</a>
            <a href="/">Jobs</a>
            <a href="/">English</a>
          </div>
        </div>
        <div className="links">
          <div className="linkTitle">Resources</div>
          <div className="linkGroup">
            <a href="/">Downloads</a>
            <a href="/">Angle Mockups</a>
            <a href="/">iOS UI Kit</a>
            <a href="/">iPhone X Wallpapers</a>
            <a href="/">5K Wallpapers</a>
          </div>
        </div>
        <div className="links">
          <div className="linkTitle">Community</div>
          <div className="linkGroup">
            <a href="/">Learn Resources</a>
            <a href="/">Workshops</a>
            <a href="/">Testimonials</a>
            <a href="/">Meetups</a>
            <a href="/">FAQ</a>
          </div>
        </div>
      </div>
      <div className="footerCaption">
        Backgrounds made in Cinema 4D, iOS app in Swift, site in React.
        <br />
        <b>Email us</b> to ask anything. © 2018 -{" "}
        <b>Terms of Service - Privacy Policy.</b>
      </div>
    </Container>
  )
}

export default Footer
