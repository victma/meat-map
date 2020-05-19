import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { colors, animation } from '../constants';

const ThumbnailButton = styled.div({
  width: 300,
  cursor: 'pointer',
  padding: 16,
  borderRadius: 8,
  transition: animation.transition.default,

  a: {
    transition: animation.transition.default,
  },

  ':hover': {
    background: colors.map.stroke,

    a: {
      color: colors.background,
    }
  },
});

const Svg = styled.svg({
  width: '100%',
});

const ThumbnailButtonComponent = (props) => {
  return (
    <ThumbnailButton>
      <Link to={props.to}>
        <Svg
          viewBox={props.viewBox}
          stroke={colors.map.stroke}
          strokeWidth={0.7}
        >
          <path
            d={props.path}
            strokeWidth={1.2}
            fill="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
          />
        </Svg>
      </Link>
      <h3>
        <Link to={props.to}>
          {props.text}
        </Link>
      </h3>
    </ThumbnailButton>
  );
};

export default ThumbnailButtonComponent;