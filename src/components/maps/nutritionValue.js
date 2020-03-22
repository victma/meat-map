import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

import Tooltip from "../generic/tooltip";

import { colors, fonts } from "../constants";

const Nutrition = styled.p({
  fontSize: fonts.partName.nutrition,
  
  '& > :not([role=img])': {
    borderBottom: "2px dotted #444",
  }
})

const NutritionValue = (props) => {
  return (
    <Tooltip
      title={props.title}
      text={props.tooltip}
      background={colors.partName.text}
      color={colors.background}
    >
      <Nutrition>
        <span role="img" aria-label={props.emojiAria}>{props.emoji}</span>
        {" "}
        <span>{props.value ?? "-"} {props.unit}</span>
      </Nutrition>
    </Tooltip>
  );
};

NutritionValue.propTypes = {
  title: PropTypes.string,
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  emoji: PropTypes.string.isRequired,
  emojiAria: PropTypes.string.isRequired,
  value: PropTypes.number,
  unit: PropTypes.string,
};

NutritionValue.defaultProps = {
  unit: "%",
}

export default NutritionValue;
