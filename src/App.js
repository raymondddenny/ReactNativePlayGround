import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import BasicJavascript from "./pages/BasicJavascript";
import CallAPIAxios from "./pages/CallAPIAxios";
import CallAPIVanilla from "./pages/CallVanillaJS";
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
        {/* <ReactNativeSvg /> */}
        {/* <CallAPIVanilla /> */}
        <CallAPIAxios />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
