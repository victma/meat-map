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
  backgroundColor: "#393332",
  color: "white",
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
    borderColor: "transparent transparent black transparent",
  },

  '&>div': {
    margin: "8px 0",
  }
}, props => ({
  '@media (hover: none)': {
    opacity: props.visible ? 1 : 0,
  }
}))

class Tooltip extends Component {
  state = {
    visible: false,
  }

  handleClick = () => {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <Container
        onClick={this.handleClick}
      >
        {this.props.children}
        <TooltipSpan visible={this.state.visible}>
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