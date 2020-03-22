const lightGrey = "#e7e1df";
const lightGreen = "#e6ee9c";
const logoGreen = "#abba20";
const logoBlue = "#28aaff";
const deepRed = "#b71c1c";
const lightBrown = "#bcaaa4";
const darkBrown = "#393332";
const white = "#faf9f9";

const colors = {
  header: lightGreen,
  text: darkBrown,
  background: white,
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

const fonts = {
  base: "16px",
  partName: {
    details: "1.2rem",
    nutrition: "1.2rem",
  }
}

const screenSizeL = 900;

const screen = {
  l: screenSizeL,
  mediaQuery: {
    l: `@media (min-width: ${screenSizeL}px)`,
  }
}

export {
  colors,
  fonts,
  screen,
}