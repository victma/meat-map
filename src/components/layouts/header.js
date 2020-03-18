import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled";

import { colors } from "../constants"

const Container = styled.header({
  background: colors.header,
  padding: "8px 16px",
  textAlign: "center",
})

const Header = ({ siteTitle }) => (
  <Container>
    <h1>
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </h1>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
