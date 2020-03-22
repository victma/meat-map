import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

const Container = styled.div({
  position: "relative",
  display: "inline-block",
  cursor: "pointer",
})

const TooltipDiv = styled.div({
  whiteSpace: "nowrap",
  opacity: 0,
  textAlign: "center",
  padding: "0 8px",
  borderRadius: 4,
  position: "absolute",
  zIndex: 1,
  top: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  transition: "opacity .4s",
  
  [`${Container}:hover &`]: {
    opacity: 1,
  },

  '&::after': {
    content: '" "',
    position: "absolute",
    bottom: "100%",
    left: "50%",
    marginLeft: -8,
    borderWidth: 8,
    borderStyle: "solid",
  },

  '&>div, &>hr': {
    margin: "8px 0",
  }
}, props => ({
  backgroundColor: props.background,
  color: props.color,
  '&::after': {
    borderColor: `transparent transparent ${props.background} transparent`,
  }
}))

class Tooltip extends Component {
  state = {
    visible: false,
  }

  render() {
    return (
      <Container>
        {this.props.children}
        <TooltipDiv
          background={this.props.background}
          color={this.props.color}
        >
          { this.props.title && 
            <>
              <div>{this.props.title}</div>
              <hr />
            </>
          }
          {
            typeof this.props.text === "string"
            ? <div>{this.props.text}</div>
            : this.props.text.map(t => (
              <div>{t}</div>
            ))
          }
        </TooltipDiv>
      </Container>
    );
  }
}

Tooltip.propTypes = {
  title: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
};

Tooltip.defaultProps = {
  background: "black",
  color: "white",
};

export default Tooltip;