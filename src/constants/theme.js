import { moderateScale } from "react-native-size-matters";
export const COLORS = {
  primary: "#1164ab",
  secondary: "#0a4581",
  buttonColor: "#3563f9",
  white: "#FFFFFF",
  black: "#000000",
  lightGreen: "#90EE90",
  navyBlue: "#26029a",
};
export const SIZES = {
  // global sizes
  base: moderateScale(8),
  font: moderateScale(14),
  radius: moderateScale(12),
  padding: moderateScale(24),
};

const appTheme = { COLORS, SIZES };

export default appTheme;
