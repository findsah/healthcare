import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "./src/constants";
import { SCREENS } from "./src/constants/screens";
import {
  ForgotPassword,
  HomeScreen,
  Login,
  Register,
  Welcome,
} from "./src/screens";
import TabNavigation from "./src/navigation/TabNavigation";
import EmailVerify from "./src/screens/Auth/EmailVerify/EmailVerify";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.WELCOME}>
        <Stack.Screen
          name={SCREENS.WELCOME}
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.LOGIN}
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.REGISTER}
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.EMAIL_VERIFY}
          component={EmailVerify}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.FORGOT_PASSWORD}
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.TAB_NAVIGATION}
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.HOME_SCREEN_DOCTOR}
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
