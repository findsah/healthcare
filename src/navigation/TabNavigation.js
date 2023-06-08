import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import {
  HealthDoctor,
  HealthPatient,
  HomeScreen,
  HomeScreenDoctor,
  ProfileDoctor,
  ProfilePatient,
} from "../screens";
import { SCREENS } from "../constants/screens";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const TabNavigation = ({ route }) => {
  const type = route?.params?.userType;
  const token = route?.params?.userToken;
  const userId = route?.params?.userId;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { borderTopWidth: 6, borderTopColor: COLORS.lightGreen },
        tabBarShowLabel: false,
        tabBarIcon: () => {
          if (
            route.name == SCREENS.HEALTH_PATIENT ||
            route.name == SCREENS.HEALTH_DOCTOR
          ) {
            return (
              <FontAwesome name="heartbeat" size={32} color={COLORS.navyBlue} />
            );
          } else if (
            route.name == SCREENS.HOME_SCREEN ||
            route.name == SCREENS.HOME_SCREEN_DOCTOR
          ) {
            return (
              <FontAwesome5 name="home" size={32} color={COLORS.navyBlue} />
            );
          } else {
            return (
              <FontAwesome
                name="user-circle"
                size={32}
                color={COLORS.navyBlue}
              />
            );
          }
        },
      })}
    >
      {type === "1" ? (
        <>
          <Tab.Screen name={SCREENS.HEALTH_DOCTOR} component={HealthDoctor} />
          <Tab.Screen
            name={SCREENS.HOME_SCREEN_DOCTOR}
            component={HomeScreenDoctor}
            initialParams={{ token: token }}
          />
          <Tab.Screen name={SCREENS.PROFILE_DOCTOR} component={ProfileDoctor} />
        </>
      ) : (
        <>
          <Tab.Screen
            name={SCREENS.HEALTH_PATIENT}
            component={HealthPatient}
            initialParams={{ token: token, idOfUser: userId }}
          />
          <Tab.Screen
            name={SCREENS.HOME_SCREEN}
            component={HomeScreen}
            initialParams={{ token: token }}
          />
          <Tab.Screen
            name={SCREENS.PROFILE_PATIENT}
            component={ProfilePatient}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

export default TabNavigation;
