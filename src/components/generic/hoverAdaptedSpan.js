import React from 'react';
import styled from "@emotion/styled";

const NonHoverableDeviceSpan = styled.span({
  "@media (hover: hover)": {
    display: "none",
  }
})

const HoverableDeviceSpan = styled.span({
  "@media (hover: none)": {
    display: "none",
  }
})

function HoverAdaptedSpan(props) {
  return (
    <>
      <NonHoverableDeviceSpan>{props.nonHoverable}</NonHoverableDeviceSpan>
      <HoverableDeviceSpan>{props.hoverable}</HoverableDeviceSpan>
    </>
  );
}

export default HoverAdaptedSpan;
