import { Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Color from "../../constants/colors/Color";

// Diemensions & Setup
const { width } = Dimensions.get("screen");
// *
const setWidth = (w) => (width / 100) * w;
// completed -  Diemensions & Setup

export default function GenersCard({ generesNames, active, onPress }) {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: active ? Color.ACTIVE : Color.WHITE,
      }}
      activeOpacity={0.6}
      onPress={() => onPress(generesNames)}
    >
      <Text
        style={{
          ...styles.genersText,
          color: active ? Color.WHITE : Color.BLACK,
        }}
      >
        {generesNames}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: Color.WHITE,
    paddingVertical: 8,
    elevation: 4,
    marginVertical: 2,
    width: setWidth(25),
  },
  genersText: {
    fontSize: 18,
    color: Color.ACTIVE,
  },
});
