import { View, StatusBar, Text, StyleSheet } from "react-native";
import React from "react";


export default function Movie() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Movies Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
