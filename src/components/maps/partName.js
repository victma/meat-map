import React, { Component } from 'react';
import styled from "@emotion/styled";

import HoverAdpatedSpan from "../generic/hoverAdaptedSpan";
import Tooltip from "../generic/tooltip";

import { colors, screen } from "../constants";

const FixedContainer = styled.div({
  textAlign: "center",
  height: "100%",
  boxSizing: "border-box",
  overflow: "hidden",
  position: "relative",
})

const HelpMessage = styled.p({
  boxSizing: "border-box",
  position: "absolute",
  left: 0,
  bottom: 0,
  width: "100%",
  fontSize: 24,
  padding: 16,
  margin: 0,
  background: colors.pieceName.background,
  color: colors.pieceName.text,
  [screen.mediaQuery.l]: {
    left: "50%",
    width: 500,
    marginLeft: -250,
    bottom: 32,
    borderRadius: 500,
  }
})

const MovingContainer = styled.div({
  transition: "0.5s",
  margin: "0 auto",
  maxWidth: screen.l,
}, props => ({
  transform: props.show ? "translateY(0%)" : "translateY(100%)"
}))

const Title = styled.h2({
  display: "inline-block",
  boxSizing: "border-box",
  margin: 0,
  width: "100%",
  padding: "32px 32px 16px",
  background: colors.pieceName.background,
  borderRadius: "8px 8px 0 0",
  [screen.mediaQuery.l]: {
    fontSize: 36,
    width: "unset",
    margin: "0 32px",
    padding: "32px 64px 16px",
  }
})

const Description = styled.div({
  padding: "32px 32px 100%",
  margin: 0,
  textAlign: "center",
  background: colors.pieceName.background,
  [screen.mediaQuery.l]: {
    borderRadius: "8px 8px 0 0",
  }
})

const Nutrition = styled.p({
  fontSize: "1.4rem",
  
  '& > :not([role=img])': {
    borderBottom: "2px dotted #444",
  }
})

class PartName extends Component {
  state = { 
    label: "",
    description: "",
    nutrition: {
      lipids: {
        value: null,
        text: [],
      },
    },
   }

  // Needed to keep the previous name on animation
  static getDerivedStateFromProps(props, state) {
    if (!props.name || props.name === state.label) {
      return null;
    }

    return {
      label: props.name,
      description: props.description,
      nutrition: props.nutrition,
    };
  }

  render() { 
    console.log(this.state);
    return (
      <FixedContainer>
        <HelpMessage>
          <HoverAdpatedSpan
            hoverable={"Survolez la carte pour afficher les détails"}
            nonHoverable={"Cliquez la carte pour afficher les détails"}
          />
        </HelpMessage>
        <MovingContainer show={this.props.name}>
          <Title>{ this.state.label }</Title>
          <Description>
            <Tooltip
              text={
                this.state.nutrition.lipids.text.length === 0
                ? "Pas de doneées"
                : this.state.nutrition.lipids.text
              }
            >
              <Nutrition><span role="img" aria-label="Frites">🍟</span> <span>{this.state.nutrition.lipids.value || "-"} %</span></Nutrition>
            </Tooltip>
            <p>{this.state.description}</p>
          </Description>
        </MovingContainer>
      </FixedContainer>
    );
  }
}
 
export default PartName;
