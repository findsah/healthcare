import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { moderateScale, scale } from "react-native-size-matters";
import { COLORS } from "../constants";

const CompTextInput = ({
  label,
  containerStyle,
  keyboardType,
  placeholder,
  secureTextEntry,
  labelStyle,
  onChange,
  value,
}) => {
  return (
    <View>
      <Text style={[styles.label, { ...labelStyle }]}>{label}</Text>
      {/* Input   */}
      <TextInput
        autoCapitalize="none"
        style={[styles.textInputCont, { ...containerStyle }]}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: scale(14),
    fontWeight: "500",
    color: COLORS.black,
    paddingTop: moderateScale(10),
  },
  textInputCont: {
    width: "100%",
    height: moderateScale(42),
    backgroundColor: COLORS.white,
    marginTop: moderateScale(10),
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(16),
    fontSize: scale(12),
    color: COLORS.black,
  },
});

export default CompTextInput;
