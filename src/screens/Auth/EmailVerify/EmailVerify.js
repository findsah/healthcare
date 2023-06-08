import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../../constants/theme";
import { icons } from "../../../constants";
import { CompButton, CompTextInput } from "../../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SCREENS } from "../../../constants/screens";
var validator = require("email-validator");

const EmailVerify = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const OTP = route.params.otp;
  const Email = route.params.email;

  const verifyEmail = () => {
    setLoading(true);
    let formdata = new FormData();
    formdata.append("email", Email);
    formdata.append("otp", OTP);

    fetch("http://16.170.15.145/users/api/email_verify/", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((responsejosn) => {
        if (responsejosn?.details == "Invalid OTP or Email") {
          alert("Invalid otp or email");
        } else {
          setLoading(false);
          Alert.alert(responsejosn?.msg, "Go to Login", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "Login",
              onPress: () => navigation.navigate(SCREENS.LOGIN),
              style: "default",
            },
          ]);
        }
      });
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.secondary, COLORS.primary]}
        style={styles.linearGradient}
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image style={styles.logoStyle} source={icons.logo} />
        </View>
        {/* Logo Text */}
        <View style={styles.logoTextContainer}>
          <Text style={styles.logoTextStyle}>Smart WBAN Health App</Text>
        </View>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          {/* Email */}
          <View style={styles.emailContainer}>
            <CompTextInput
              label="Email"
              keyboardType="email-address"
              placeholder="Enter your email address"
              value={Email}
            />
          </View>

          {/* OTP */}
          <View style={styles.emailContainer}>
            <CompTextInput label="OTP" value={OTP} />
          </View>
          {/* LoginButton */}
          <View style={styles.loginButton}>
            <CompButton
              onPress={verifyEmail}
              loading={loading}
              label="Verify Email"
            />
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </View>
  );
};

export default EmailVerify;
