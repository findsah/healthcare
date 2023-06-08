import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import { moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  linearGradient: {
    flex: 1,
  },
  wallpaperContainer: {
    height: moderateScale(200),
    borderBottomWidth: 6,
    borderBottomColor: COLORS.lightGreen,
  },
  wallpaperStyle: {
    height: "100%",
    width: "100%",
    resizeMode: "stretch",
  },
  heartBeatContainer: {
    height: moderateScale(200),
    width: "80%",
    alignSelf: "center",
    borderRadius: moderateScale(12),
    backgroundColor: COLORS.white,
    marginTop: moderateScale(5),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
