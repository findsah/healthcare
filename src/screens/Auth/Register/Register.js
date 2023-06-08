import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, icons } from "../../../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  CompButton,
  CompTextInput,
  TextIconContainer,
} from "../../../components";
import { moderateScale, scale } from "react-native-size-matters";
import { SCREENS } from "../../../constants/screens";

const Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [userType, setUserType] = useState(0);
  const [loading, setLoading] = useState(false);
  const [onSelect, setOnSelect] = useState(false);

  // handlers

  const handleFirstName = (text) => {
    setFirstName(text);
  };
  const handleLastName = (text) => {
    setLastName(text);
  };
  const handleEmail = (text) => {
    setEmail(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };

  const handleConfirmPassword = (text) => {
    setConfirmPassword(text);
  };

  const handlePhone = (text) => {
    setPhone(text);
  };

  const handleAddress = (text) => {
    setAddress(text);
  };

  const handleUserType = () => {
    setUserType(userType);
    setOnSelect(!onSelect);
  };

  const userSignUp = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      phone === "" ||
      address === ""
    ) {
      alert("Please Enter required field");
    } else {
      let formdata = new FormData();
      formdata.append("first_name", firstName);
      formdata.append("last_name", lastName);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("confirm_password", confirmPassword);
      formdata.append("phone", phone);
      formdata.append("address", address);
      formdata.append("user_type", userType);

      setLoading(true);
      fetch("http://16.170.15.145/users/api/registration/", {
        method: "POST",

        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
        body: formdata,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.email == "User with this email already exists.") {
            setLoading(false);
            Alert.alert("Sorry", "User with this email already exists.");
          } else if (password !== confirmPassword) {
            setLoading(false);
            Alert.alert("Oops!", "Both passwords doesn't match");
          } else if (phone.length > 15) {
            setLoading(false);
            Alert.alert("Sorry", "Please Enter Correct phone number");
          } else {
            setLoading(false);
            Alert.alert("Registered", "Verify Email", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "Verify",
                onPress: () =>
                  navigation.navigate(SCREENS.EMAIL_VERIFY, {
                    email: data?.user?.email,
                    otp: data?.otp,
                  }),
                style: "default",
              },
            ]);
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
          {/* First and Last name */}
          <View style={styles.firstAndLastNameContainer}>
            <View style={{ flex: 1 }}>
              <CompTextInput
                label="First Name"
                containerStyle={styles.firstName}
                placeholder="Enter your first name"
                onChange={handleFirstName}
              />
            </View>
            <View style={{ flex: 1 }}>
              <CompTextInput
                label="Last Name"
                labelStyle={styles.labelStyle}
                containerStyle={styles.lastName}
                placeholder="Enter your last name"
                onChange={handleLastName}
              />
            </View>
          </View>

          {/* Email */}
          <View style={styles.inputContainer}>
            <CompTextInput
              label="Email"
              keyboardType="email-address"
              placeholder="Enter your email address"
              onChange={handleEmail}
            />
          </View>
          {/* Password */}
          <View style={styles.inputContainer}>
            <CompTextInput
              label="Password"
              keyboardType="visible-password"
              placeholder="Enter your password"
              secureTextEntry={true}
              onChange={handlePassword}
            />
          </View>
          {/* Confirm Password */}
          <View style={styles.inputContainer}>
            <CompTextInput
              label="Confirm Password"
              keyboardType="visible-password"
              placeholder="Enter your password again"
              secureTextEntry={true}
              onChange={handleConfirmPassword}
            />
          </View>
          {/* Phone number */}
          <View style={styles.inputContainer}>
            <CompTextInput
              label="Phone Number"
              keyboardType="numeric"
              placeholder="Enter your phone number"
              onChange={handlePhone}
            />
          </View>
          {/* address */}
          <View style={styles.inputContainer}>
            <CompTextInput
              label="Address"
              placeholder="Enter your address"
              onChange={handleAddress}
            />
          </View>

          {/* userType */}
          <View style={styles.inputContainer}>
            <Text
              style={{
                fontSize: scale(14),
                fontWeight: "500",
                color: COLORS.black,
                paddingTop: moderateScale(10),
              }}
            >
              User Type
            </Text>
            <TextIconContainer
              label={userType}
              customCont={{ width: "100%", marginTop: moderateScale(7) }}
              onPress={handleUserType}
            />
            {onSelect && (
              <View
                style={{
                  // height: moderateScale(42),
                  width: "100%",
                  backgroundColor: COLORS.white,
                  borderRadius: moderateScale(12),
                  alignSelf: "center",
                  marginTop: moderateScale(10),
                }}
              >
                <TouchableOpacity
                  style={{ padding: 10 }}
                  onPress={() => {
                    setUserType("1");
                    setOnSelect(false);
                  }}
                >
                  <Text>Doctor</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ padding: 10 }}
                  onPress={() => {
                    setUserType("2");
                    setOnSelect(false);
                  }}
                >
                  <Text>Patient</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Sign up button */}
          <View style={styles.signupButton}>
            <CompButton
              loading={loading}
              onPress={userSignUp}
              label="Sign up"
            />
          </View>
          {/* Alreadyhaveanaccount */}
          <View style={styles.alreadyHaveAnAccount}>
            <Text style={styles.alreadyStyle}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.replace(SCREENS.LOGIN)}>
              <Text style={styles.signIn}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </View>
  );
};

export default Register;
