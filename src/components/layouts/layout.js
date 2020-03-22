import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import "typeface-roboto"
import "typeface-montserrat"

import Header from "./header"
import { colors, fonts } from "../constants"

const style = css`
  html, body, main, #___gatsby {
    margin: 0;
    height: 100%;
  }
  
  #gatsby-focus-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  body {
    font-family: "Roboto", sans-serif;
    color: ${colors.text};
    background-color: ${colors.background};
    font-size: ${fonts.base};
  }

  main {
    height: 100px;
    flex-grow: 1;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Montserrat", sans-serif;
    margin: 0px;
  }

  p {
    margin: 8px;
  }

  a {
    text-decoration: none;
    color: #393332;
  }
`

const Layout = ({ children }) => (
  <>
    <Global styles={style} />
    <Header />
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
