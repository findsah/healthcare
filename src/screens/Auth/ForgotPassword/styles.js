import { Dimensions, StatusBar, StyleSheet } from "react-native";
import { COLORS } from "../../../constants/theme";
import { moderateScale, scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  linearGradient: {
    flex: 1,
    paddingVertical: moderateScale(60),
    paddingHorizontal: moderateScale(16),
  },
  logoContainer: {
    height: "15%",
  },

  logoStyle: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  logoTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "5%",
  },
  logoTextStyle: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: scale(25),
  },
  emailContainer: {
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(30),
  },
  passwordContainer: {
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(10),
  },
  loginButton: {
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(30),
  },
  forgotPasswordTextContainer: {
    paddingHorizontal: moderateScale(16),
  },
  forgotTextStyle: {
    textAlign: "right",
    fontSize: scale(12),
    fontWeight: "500",
    color: COLORS.black,
    paddingTop: moderateScale(10),
  },

  signupContainer: {
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(30),
    justifyContent: "center",
    alignItems: "center",
  },
  customStyle: {
    width: "40%",
    height: moderateScale(42),
  },
});

export default styles;
