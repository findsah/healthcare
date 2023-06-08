import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { scale } from "react-native-size-matters";
import { COLORS, images } from "../constants";

const CheckSchedule = ({ onPress }) => {
  return (
    <View style={styles.checkSchedule}>
      <Text onPress={onPress} style={styles.textStyle}>
        Check your Schedule
      </Text>
      <Image source={images.calendar} />
    </View>
  );
};

const styles = StyleSheet.create({
  checkSchedule: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: scale(18),
    fontWeight: "bold",
    color: COLORS.white,
  },
});

export default CheckSchedule;
