import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

import { fonts } from "../constants";

const Container = styled.p({
  fontSize: fonts.partName.details,
})

const Recipes = props => {
  return (
    <Container>
      <b>Cuisson : </b>
      {props.text}
    </Container>
  );
};

Recipes.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Recipes;
