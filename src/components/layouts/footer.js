import React from 'react';
import styled from '@emotion/styled';

import CenteredColumn from './centeredColumn';

import { colors } from '../constants';

const Footer = styled.footer({
  background: colors.logoBlue,
  marginTop: 64,
  paddingTop: 32,
  color: colors.background,

  a: {
    color: colors.lightGrey,
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
});

const Soil = styled.div({
  background: colors.logoGreen,
  height: 32,
});

const Emoji = styled.span({
  fontSize: '1.6rem',
  verticalAlign: 'middle',
})

const Vilage = styled.p({
  margin: 0,
  textAlign: 'right',
  lineHeight: 0.7,
});

const Sun = styled.span({
  height: 30,
  width: 30,
  background: colors.yellow,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  bottom: 20,
  marginTop: -20,
});

/* eslint-disable jsx-a11y/accessible-emoji */
const FooterComponent = () => {
  return (
    <Footer>
      <CenteredColumn>
        <p>Meat Map 2020</p>
        <p>
          <Emoji role="img" aria-label="Computer emoji">⌨️</Emoji> with <Emoji role="img" aria-label="Cofee emoji">☕️</Emoji> by <a href="https://vict.ml" target="_blank" rel="noopener noreferrer">victma</a>
        </p>
        <Vilage>
          <Sun></Sun> <Emoji role="img" aria-label="House emoji">🏡</Emoji> <Emoji role="img" aria-label="House emoji">🏡</Emoji> <Emoji role="img" aria-label="Cow emoji">🐄</Emoji>
        </Vilage>
      </CenteredColumn>
      <Soil></Soil>
    </Footer>
  );
};

export default FooterComponent;