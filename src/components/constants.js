/*** Colors ***/
const hexa = {
 lightGrey: "#e7e1df",
 lightGreen: "#e6ee9c",
 logoGreen: "#abba20",
 logoBlue: "#28aaff",
 deepRed: "#b71c1c",
 lightBrown: "#bcaaa4",
 darkBrown: "#393332",
 white: "#faf9f9",
 yellow: "#fdd835",
};

const colors = {
  ...hexa,
  text: hexa.darkBrown,
  background: hexa.white,
  button: hexa.logoBlue,
  header: {
    background: hexa.white,
    text: hexa.logoGreen,
  },
  map: {
    stroke: hexa.deepRed,
    fill: hexa.lightBrown,
    unedibleFill: hexa.lightGrey,
  },
  partName: {
    text: hexa.darkBrown,
    background: hexa.lightBrown,
    badge: {
      lean: "#689f38",
      marble: hexa.deepRed,
      gelatin: hexa.logoBlue,
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
  h2: {
    s: "2rem",
    l: "3rem",
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
const screenSizeS = 500;

const screen = {
  l: screenSizeL,
  s: screenSizeS,
  mediaQuery: {
    l: `@media (min-width: ${screenSizeL}px)`,
    s: `@media (min-width: ${screenSizeS}px)`,
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