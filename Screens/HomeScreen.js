import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, NavigationRow, SearchBar } from "react-native-ios-kit";

export const HomeScreen = () => {
  const [text, setText] = useState();
  return (
    <>
      <Button style={styles.button} inline rounded>
        Button (inline/rounded)
      </Button>
      <NavigationRow
        title="NavigationRow"
        onPress={() => alert("NavigationRow pressed")}
        info="navigation"
      />

      <SearchBar value={text} onValueChange={setText} withCancel animated />
    </>
  );
};

const styles = StyleSheet.create({});
