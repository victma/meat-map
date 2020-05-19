import React from 'react';
import { Link } from 'gatsby';

import { colors, fonts } from '../constants';

const style = {
  backgroundColor: colors.button,
  color: colors.background,
  fontSize: fonts.button,
  borderRadius: 8,
  padding: '16px 32px',
  display: 'inline-block',
}

const ButtonLink = (props) => (
  <Link css={style} {...props}>
    {props.children}
  </Link>
);

export default ButtonLink;