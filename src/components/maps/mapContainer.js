import React, { Component } from 'react';
import styled from "@emotion/styled";

import Map from './map'
import PartName from "./partName"

import { screen } from "../constants"

const Container = styled.div({
  height: "100%",
})

const MapSubContainer = styled.div({
  height: "50%",
  boxSizing: "border-box",
  textAlign: "center",
  padding: "32px 32px 0px",
  overflowX: "scroll",
  overflowY: "hidden",
  direction: "rtl",
  [screen.mediaQuery.l]: {
    height: "66.6%",
  }
})

const PartNameSubContainer = styled.div({
  height: "50%",
  boxSizing: "border-box",
  [screen.mediaQuery.l]: {
    height: "33.3%",
  }
})

class MapContainer extends Component {
  state = { 
    hovered: null,
    selected: null,
   }

  updateHoveredPiece = id => {
    this.setState({
      hovered: id,
    });
  }

  updateClickedPiece = id => {
    this.setState({
      selected: (this.state.selected === id ? null : id),
    })
  }

  getFocusedPieceId() {
    return this.state.selected || this.state.hovered;
  }
  
  getPieceProps(id) {
    if (id === null) {
      return {};
    }
    let part = this.props.parts.find(part => (part.id === id))
    return part;
  }

  render() {
    return (
      <Container>
        <MapSubContainer>
          <Map
            parts={this.props.parts}
            selected={this.getFocusedPieceId()}
            hovered={id => this.updateHoveredPiece(id)}
            clicked={id => this.updateClickedPiece(id)}
          />
        </MapSubContainer>
        <PartNameSubContainer>
          <PartName
            {...this.getPieceProps(this.getFocusedPieceId())}
          />
        </PartNameSubContainer>
      </Container> 
    );
  }
}
 
export default MapContainer;
