import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main class="content-wrapper">
      <div class="intro">
        <h1>Hello!</h1>
        <h2>I'm Ben Evans, a web developer</h2>
        <p>Check out the links below if you want to know more about me.</p>
      </div>
      <div class="links">
        <a href="https://github.com/benevansnz/">Github</a>
        <a href="https://codepen.io/benevansnz/">Codepen</a>
        <a href="http://twitter.com/benevansnz/">Twitter</a>
        <a href="https://www.linkedin.com/in/benevansnz/">LinkedIn</a>
      </div>
    </main>
  </Layout>
)

export default IndexPage
