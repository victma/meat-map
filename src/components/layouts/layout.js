import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import "typeface-roboto"
import "typeface-montserrat"

import Header from "./header"
import Footer from "./footer"
import { colors, fonts, screen } from "../constants"

const style = css`
  html, body, main, #___gatsby {
    margin: 0;
    font-size: ${fonts.base};
  }
  
  body {
    font-family: "Roboto", sans-serif;
    color: ${colors.text};
    background-color: ${colors.background};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Montserrat", sans-serif;
    margin: 0px;
  }

  h1 {
    font-size: ${fonts.h1.s};
    margin: 32px 0 8px;
    font-weight: ${fonts.h1.weight};
    letter-spacing: ${fonts.h1.spacing};
    line-height: 1;

    ${screen.mediaQuery.l} {
      font-size: ${fonts.h1.l};
    }
  }

  h2 {
    font-size: ${fonts.h2.s};
    margin: 32px 0 8px;
    font-weight: ${fonts.h2.weight};
    letter-spacing: ${fonts.h2.spacing};
    line-height: 1;

    ${screen.mediaQuery.l} {
      font-size: ${fonts.h2.l};
    }
  }

  p {
    margin: 8px;
    text-align: justify;
    line-height: 1.28rem;
  }

  a {
    text-decoration: none;
    color: #393332;
  }

  p>a {
    text-decoration: underline;
    font-weight: bold;
  }
`

const fullHeightStyle = css`
  html, body, main, #___gatsby {
    height: 100%;
  }

  #gatsby-focus-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  main {
    height: 100px;
    flex-grow: 1;
  }
`

const Layout = ({ children, fullHeight, withFooter }) => (
  <>
    <Global styles={style} />
    { fullHeight && <Global styles={fullHeightStyle} /> }
    <Header />
    <main>{children}</main>
    { (!fullHeight || withFooter) && <Footer /> }
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
