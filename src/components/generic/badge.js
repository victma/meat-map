import React from 'react';
import styled from "@emotion/styled";

const Container = styled.div({
  padding: "8px 16px",
  borderRadius: 4,
  margin: "0 8px",
}, props => ({
  color: props.color,
  backgroundColor: props.background,
}));

 const Badge = (props) => {
  return (
    <Container color={props.color} background={props.background}>
      {props.text}
    </Container>
  );
};

export default Badge;
