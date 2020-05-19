import React from 'react';
import styled from "@emotion/styled";

import Recipes from "./recipes";
import Attributes from "./attributes";

import { colors, screen } from "../constants";

const Description = styled.div({
  flexGrow: 1,
  width: "100%",
  padding: "8px 16px",
  margin: 0,
  textAlign: "center",
  overflowY: 'scroll',
  background: colors.partName.background,
  [screen.mediaQuery.l]: {
    borderRadius: "8px 8px 0 0",
    padding: "16px 32px",
  }
})

const PartDescription = (props) => {
  return (
    <Description>
      {props.cooking.text &&
        <Recipes text={props.cooking.text} />
      }
      <Attributes attributes={props.attributes} />
      {props.description.split('\n').map(paragraph => (
        <p>{paragraph}</p>
      ))}
    </Description>
  );
};

export default PartDescription;
