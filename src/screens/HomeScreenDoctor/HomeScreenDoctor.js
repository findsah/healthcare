// import { View, Text, Image, SafeAreaView } from "react-native";
// import React, { useState } from "react";
// import styles from "./styles";
// import { LinearGradient } from "expo-linear-gradient";
// import { COLORS, images } from "../../constants";
// import { CheckSchedule, HomeBars, MedicalHistory } from "../../components";

// const HomeScreenDoctor = ({ route }) => {
//   const token = route?.params?.token;

//   const [medicalHistory, setMedicalHistory] = useState(0);
//   const [checkSchedule, setCheckSchedule] = useState(0);

//   return (
//     <SafeAreaView style={styles.container}>
//       <LinearGradient
//         colors={[COLORS.secondary, COLORS.primary]}
//         style={styles.linearGradient}
//       >
//         {/* Image */}
//         <View style={styles.wallpaperContainer}>
//           <Image source={images.wallpaper} style={styles.wallpaperStyle} />
//         </View>

//         {/* Home Bars */}
//         {medicalHistory === 0 && checkSchedule === 0 ? (
//           <>
//             <HomeBars
//               onPress={() => setMedicalHistory(1)}
//               imageBar={images.files}
//               title="Patient Medical History"
//               subtitle="We value your patient privacy"
//             />
//             <HomeBars
//               onPress={() => setCheckSchedule(1)}
//               imageBar={images.calendar}
//               title="Check your Schedule"
//             />
// <HomeBars
//   imageBar={images.askDoctor}
//   title="Check on your patient"
//   subtitle="24/7"
// />
//           </>
//         ) : medicalHistory == 1 ? (
//           <MedicalHistory
//             onPress={() => setMedicalHistory(0)}
//             label="Patient Medical History"
//           />
//         ) : (
//           <CheckSchedule onPress={() => setCheckSchedule(0)} />
//         )}
//       </LinearGradient>
//     </SafeAreaView>
//   );
// };

// export default HomeScreenDoctor;

import {
  View,
  Text,
  Image,
  SafeAreaView,
  Button,
  Platform,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, images } from "../../constants";
import { CheckSchedule, HomeBars, MedicalHistory } from "../../components";
import * as DocumentPicker from "expo-document-picker";

const HomeScreenDoctor = ({ route }) => {
  const token = route?.params?.token;

  const [medicalHistory, setMedicalHistory] = useState(0);
  const [checkSchedule, setCheckSchedule] = useState(0);
  const [fileUri, setFileUri] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isItTrue, setIsItTrue] = useState(false);

  const pickFile = async () => {
    setIsItTrue(true);
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    if (!result.cancelled) {
      setFileUri(result.uri);

      let fileName = result.name;
      setFileName(fileName);
    }
  };

  const postMedicalHistory = () => {
    if (fileUri === null) {
      alert("Please Choose file ");
    } else {
      let formdata = new FormData();
      formdata.append("attachment", {
        uri: fileUri,
        name: "file.pdf",
        type: "application/pdf",
      });

      fetch("http://16.170.15.145/users/api/medicl_hitory/", {
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
          if (responsejosn?.attachment == "No file was submitted.") {
            alert("No file was submitted.");
          } else {
            alert("Medical History Save Successfully");
          }
        });
    }
    setIsItTrue(false);
    setFileUri(null);
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
        {medicalHistory === 0 && checkSchedule === 0 ? (
          <>
            <HomeBars
              onPress={() => setMedicalHistory(1)}
              imageBar={images.files}
              title="Patient Medical History"
              subtitle="We value your patient privacy"
            />
            <HomeBars
              onPress={() => setCheckSchedule(1)}
              imageBar={images.calendar}
              title="Check your Schedule"
            />
            <HomeBars
              imageBar={images.askDoctor}
              title="Check on your patient"
              subtitle="24/7"
            />
          </>
        ) : medicalHistory == 1 ? (
          <MedicalHistory
            isItTrue={isItTrue}
            fileName={fileName}
            fileUri={fileUri}
            uploadForms={pickFile}
            onPress={postMedicalHistory}
            label="Patient Medical History"
            goBack={() => setMedicalHistory(0)}
          />
        ) : (
          <CheckSchedule onPress={() => setCheckSchedule(0)} />
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreenDoctor;
