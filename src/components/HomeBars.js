import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { moderateScale, scale } from "react-native-size-matters";
import { COLORS, images } from "../constants";

const HomeBars = ({
  imageBar,
  title,
  subtitle,
  onPress,
  barBoxCustomStyle,
  imageBarCustomStyle,
  labelStyle,
  file,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.barBoxStyle, { ...barBoxCustomStyle }]}
    >
      {/* image  */}
      <Image
        source={imageBar}
        style={[styles.imageBarStyle, { ...imageBarCustomStyle }]}
      />
      {/* title  */}
      <Text style={[styles.titleStyle, { ...labelStyle }]}>{title}</Text>
      {/* subtitle  */}
      <Text style={styles.subtitleStyle}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  barBoxStyle: {
    height: moderateScale(130),
    width: "80%",
    backgroundColor: COLORS.navyBlue,
    borderRadius: moderateScale(12),
    alignSelf: "center",
    marginTop: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  imageBarStyle: {
    height: moderateScale(70),
    width: moderateScale(70),
  },
  titleStyle: {
    fontSize: scale(18),
    fontWeight: "700",
    color: COLORS.white,
  },
  subtitleStyle: {
    fontSize: scale(12),
    color: COLORS.white,
  },
});

export default HomeBars;
