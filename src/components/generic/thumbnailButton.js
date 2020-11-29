import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import { colors, animation } from '../constants';

const Img = styled(GatsbyImage)({
  borderRadius: 8,
  transition: animation.transition.default,
});

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
    },

    [Img]: {
      opacity: 0.15,
    },
  },
});

const Svg = styled.svg({
  width: '100%',
  height: 200,
});

const ThumbnailButtonComponent = (props) => {
  return (
    <ThumbnailButton>
      <Link to={props.to}>
        {props.path ?
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
          : <Img fixed={props.img} />
        }
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