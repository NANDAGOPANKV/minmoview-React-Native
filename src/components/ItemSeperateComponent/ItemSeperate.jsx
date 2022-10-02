import { View } from "react-native";
import React from "react";

export default function ItemSeperate({ width, height }) {
  return <View style={{ width, height }} />;
}

ItemSeperate.defaultProp = {
  height: 0,
  width: 0,
};
