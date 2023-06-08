import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { moderateScale, scale } from "react-native-size-matters";
import { COLORS } from "../constants";

const CompButton = ({ loading, customStyle, label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, { ...customStyle }]}
    >
      {loading === false ? (
        <Text style={styles.labelStyle}>{label}</Text>
      ) : (
        <ActivityIndicator size={"large"} color={COLORS.white} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: moderateScale(50),
    borderRadius: moderateScale(12),
    backgroundColor: COLORS.buttonColor,
    justifyContent: "center",
    alignItems: "center",
  },
  labelStyle: {
    fontSize: scale(14),
    fontWeight: "500",
    color: COLORS.white,
  },
});

export default CompButton;
