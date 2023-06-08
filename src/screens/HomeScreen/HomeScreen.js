import {
  View,
  Text,
  Image,
  SafeAreaView,
  Modal,
  Pressable,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SIZES, dummyData, images } from "../../constants";
import { Appointment, HomeBars, MedicalHistory } from "../../components";
import { scale } from "react-native-size-matters";

const HomeScreen = ({ route }) => {
  const token = route?.params?.token;

  const [medicalHistory, setMedicalHistory] = useState(0);
  const [appointment, setAppointment] = useState(0);
  const [modalVisibleDay, setModalVisibleDay] = useState(false);
  const [modalVisibleMonth, setModalVisibleMonth] = useState(false);
  const [modalVisibleYear, setModalVisibleYear] = useState(false);
  const [days, setDays] = useState("");
  const [months, setMonths] = useState("");
  const [years, setYears] = useState("");

  const schedulingAppointment = () => {
    if (days === "" || months === "" || years === "") {
      alert("Please Select all fields ");
    } else {
      let formdata = new FormData();
      formdata.append("appointment_day", days);
      formdata.append("appointment_month", parseInt(months));
      formdata.append("appointment_year", years);

      fetch("http://16.170.15.145/users/api/book_appointment/", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`,
        },
        body: formdata,
      })
        .then((response) => response.json())
        .then((responsejosn) => {
          console.log(responsejosn);
          if (
            responsejosn?.detail ==
            "Authentication credentials were not provided."
          ) {
            alert("Authentication credentials were not provided.");
          } else {
            alert("Appointment Book Successfully");
          }
        });
    }
  };

  const clearAppointment = () => {
    setDays("");
    setMonths("");
    setYears("");
  };

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

        {/* Home Bars */}
        {medicalHistory == 0 && appointment == 0 ? (
          <>
            <HomeBars
              onPress={() => setMedicalHistory(1)}
              imageBar={images.files}
              title="Your Medical History"
              subtitle="We value your privacy"
            />
            <HomeBars
              onPress={() => setAppointment(1)}
              imageBar={images.calendar}
              title="Request an appointment"
              subtitle="Please schedule appointment 1 day in advance"
            />
            <HomeBars
              imageBar={images.askDoctor}
              title="Ask your Doctor"
              subtitle="24/7"
            />
          </>
        ) : medicalHistory === 1 ? (
          <MedicalHistory
            onPress={() => setMedicalHistory(0)}
            label=" Medical History"
          />
        ) : (
          <Appointment
            pressDay={() => setModalVisibleDay(true)}
            pressMonth={() => setModalVisibleMonth(true)}
            pressYear={() => setModalVisibleYear(true)}
            selectedDay={days || "Select Day"}
            selectedMonth={months || "Select Month"}
            selectedYear={years || "Select Year"}
            clearDetails={clearAppointment}
            bookAppointement={schedulingAppointment}
          />
        )}

        {/* When days are selected */}
        {modalVisibleDay && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisibleDay}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <FlatList
                  data={dummyData.days}
                  keyExtractor={(item) => `${item.id}`}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      onPress={() => {
                        setDays(item.day), setModalVisibleDay(!modalVisibleDay);
                      }}
                      style={{
                        marginBottom: SIZES.base,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: scale(18),
                          color: COLORS.black,
                          fontWeight: "500",
                        }}
                      >
                        {item.day}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </Modal>
        )}

        {/* When months are selected */}
        {modalVisibleMonth && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisibleMonth}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <FlatList
                  data={dummyData.months}
                  keyExtractor={(item) => `${item.id}`}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      onPress={() => {
                        setMonths(item.month),
                          setModalVisibleMonth(!modalVisibleMonth);
                      }}
                      style={{
                        marginBottom: SIZES.base,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: scale(18),
                          color: COLORS.black,
                          fontWeight: "500",
                        }}
                      >
                        {item.month}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </Modal>
        )}

        {/* When years are selected */}
        {modalVisibleYear && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisibleYear}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <FlatList
                  data={dummyData.years}
                  keyExtractor={(item) => `${item.id}`}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      onPress={() => {
                        setYears(item.year),
                          setModalVisibleYear(!modalVisibleYear);
                      }}
                      style={{
                        marginBottom: SIZES.base,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: scale(18),
                          color: COLORS.black,
                          fontWeight: "500",
                        }}
                      >
                        {item.year}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </Modal>
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;
