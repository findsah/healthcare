import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, images } from "../../constants";
import TextIconContainer from "../../components/TextIconContainer";

const HealthDoctor = () => {
  const [showPatientHealth, setShowPatientHealth] = useState(false);
  const [showPatientSummary, setShowPatientSummary] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[COLORS.secondary, COLORS.primary]}
        style={styles.linearGradient}
      >
        {/* Image */}
        <View style={styles.wallpaperContainer}>
          <Image source={images.wallpaper} style={styles.wallpaperStyle} />
        </View>
        <ScrollView>
          {/* choose options */}
          <TextIconContainer
            onPress={() => setShowPatientHealth(!showPatientHealth)}
            label="Your Patient Health Today"
          />
          {showPatientHealth && (
            <View style={styles.heartBeatContainer}>
              <Text style={styles.beatsTextStyle}>
                The Patient 'A' his health is stable
              </Text>
              <Text style={styles.beatsTextStyle}>
                The Patient 'B' his health is unstable
              </Text>
            </View>
          )}
          <TextIconContainer
            onPress={() => setShowPatientSummary(!showPatientSummary)}
            label="Your Patient Health Summary"
          />
          {showPatientSummary && (
            <View style={styles.heartBeatContainer}>
              <Text style={styles.beatsTextStyle}>
                The Patient 'A' his heartbeat is 78 and his temperature is 37.2
              </Text>
            </View>
          )}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HealthDoctor;
