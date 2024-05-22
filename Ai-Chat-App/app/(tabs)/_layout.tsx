import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen";
import ChatScreen from "../pages/ChatScreen";
import { NavigationContainer } from '@react-navigation/native';

export const Stack = createStackNavigator();

export default function HomeScreenStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="chat"
        options={{
          headerShown: false,
        }}
        component={ChatScreen}
      />
    </Stack.Navigator>
    
  );
}
