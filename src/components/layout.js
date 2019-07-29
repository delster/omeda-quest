import React from "react"
import { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import "typeface-roboto"
import CssBaseline from "@material-ui/core/CssBaseline"
import Header from "./layout/header"

const GlobalStyle = createGlobalStyle`
  #___gatsby {
    background-color: #f4f8ff;
  }
`

const Layout = ({ children }) => (
  <>
    <CssBaseline />
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
