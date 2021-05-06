import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IllustrationSVG from "../../assets/selfie.svg";

export default function ReactNativeSvg() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Belajar menggunakan svg di react native
      </Text>
      <View style={{ alignItems: "center" }}>
        <IllustrationSVG width={200} height={300} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
