import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

import HoverAdpatedSpan from "../generic/hoverAdaptedSpan";
import PartDescription from "./partDescription";

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
  background: colors.partName.background,
  color: colors.partName.text,
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
  height: "100%",
  margin: "0 auto",
  maxWidth: screen.l,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}, props => ({
  transform: props.show ? "translateY(0%)" : "translateY(100%)"
}))

const Title = styled.h2({
  display: "inline-block",
  boxSizing: "border-box",
  margin: 0,
  width: "100%",
  padding: "16px 32px 8px",
  background: colors.partName.background,
  borderRadius: "8px 8px 0 0",
  [screen.mediaQuery.l]: {
    fontSize: 36,
    width: "unset",
    margin: "0 32px",
    padding: "32px 64px 16px",
  }
})

class PartName extends Component {
  state = { 
    label: "",
    description: "",
    nutrition: {},
    cooking: {},
    attributes: {},
   };

  // Needed to keep the previous name on animation
  static getDerivedStateFromProps(props, state) {
    if (!props.name || props.name === state.label) {
      return null;
    }

    return {
      label: props.name,
      description: props.description,
      nutrition: props.nutrition,
      cooking: props.cooking,
      attributes: props.attributes,
    };
  }

  render() { 
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
          <PartDescription
            description={this.state.description}
            nutrition={this.state.nutrition}
            cooking={this.state.cooking}
            attributes={this.state.attributes}
          />
        </MovingContainer>
      </FixedContainer>
    );
  }
}

PartName.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  nutrition: PropTypes.shape({
    lipids: PropTypes.exact({
      value: PropTypes.number,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
    })
  }).isRequired,
  cooking: PropTypes.shape({
    text: PropTypes.string,
    grilled: PropTypes.bool,
    roasted: PropTypes.bool,
    stewed: PropTypes.bool
  }).isRequired,
};
 
export default PartName;
