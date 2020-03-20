import React, { Component } from 'react';
import styled from "@emotion/styled";

const Container = styled.div({
  position: "relative",
  display: "inline-block",
  cursor: "pointer",
})

const TooltipSpan = styled.span({
  opacity: 0,
  width: 200,
  textAlign: "center",
  padding: "0 8px",
  borderRadius: 4,
  position: "absolute",
  zIndex: 1,
  top: "100%",
  left: "50%",
  marginLeft: -100,
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

  '&>div': {
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
        <TooltipSpan
          background={this.props.background}
          color={this.props.color}
        >
          {
            typeof this.props.text === "string"
            ? <div>{this.props.text}</div>
            : this.props.text.map(t => (
              <div>{t}</div>
            ))
          }
        </TooltipSpan>
      </Container>
    );
  }
}

export default Tooltip;