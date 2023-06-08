import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";
import { moderateScale, scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  linearGradient: {
    flex: 1,
    paddingVertical: moderateScale(50),
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
  firstAndLastNameContainer: {
    flexDirection: "row",
    paddingHorizontal: moderateScale(16),
    marginTop: moderateScale(15),
  },
  firstName: {
    width: moderateScale(150),
  },
  lastName: {
    width: moderateScale(150),
    marginLeft: moderateScale(15),
  },
  labelStyle: {
    paddingLeft: moderateScale(18),
  },
  inputContainer: {
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(10),
  },
  signupButton: {
    paddingHorizontal: moderateScale(16),
    marginTop: moderateScale(25),
  },
  alreadyHaveAnAccount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: moderateScale(5),
  },
  alreadyStyle: {
    fontSize: scale(14),
    color: COLORS.white,
  },
  signIn: {
    color: COLORS.black,
    fontSize: scale(14),
    fontWeight: "500",
    paddingLeft: moderateScale(5),
  },
});

export default styles;
