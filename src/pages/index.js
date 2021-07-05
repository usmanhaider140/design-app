import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

// components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticData from "../../staticData.json"

// assets
import assets from "../assets/assetImport"
import Cell from "../components/Cell"
import styled from "styled-components"
import Footer from "../components/Footer"

const SectionCaption = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 20px auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const {
  Figma,
  Sketch,
  Framer,
  react,
  Swift,
  Invision,
  Wave1,
  Wave2,
  Wave3,
  Wave4,
  Wave5,
  Wave6,
  ReactLogo,
  Image,
} = assets
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
          <img src={Sketch} alt="Sketch" width="50" />
          <img src={Figma} alt="figma" width="50" />
          <img src={Invision} alt="invision" width="50" />
          <img src={Framer} alt="framer" width="50" />
          <img src={react} alt="react" width="50" />
          <img src={Swift} alt="swift" width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card title="React for Designers" text="12 sections" imageUrl={Wave1} />
        <Card
          title="React Native for Designers"
          text="12 sections"
          imageUrl={Wave2}
        />
        <Card
          title="Figma for Developers"
          text="12 sections"
          imageUrl={Wave3}
        />
        <Card
          title="SwiftUI for Developers"
          text="12 sections"
          imageUrl={Wave4}
        />
        <Card title="Swift for Designers" text="12 sections" imageUrl={Wave6} />
        <Card
          title="Principle for Animation"
          text="12 sections"
          imageUrl={Wave5}
        />
      </div>
      <Section
        title="React For Designers"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, est ducimus esse numquam hic modi commodi assumenda fuga possimus.  Labore, est ducimus esse numquam hic modi commodi assumenda fuga possimus."
        logo={ReactLogo}
        image={Image}
      />
    </div>

    <SectionCaption>12 Sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticData.cells.map(cell => (
        <Cell key={cell.title} title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
    <Footer />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }

    allContentfulLink {
      nodes {
        title
        url
      }
    }
  }
`
