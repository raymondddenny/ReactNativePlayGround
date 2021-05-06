import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import BasicJavascript from "./pages/BasicJavascript";
import Communication from "./pages/Communication";
import PropsDinamis from "./pages/PropsDinamis";
import ReactNativeSvg from "./pages/ReactNativeSvg";
import StateDinamis from "./pages/StateDinamis";

export default function App() {
  return (
    <View>
      <ScrollView>
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <BasicJavascript /> */}
        <ReactNativeSvg />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
