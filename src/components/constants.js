/*** Colors ***/
const lightGrey = "#e7e1df";
const lightGreen = "#e6ee9c";
const logoGreen = "#abba20";
const logoBlue = "#28aaff";
const deepRed = "#b71c1c";
const lightBrown = "#bcaaa4";
const darkBrown = "#393332";
const white = "#faf9f9";

const colors = {
  text: darkBrown,
  background: white,
  button: logoBlue,
  header: {
    background: lightGreen,
    text: logoGreen,
  },
  map: {
    stroke: deepRed,
    fill: lightBrown,
    unedibleFill: lightGrey,
  },
  partName: {
    text: darkBrown,
    background: lightBrown,
    badge: {
      lean: "#689f38",
      marble: deepRed,
      gelatin: logoBlue,
    },
  },
};

/*** Font sizes ***/
const fonts = {
  base: "18px",
  header: "24px",
  h1: {
    s: "3rem",
    l: "5rem",
    weight: 300,
    spacing: "-0.05em",
  },
  button: "1.2rem",
  partName: {
    details: "1.2rem",
    nutrition: "1.2rem",
  }
};

/*** Screeen sizes ***/
const screenSizeL = 900;

const screen = {
  l: screenSizeL,
  mediaQuery: {
    l: `@media (min-width: ${screenSizeL}px)`,
  }
};

/*** Animations ***/
const animation = {
  transition: {
    default: "all 0.2s ease-out",
  }
};

export {
  colors,
  fonts,
  screen,
  animation,
}