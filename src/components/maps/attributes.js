import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

import Badge from '../generic/badge';

import { colors } from '../constants';

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  margin: 8,
});

const Attributes = props => {
  return (
    <Container>
      {props.attributes.lean &&
        <Badge
          text={"Maigre"}
          color={colors.background}
          background={colors.partName.badge.lean}
        />
      }
      {props.attributes.marble &&
        <Badge
          text={"Persillé"}
          color={colors.background}
          background={colors.partName.badge.marble}
        />
      }
      {props.attributes.gelatin &&
        <Badge
          text={"Gelatineux"}
          color={colors.background}
          background={colors.partName.badge.gelatin}
        />
      }
    </Container>
  );
};

Attributes.propTypes = {
  attributes: PropTypes.shape({
    lean: PropTypes.bool,
    marble: PropTypes.bool,
    gelatin: PropTypes.bool,
  }),
};

export default Attributes;