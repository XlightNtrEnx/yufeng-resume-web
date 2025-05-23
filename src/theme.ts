const black = "#000000";

const colors = {
  white: "#ffffff",
  softWhite: "#f5f5f5",
  softerWhite: `#e5e5e5`,
  evenSofterWhite: `#a5a55`,
  black,
  softBlack: `${black}cc`,
  softerBlack: `${black}66`,
  evenSofterBlack: `${black}55`,
  blue: "#0000EE",
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
  backgroundColor: colors.white,
  softBackgroundColor: colors.softWhite,
  softerBackgroundColor: colors.softerWhite,
  evenSofterBackgroundColor: colors.softerWhite,
  negBackgroundColor: colors.black,
  negSoftBackgroundColor: colors.softBlack,
  negSofterBackgroundColor: colors.softerBlack,
  negEvenSofterBackgroundColor: colors.evenSofterBlack,
  textColor: colors.black,
  negTextColor: colors.white,
  hyperLinkColor: colors.blue,
};

export type Theme = typeof theme;

export default theme;
