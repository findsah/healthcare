import { View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

import { MedicalForms, PatientProfile } from "../../components";

const ProfilePatient = () => {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      {index === 0 ? (
        <>
          <PatientProfile onPress={() => setIndex(1)} />
        </>
      ) : (
        <MedicalForms onPress={() => setIndex(0)} />
      )}
    </View>
  );
};

export default ProfilePatient;
