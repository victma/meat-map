import React from 'react';
import { Link } from 'gatsby';

import { colors, fonts } from '../constants';
import styled from '@emotion/styled';

const Button = styled(Link)({
  backgroundColor: colors.button,
  color: colors.background,
  fontSize: fonts.button,
  borderRadius: 8,
  padding: '16px 32px',
  display: 'inline-block',
});

const ButtonLink = (props) => (
  <Button {...props}>
    {props.children}
  </Button>
);

export default ButtonLink;
