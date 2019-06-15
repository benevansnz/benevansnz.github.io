import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>(Randomly generate h1s here)</h1>
    <div
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
      }}
    >
      <Card 
        cardTitle="wow" 
        linkDestination="/page-2/" 
        desktopFlex="1 0 25%" />
      <Card 
        cardTitle="extra wow"
        linkDestination="/page-3/" 
        desktopFlex="1 0 25%" />
      <Card 
        cardTitle="MEGA wow"
        linkDestination="/page-4/" 
        desktopFlex="1 0 25%" />
    </div>
  </Layout>
)

export default IndexPage
