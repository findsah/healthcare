import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { moderateScale, scale } from "react-native-size-matters";
import { COLORS } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";

const TextIconContainer = ({ label, onPress, customCont }) => {
  return (
    <View style={[styles.textIconCont, { ...customCont }]}>
      {/* Title */}
      <View style={styles.titleStyle}>
        <Text style={styles.textStyle}>{label}</Text>
      </View>
      {/* Icon */}
      <MaterialIcons
        onPress={onPress}
        name="keyboard-arrow-down"
        size={24}
        color={COLORS.black}
        style={{
          marginRight: moderateScale(7),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textIconCont: {
    height: moderateScale(40),
    width: "80%",
    borderRadius: moderateScale(12),
    backgroundColor: COLORS.white,
    alignSelf: "center",
    marginTop: moderateScale(20),
    flexDirection: "row",
    alignItems: "center",
  },
  titleStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: scale(14),
    fontWeight: "500",
    color: COLORS.black,
  },
});

export default TextIconContainer;
