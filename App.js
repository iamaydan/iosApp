import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { ThemeProvider } from "react-native-ios-kit";
import { HomeScreen } from "./Screens/HomeScreen";

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#ff6767",
    alignSelf: "center",
  },
});
