import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { moderateScale, scale } from "react-native-size-matters";
import { COLORS, images } from "../constants";
import HomeBars from "./HomeBars";
import { Entypo } from "@expo/vector-icons";

const MedicalHistory = ({
  onPress,
  label,
  uploadForms,
  fileUri,
  fileName,
  isItTrue,
  goBack,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{label}</Text>
      <View style={styles.barBoxStyle}>
        {isItTrue ? (
          <View style={styles.allignment}>
            <Text style={styles.fileNameText}>{fileName}</Text>
          </View>
        ) : (
          <Entypo onPress={uploadForms} name="upload" size={34} color="green" />
        )}
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={goBack}
          activeOpacity={0.7}
          style={[
            styles.barBoxStyle,
            {
              height: moderateScale(42),
              width: "38%",
              marginRight: "4%",
            },
          ]}
        >
          <Text style={styles.fileNameText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.7}
          style={[
            styles.barBoxStyle,
            {
              height: moderateScale(42),
              width: "38%",
            },
          ]}
        >
          <Text style={styles.fileNameText}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: scale(18),
    color: COLORS.white,
    fontWeight: "700",
  },
  barBoxStyle: {
    width: "80%",
    backgroundColor: COLORS.navyBlue,
    borderRadius: moderateScale(12),
    alignSelf: "center",
    marginTop: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(5),
  },
  imageBarStyle: {
    height: moderateScale(70),
    width: moderateScale(70),
  },
  allignment: {
    justifyContent: "center",
    alignItems: "center",
  },
  fileNameText: {
    fontSize: scale(14),
    color: COLORS.white,
    fontWeight: "500",
  },
});

export default MedicalHistory;
