import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import "typeface-roboto"
import "typeface-montserrat"

import Header from "./header"
import { colors, fonts, screen } from "../constants"

const style = css`
  html, body, main, #___gatsby {
    margin: 0;
    height: 100%;
    font-size: ${fonts.base};
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
  }

  main {
    height: 100px;
    flex-grow: 1;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Montserrat", sans-serif;
    margin: 0px;
  }

  h1 {
    font-size: ${fonts.h1.s};
    margin-top: 32px;
    font-weight: ${fonts.h1.weight};
    letter-spacing: ${fonts.h1.spacing};

    ${screen.mediaQuery.l} {
      font-size: ${fonts.h1.l};
    }
  }

  p {
    margin: 8px 8px 32px;
    text-align: justify;
    line-height: 1.28rem;
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
