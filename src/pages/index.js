import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main class="content-wrapper">
      <div class="intro">
        <h1>Hey!</h1>
        <p>Check out the links below if you want to know more about me.</p>
      </div>
      <div class="card-wrapper card-wrapper--homepage">
        <Card 
          cardTitle="Projects"
          cardDescription="At the time of writing, I primarily work via Bitbucket. In the meantime, feel free to check out my Github projects." 
          linkDestination="https://github.com/benevansnz/"
          ctaText="I'll have a look anyway"/>
        <Card 
          cardTitle="Codepen"
          cardDescription="I have a collection of some truly frightful codepens, as I'm no CSS Tricks, you may find 1 or 100 pens depending the time of viewing."
          linkDestination="https://codepen.io/benevansnz/"
          ctaText="why not?"/>
        <Card 
          cardTitle="Twitter"
          cardDescription="My twitter is a mix of web dev, politics, and various comedians. My unique permutations, are aguably of value to no one."
          linkDestination="http://twitter.com/benevansnz"
          ctaText="enter where light does not escape"/>
        <Card 
          cardTitle="LinkedIn"
          cardDescription="Want to connect on the social network my university considered essential? Go for it."
          linkDestination="https://www.linkedin.com/in/benevansnz/"
          ctaText="connect"/>
      </div>
    </main>
  </Layout>
)

export default IndexPage
