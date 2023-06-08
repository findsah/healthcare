import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, images } from "../constants";
import { moderateScale, scale } from "react-native-size-matters";
import HomeBars from "./HomeBars";
import { AntDesign } from "@expo/vector-icons";

const MedicalForms = ({ onPress }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[COLORS.secondary, COLORS.primary]}
        style={styles.linearGradient}
      >
        {/* Image */}
        <View style={styles.wallpaperContainer}>
          <Image source={images.wallpaper} style={styles.wallpaperStyle} />
          <TouchableOpacity onPress={onPress} style={styles.arrowCont}>
            <AntDesign
              name="arrowleft"
              size={24}
              color={COLORS.white}
              style={{ position: "absolute" }}
            />
          </TouchableOpacity>
        </View>
        {/* Medical Forms  */}
        <View style={styles.medicalFormsContainer}>
          <Text style={styles.textStyle}>Medical Forms</Text>
          <HomeBars
            barBoxCustomStyle={{
              height: moderateScale(85),
            }}
            imageBar={images.ambulance}
            imageBarCustomStyle={{ marginTop: moderateScale(25) }}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

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
  medicalFormsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: scale(18),
    color: COLORS.white,
    fontWeight: "700",
  },
  arrowCont: {
    position: "absolute",
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(15),
    backgroundColor: COLORS.navyBlue,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: moderateScale(10),
    marginTop: moderateScale(10),
  },
});

export default MedicalForms;
