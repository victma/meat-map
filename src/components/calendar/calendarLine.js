import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { colors, animation } from '../constants';

const Line = styled.div({
  borderRadius: 8,
  cursor: 'pointer',
  fontWeight: 500,
  transition: animation.transition.default,
  position: 'relative',
  overflow: 'hidden',

  'p': {
    textAlign: 'center',
  }
}, props => ({
  gridColumnStart: props.colStart,
  gridColumnEnd: props.colEnd + 1,
  gridRow: `${props.row} / span 1`,
  border: `2px solid ${props.highlighted ? 'transparent' : colors.logoGreen}`,
  color: props.highlighted ? colors.background : colors.text,
}))

const Background = styled.div({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: -1,
  transition: animation.transition.default,
}, props => ({
  opacity: props.show ? 1 : 0,
}));

const BackgroundImage = styled(Img)({
  width: '100%',
  height: '100%',
});

function CalendarLinePart(props) {
  return (
    <Line
      row={props.row}
      colStart={props.start}
      colEnd={props.end}
      highlighted={props.highlighted}
      onMouseEnter={() => props.onHover(true)}
      onMouseLeave={() => props.onHover(false)}
    >
      <p>{props.name}</p>
      {props.background !== undefined &&
        <Background show={props.highlighted}>
          <BackgroundImage
            fluid={props.background.childImageSharp.fluid}
          />
        </Background>
      }
    </Line>
  )
}

function CalendarLine(props) {
  return props.period.map((monthRange, i) => {
    const start = monthRange[0];
    const end = monthRange[1];

    if (start <= end) {
      return (
        <CalendarLinePart
          {...props}
          start={start}
          end={end}
          key={i}
        />
      );
    }
      
    return <>
      <CalendarLinePart
        {...props}s
        start={start}
        end={12}
        key={i}
      />
      <CalendarLinePart
        {...props}
        start={1}
        end={end}
        key={-i-1}
      />
    </>
  });
}

export default CalendarLine;
