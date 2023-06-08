import { StyleSheet } from "react-native";
import { COLORS, images } from "../../constants";
import { moderateScale, scale } from "react-native-size-matters";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  linearGradient: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    height: moderateScale(80),
    width: "100%",
    marginTop: moderateScale(50),
    paddingHorizontal: moderateScale(16),
    borderBottomWidth: 6,
    borderBottomColor: COLORS.lightGreen,
    alignItems: "center",
  },
  avatarContainer: {
    height: moderateScale(60),
    width: moderateScale(60),
    borderRadius: moderateScale(50),
  },
  profileImage: {
    height: "100%",
    width: "100%",
    borderRadius: moderateScale(50),
  },
  informationContainer: {
    paddingLeft: moderateScale(10),
  },
  textStyle: {
    fontSize: scale(14),
    fontWeight: "500",
    color: COLORS.white,
  },
  sheetContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: moderateScale(40),
    width: "80%",
    alignSelf: "center",
    marginTop: moderateScale(7),
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(12),
  },
  textDecoration: {
    fontSize: scale(14),
    fontWeight: "500",
    color: COLORS.black,
  },
  barBoxCustomStyle: {
    width: "65%",
  },
  callTheAmbulance: { width: "65%", height: moderateScale(85) },
  logoutButton: {
    marginTop: moderateScale(20),
    justifyContent: "center",
    alignItems: "center",
  },
  customStyle: {
    width: "65%",
  },
  contactUsCont: {
    position: "absolute",
    bottom: moderateScale(70),
    alignSelf: "center",
  },
  contactText: {
    fontSize: scale(16),
    color: COLORS.white,
    fontWeight: "500",
  },
  socialIconsContainer: {
    flexDirection: "row",
    width: "90%",
    height: moderateScale(45),
    alignSelf: "center",
    position: "absolute",
    bottom: moderateScale(15),
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default styles;
