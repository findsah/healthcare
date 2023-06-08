import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../../constants/theme";
import { icons } from "../../../constants";
import { CompButton, CompTextInput } from "../../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SCREENS } from "../../../constants/screens";
import { useNavigation } from "@react-navigation/native";
var validator = require("email-validator");

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [loadings, setLoadings] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const navigation = useNavigation();

  //handlers

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  // Login Api calling

  const userLogin = () => {
    setLoading(true);
    const valid = validator.validate(email);
    if (email === "" || password === "") {
      setLoading(false);
      alert("Please Enter Email and Password");
    } else if (valid === false) {
      setLoading(false);
      alert("Please Enter Valid Email");
    } else {
      let formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      fetch("http://16.170.15.145/users/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formdata,
      })
        .then((response) => response.json())
        .then((responsejosn) => {
          console.log(responsejosn);
          if (
            responsejosn?.non_field_errors == "Incorrect Credentials Passed."
          ) {
            setLoading(false);
            setData(responsejosn);
            console.log(data);
            alert("Please enter correct login details");
          } else {
            setLoading(false);
            navigation.navigate(SCREENS.TAB_NAVIGATION, {
              userType: responsejosn?.user?.user_type,
              userId: responsejosn?.user?.id,
              userToken: responsejosn?.token,
            });
          }
        });
    }
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
              onChange={(text) => handleEmail(text)}
              label="Email"
              keyboardType="email-address"
              placeholder="Enter your email address"
            />
          </View>
          {/* Password */}
          <View style={styles.passwordContainer}>
            <CompTextInput
              onChange={(text) => handlePassword(text)}
              label="Password"
              keyboardType="visible-password"
              placeholder="Enter your password"
              secureTextEntry={true}
            />
          </View>

          {/* LoginButton */}
          <View style={styles.loginButton}>
            <CompButton onPress={userLogin} loading={loading} label="Log In" />
          </View>
          {/* ForgotPasswordText */}
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.FORGOT_PASSWORD)}
            style={styles.forgotPasswordTextContainer}
          >
            <Text style={styles.forgotTextStyle}>Forgot your password?</Text>
          </TouchableOpacity>
          {/* SignUp Button */}
          <View style={styles.signupContainer}>
            <CompButton
              loading={loadings}
              label="Sign up"
              customStyle={styles.customStyle}
              onPress={() => navigation.replace(SCREENS.REGISTER)}
            />
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </View>
  );
};

export default Login;
