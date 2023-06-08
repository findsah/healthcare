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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: moderateScale(50),
  },
  modalView: {
    height: moderateScale(200),
    width: moderateScale(150),
    margin: moderateScale(20),
    backgroundColor: "white",
    borderRadius: moderateScale(20),
    padding: moderateScale(10),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: moderateScale(20),
    padding: moderateScale(10),
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: moderateScale(15),
    textAlign: "center",
  },
});

export default styles;
