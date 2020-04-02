import React, { Component } from 'react';
import styled from "@emotion/styled";

import { colors, screen } from "../constants";

import Piece from "./piece"
import UnediblePiece from "./unediblePiece"

const Svg = styled.svg({
  [screen.mediaQuery.l]: {
    maxWidth: "100%",
  }
})

class Map extends Component {
  constructor(props) {
    super(props);
    this.svgRef = React.createRef();
  }

  updateHovered = (id, isHovered) => {
    this.props.hovered(isHovered ? id : null);
  }

  handleClickOnMap = (event) => {
    if(event.target === this.svgRef.current) {
      this.props.clicked(null);
    }
  }

  render() { 
    return (
      <Svg
        viewBox="0 0 159.69495 99.785713"
        fill={colors.map.fill}
        stroke={colors.map.stroke}
        strokeWidth={0.7}
        height="100%"
        ref={this.svgRef}
        onClick={this.handleClickOnMap}
        >
          {
            this.props.parts.map(p => ( p.description ?
            <Piece
              key={p.id}
              d={p.d}
              transform={p.transform}
              selected={this.props.selected === p.id}
              onHover={h => (this.updateHovered(p.id, h))}
              onClick={() => (this.props.clicked(p.id))}
            /> :
            <UnediblePiece
              key={p.id}
              d={p.d}
              transform={p.transform}
              onClick={() => (this.props.clicked(null))}
            />
            ))
          }
          <path
            d={this.props.outline}
            strokeWidth={1}
            fill="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
          />
      </Svg>
    );
  }
}
 
export default Map;
