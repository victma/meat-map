const lightGrey = "#e7e1df";
const lightGreen = "#e6ee9c";
const deepRed = "#b71c1c";
const lightBrown = "#bcaaa4";
const darkBrown = "#393332";

const colors = {
  header: lightGreen,
  text: darkBrown,
  map: {
    stroke: deepRed,
    fill: lightBrown,
    unedibleFill: lightGrey,
  },
  pieceName: {
    text: darkBrown,
    background: lightBrown,
  }
};

const screenSizeL = 900;

const screen = {
  l: screenSizeL,
  mediaQuery: {
    l: `@media (min-width: ${screenSizeL}px)`,
  }
}

export {
  colors,
  screen,
}