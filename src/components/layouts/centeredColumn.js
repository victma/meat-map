import React from 'react';
import styled from '@emotion/styled';

import { screen } from '../constants';

const Column = styled.div({
  maxWidth: screen.l,
  margin: '0 auto',
}, props => ({
  padding: (props.padding ? '0 8px' : 0),
}));

const CenteredColumn = ({ children, noPadding }) => {
  return (
    <Column padding={!noPadding}>
      {children}
    </Column>
  );
};

export default CenteredColumn;
