import React from "react"
import Layout from "../components/layout"
import SEO from "../components/utils/seo"
import Game from "../components/game/GameState"

export default () => (
  <Layout>
    <SEO title="Home" />
    <Game />
  </Layout>
)
