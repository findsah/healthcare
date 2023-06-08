import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { images } from "../../constants";
import { SCREENS } from "../../constants/screens";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.wholeBackground} source={images.welcome}>
        <TouchableOpacity
          onPress={() => navigation.replace(SCREENS.LOGIN)}
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>Let Get Start</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
