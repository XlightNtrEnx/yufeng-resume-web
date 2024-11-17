const black = "#000000";

const colors = {
  white: "#ffffff",
  softWhite: "#f5f5f5",
  softerWhite: `#e5e5e5`,
  black,
  softBlack: `${black}cc`,
  softerBlack: `${black}66`,
  pallete: {
    splitComplementary: {
      primary: "#eb4fed",
      complementary: "#51ed4f",
      left: "#9fed4f",
      right: "#4fed9f",
    },
    complementary: {
      primary: "#453de1",
      softPrimary: "#665fe6",
      softerPrimary: "#a09cf0",
      complementary: "#d9e13d",
    },
  },
};

const theme = {
  colors,
  backgroundColor: colors.softWhite,
};

export type Theme = typeof theme;

export default theme;
