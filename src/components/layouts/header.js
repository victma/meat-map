import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled";

import { colors, screen } from "../constants"

const Container = styled.header({
  background: colors.header,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  '& > *': {
    margin: 8,
  },

  [screen.mediaQuery.l]: {
    padding: 8,
  },
})

const Header = ({ siteTitle, logo }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fixed(height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Link to="/">
        <Img fixed={data.file.childImageSharp.fixed} />
      </Link>
      <Link to="/">
        <h1>
          {data.site.siteMetadata.title}
        </h1>
      </Link>
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
