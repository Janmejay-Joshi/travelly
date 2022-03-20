const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

const danger = "#E83151";
const red500 = "#DA4167";
const primary = "#172A3A";
const success = "#0CCE6B";
const secondary = "#0EB1D2";
const white = "#F7F7F7";
const pureWhite = "#FFFFFF";
const black = "#141414";
const gray = "#868686";
const muted = "#E6E6E6";
const shadow = "#C4C4C4";

const baseColors = {
  danger,
  red500,
  primary,
  success,
  secondary,
  white,
  pureWhite,
  black,
  gray,
  shadow,
  muted,
};

export default {
  light: {
    text: "#000",
    textDark: black,
    textLight: white,
    background: white,
    primary: primary,
    secondary: secondary,
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    textDark: black,
    textLight: white,
    background: white,
    primary: primary,
    secondary: secondary,
    text: "#fff",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
  baseColors,
};
