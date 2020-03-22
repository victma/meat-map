import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

import { fonts } from "../constants";

const Container = styled.p({
  fontSize: fonts.partName.details,
  padding: 8,
})

const Recipes = props => {
  return (
    <Container>
      <b>Cuisson : </b>
      {props.names.join(", ")}
    </Container>
  );
};

Recipes.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Recipes;
