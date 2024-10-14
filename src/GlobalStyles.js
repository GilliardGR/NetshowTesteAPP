import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const GlobalStyles = {
  background: "#000",
  homeBackground: "#000",
  orangeMain: "rgba(255, 120, 0, 1)",
  whiteMain: "#fff",
  greyMain: "#808C99",
  greyMedium: "#B8BFC6",
  greyButton: "#191C1F",
  greyBorder: "#212529",
  progressBarBackground: "#505963",
  titleFontSize: windowWidth * 0.06,
  headLineFontSize: windowWidth * 0.08,
  logoMarginBottom: windowHeight * 0.35,
  titleMarginBottom: windowHeight * 0.15,
  windowWidth,
  windowHeight,
  highlights: {
    titleSize: windowWidth * 0.11,
    titleColor: "#fff",
    directorsSize: windowWidth * 0.05,
    // directorsColor: '',
    playText: windowWidth * 0.042,
    buttonText: windowWidth * 0.032,
  },
  horizontalList: {
    titleSize: windowWidth * 0.05,
    titleColor: "#fff",
    titleMarginBottom: windowHeight * 0.015,
    containerMarginBottom: windowHeight * 0.01,
  },
  navbar: {
    height: windowHeight * 0.12,
    background: "#080808",
  },
};

export default GlobalStyles;
