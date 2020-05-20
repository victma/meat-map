import React from 'react';
import Layout from './layout';
import styled from '@emotion/styled';

import { screen } from '../constants';

const Column = styled.div({
  maxWidth: screen.l,
  margin: 'auto',
  padding: 8,
});

const CenteredColumnLayout = ({ children }) => {
  return (
    <Layout>
      <Column>
        {children}
      </Column>
    </Layout>
  );
};

export default CenteredColumnLayout;
