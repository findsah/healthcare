import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../../constants/theme";
import { icons } from "../../../constants";
import { CompButton, CompTextInput } from "../../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SCREENS } from "../../../constants/screens";

const ForgotPassword = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
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
            />
          </View>

          {/* LoginButton */}
          <View style={styles.loginButton}>
            <CompButton loading={loading} label="Reset password" />
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </View>
  );
};

export default ForgotPassword;
