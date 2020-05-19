import React, { Component } from 'react';
import styled from "@emotion/styled";

import { colors, fonts } from '../constants';

const Button = styled.button({
  backgroundColor: colors.button,
  color: colors.background,
  fontSize: fonts.button,
  borderRadius: 8,
  padding: '16px 32px',
})

const ButtonComponent = (props) => (
  <Button>
    {...props.children}
  </Button>
);

export default ButtonComponent;