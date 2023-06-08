import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { moderateScale, scale } from "react-native-size-matters";
import { COLORS } from "../constants";
import HomeBars from "./HomeBars";
import TextIconContainer from "./TextIconContainer";

const Appointment = ({
  pressDay,
  pressMonth,
  pressYear,
  selectedDay,
  selectedMonth,
  selectedYear,
  clearDetails,
  bookAppointement,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Request an Appointment</Text>
      <View style={styles.boxStyle}>
        <Text style={styles.statement}>
          Please schedule appointment one day in advance
        </Text>
        <TextIconContainer
          onPress={pressDay}
          label={selectedDay}
          customCont={styles.customCont}
        />
        <TextIconContainer
          onPress={pressMonth}
          label={selectedMonth}
          customCont={styles.customCont}
        />
        <TextIconContainer
          onPress={pressYear}
          label={selectedYear}
          customCont={styles.customCont}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={clearDetails}
          style={[
            styles.commonStyleOfButton,
            {
              backgroundColor: COLORS.white,
              borderWidth: 0.5,
              borderColor: COLORS.black,
            },
          ]}
        >
          <Text style={[styles.commonStyleOfText, { color: COLORS.black }]}>
            Clear Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={bookAppointement}
          style={styles.commonStyleOfButton}
        >
          <Text style={styles.commonStyleOfText}>Book Appointment</Text>
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
    fontSize: scale(24),
    fontWeight: "bold",
    color: COLORS.white,
  },
  boxStyle: {
    backgroundColor: COLORS.navyBlue,
    borderRadius: moderateScale(12),
    padding: moderateScale(15),
    marginTop: moderateScale(20),
  },
  customCont: {
    width: "80%",
  },
  statement: {
    fontSize: scale(12),
    color: COLORS.white,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textInputContainer: {
    height: moderateScale(40),
    width: "80%",
    borderRadius: moderateScale(12),
    backgroundColor: COLORS.white,
    alignSelf: "center",
    marginTop: moderateScale(20),
    flexDirection: "row",
    alignItems: "center",
  },
  commonStyleOfButton: {
    height: moderateScale(40),
    width: "40%",
    backgroundColor: COLORS.navyBlue,
    marginTop: moderateScale(10),
    borderRadius: moderateScale(12),
    justifyContent: "center",
    alignItems: "center",
    marginRight: moderateScale(7),
  },
  commonStyleOfText: {
    fontSize: scale(12),
    color: COLORS.white,
    fontWeight: "500",
  },
});

export default Appointment;

// import React, { useState } from "react";
// import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

// const Appointment = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
// centeredView: {
//   flex: 1,
//   justifyContent: "center",
//   alignItems: "center",
//   marginTop: 22,
// },
// modalView: {
//   margin: 20,
//   backgroundColor: "white",
//   borderRadius: 20,
//   padding: 35,
//   alignItems: "center",
//   shadowColor: "#000",
//   shadowOffset: {
//     width: 0,
//     height: 2,
//   },
//   shadowOpacity: 0.25,
//   shadowRadius: 4,
//   elevation: 5,
// },
// button: {
//   borderRadius: 20,
//   padding: 10,
//   elevation: 2,
// },
// buttonOpen: {
//   backgroundColor: "#F194FF",
// },
// buttonClose: {
//   backgroundColor: "#2196F3",
// },
// textStyle: {
//   color: "white",
//   fontWeight: "bold",
//   textAlign: "center",
// },
// modalText: {
//   marginBottom: 15,
//   textAlign: "center",
// },
// });

// export default Appointment;
