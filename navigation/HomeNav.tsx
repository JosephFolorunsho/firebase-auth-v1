import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../apps/screens/HomePage";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
export default function HomeNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons name="chevron-back-circle-outline" size={28} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
