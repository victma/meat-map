import React from 'react';
import styled from "@emotion/styled";

const Path = styled.path({
  cursor: "pointer",
  transition: "all 0.2s ease-out",
})

const Piece = (props) => {
  return ( 
    <Path
        d={props.d}
        transform={props.transform}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity={1}
        fillOpacity={props.selected ? 1 : 0}
        onMouseEnter={() => {props.onHover(true)}}
        onMouseLeave={() => {props.onHover(false)}}
        onClick={() => {props.onClick()}}
    />
   );
}
 
export default Piece;
 