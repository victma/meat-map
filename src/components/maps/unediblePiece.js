import React from 'react';

import { colors } from "../constants";

const Piece = (props) => {
  return ( 
    <path
        d={props.d}
        transform={props.transform}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity={1}
        fill={colors.map.unedibleFill}
        onClick={() => {props.onClick()}}
    />
   );
}
 
export default Piece;
 