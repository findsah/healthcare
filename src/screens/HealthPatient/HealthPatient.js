import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, images } from "../../constants";
import TextIconContainer from "../../components/TextIconContainer";
import { moderateScale, scale } from "react-native-size-matters";

const HealthPatient = ({ route }) => {
  const token = route?.params?.token;
  const idOfUser = route?.params?.idOfUser;

  const [showHeartBeat, setShowHeartBeat] = useState(false);
  const [showTemp, setShowTemp] = useState(false);
  const [showHealth, setShowHealth] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://16.170.15.145/users/api/heartbeat/${idOfUser}`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [token]);

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
            onPress={() => setShowHeartBeat(!showHeartBeat)}
            label="Your Heartbeat"
          />
          {showHeartBeat && (
            <View style={styles.heartBeatContainer}>
              <Image source={images.lines} style={styles.linesStyle} />
              <Text style={styles.beatsTextStyle}>
                {data?.data?.heart_rate} your heart beats in each minute (bpm)
              </Text>
            </View>
          )}
          <TextIconContainer
            onPress={() => setShowTemp(!showTemp)}
            label="Your Temperature"
          />
          {showTemp && (
            <View style={styles.heartBeatContainer}>
              <Image source={images.temperature} style={styles.linesStyle} />
              <Text style={styles.beatsTextStyle}>
                Your Temperature is {data?.data?.temperature}
              </Text>
            </View>
          )}
          <TextIconContainer
            onPress={() => setShowHealth(!showHealth)}
            label="Health Summary"
          />
          {showHealth && (
            <View style={styles.heartBeatContainer}>
              {/* Oxygen Level */}
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.beatsTextStyle}>
                  Your oxygen level is :
                </Text>
                <Text
                  style={[
                    styles.beatsTextStyle,
                    {
                      paddingLeft: moderateScale(5),
                      fontWeight: "bold",
                    },
                  ]}
                >
                  {data?.data?.oxygen_level}
                </Text>
              </View>
              {/* Heart Rate */}
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.beatsTextStyle}>Your heart rate is :</Text>
                <Text
                  style={[
                    styles.beatsTextStyle,
                    {
                      paddingLeft: moderateScale(5),
                      fontWeight: "bold",
                    },
                  ]}
                >
                  {data?.data?.heart_rate}
                </Text>
              </View>
              {/* Temperature Level */}
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.beatsTextStyle}>
                  Your temperature level is :
                </Text>
                <Text
                  style={[
                    styles.beatsTextStyle,
                    {
                      paddingLeft: moderateScale(5),
                      fontWeight: "bold",
                    },
                  ]}
                >
                  {data?.data?.temperature}
                </Text>
              </View>
              {/* Description  */}
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.beatsTextStyle}>Remarks from Doctor:</Text>
                <Text
                  style={[
                    styles.beatsTextStyle,
                    {
                      paddingLeft: moderateScale(5),
                      fontWeight: "bold",
                    },
                  ]}
                >
                  {data?.data?.description || "Your health is good"}
                </Text>
              </View>
            </View>
          )}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HealthPatient;
