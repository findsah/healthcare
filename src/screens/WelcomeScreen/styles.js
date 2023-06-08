import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import { moderateScale, scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wholeBackground: {
    flex: 1,
  },
  buttonStyle: {
    height: moderateScale(55),
    width: moderateScale(200),
    backgroundColor: COLORS.navyBlue,
    bottom: moderateScale(130),
    position: "absolute",
    borderRadius: moderateScale(12),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textStyle: {
    fontSize: scale(14),
    color: COLORS.white,
    fontWeight: "500",
  },
});

export default styles;
