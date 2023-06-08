import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, images } from "../constants";
import TextIconContainer from "./TextIconContainer";
import { moderateScale, scale } from "react-native-size-matters";
import { Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import HomeBars from "./HomeBars";
import CompButton from "./CompButton";

const DoctorProfile = ({ onPress }) => {
  const [onSelect, setOnSelect] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <LinearGradient
        colors={[COLORS.secondary, COLORS.primary]}
        style={styles.linearGradient}
      >
        {/* Header */}
        <View style={styles.headerContainer}>
          {/* Avatar */}
          <View style={styles.avatarContainer}>
            <Image source={images.profile} style={styles.profileImage} />
          </View>
          {/* information */}
          <View style={styles.informationContainer}>
            <Text style={styles.textStyle}>995678</Text>
            <Text style={styles.textStyle}>Dr. Hassan</Text>
          </View>
        </View>

        {/* Choose from list */}
        <TextIconContainer
          label="Your Patients"
          onPress={() => setOnSelect(!onSelect)}
        />
        {onSelect && (
          <View style={styles.sheetContainer}>
            <Text style={styles.textDecoration}>
              Your Doctor : Hamza Sharif
            </Text>
          </View>
        )}
        {/* Medical Forms */}
        <HomeBars
          onPress={onPress}
          imageBar={images.ambulance}
          title="Medical Forms"
          barBoxCustomStyle={styles.barBoxCustomStyle}
        />
        <HomeBars
          imageBar={images.ambulance}
          title="Call The Hospital"
          barBoxCustomStyle={styles.callTheAmbulance}
          imageBarCustomStyle={{ top: moderateScale(10) }}
        />

        {/* Logout Button */}
        <View style={styles.logoutButton}>
          <CompButton
            loading={loading}
            customStyle={styles.customStyle}
            label="Log out"
          />
        </View>

        {/* Contact us */}
        <View style={styles.contactUsCont}>
          <Text style={styles.contactText}>Contact us</Text>
        </View>

        {/* Social media icons */}
        <View style={styles.socialIconsContainer}>
          <Entypo name="instagram" size={30} color={COLORS.navyBlue} />
          <Entypo name="twitter" size={30} color={COLORS.navyBlue} />
          <FontAwesome name="whatsapp" size={30} color={COLORS.navyBlue} />
          <FontAwesome5 name="facebook" size={30} color={COLORS.navyBlue} />
        </View>
      </LinearGradient>
    </>
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

export default DoctorProfile;
