import { View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

import { DoctorProfile, MedicalForms } from "../../components";

const ProfileDoctor = () => {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      {index == 0 ? (
        <>
          <DoctorProfile onPress={() => setIndex(1)} />
        </>
      ) : (
        <MedicalForms onPress={() => setIndex(0)} />
      )}
    </View>
  );
};

export default ProfileDoctor;
