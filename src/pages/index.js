import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import figma from "../images/icons/figma-logo.png"
import sketch from "../images/icons/logo-sketch.png"
import framer from "../images/icons/logo-framerx.png"
import react from "../images/icons/logo-react.png"
import swift from "../images/icons/logo-swift.png"
import invision from "../images/icons/logo-invision.png"

const IndexPage = () => (
  <Layout>
    <Seo title="Design App" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to <br />
          design and code React apps
        </h1>
        <p>
          Welcome to the future of you and your children. Build Prototype and
          build apps with React and Typescript.
        </p>
        <Link to="/page-2/">Watch the Video</Link> <br />
        <div className="logos">
          <img src={sketch} alt="Sketch" width="50" />
          <img src={figma} alt="figma" width="50" />
          <img src={invision} alt="invision" width="50" />
          <img src={framer} alt="framer" width="50" />
          <img src={react} alt="react" width="50" />
          <img src={swift} alt="swift" width="50" />
        </div>
        <svg width="100%" height="172" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fff">
            <animate
              repeatCount="indefinite"
              fill="freeze"
              attributeName="d"
              dur="10s"
              values="M1919 244L0 244C0 244 0 -81.0433 0 -0.032486C198.646 68.0107 438.521 34.0062 702.759 10.003C966.996 -14.0002 1060.7 92.0139 1184.38 68.0107C1308.07 44.0076 1505.03 -11.4074 1628.53 24.0049C1754.09 60.0097 1824.05 33.6387 1919 13.9694V244Z;
              M1919 315.018L0 315.018C0 315.018 0 -10.0038 0 71.007C198.646 139.05 213 24.459 405 7.01776C597 -10.4234 709 187.029 879 89.0178C1049 -8.99298 1271.3 -6.99847 1399 7.01776C1563 25.0178 1705 141.018 1919 84.9871V315.018Z;
              M1919 304.018L0 304.018C0 304.018 0 -21.0038 0 60.007C198.646 128.05 235 60.4412 427 43C619 25.5588 849 141.011 1019 43C1189 -55.0107 1389.3 45.9908 1517 60.007C1681 78.007 1705 130.018 1919 73.9871V304.018Z;
              M1919 244L0 244C0 244 0 -81.0433 0 -0.032486C198.646 68.0107 438.521 34.0062 702.759 10.003C966.996 -14.0002 1060.7 92.0139 1184.38 68.0107C1308.07 44.0076 1505.03 -11.4074 1628.53 24.0049C1754.09 60.0097 1824.05 33.6387 1919 13.9694V244Z
              "
            />
          </path>
        </svg>
      </div>
    </div>
  </Layout>
)

export default IndexPage
