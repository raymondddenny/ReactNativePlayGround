import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <View>
      <View
        style={{
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>{number}</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button title="tambah" onPress={() => setNumber(number + 1)} />
      </View>
    </View>
  );
};

export default function StateDinamis() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Belajar State Dinamis</Text>
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  counterContainer: {
    backgroundColor: "brown",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  counterText: {
    textAlign: "center",
    color: "white",
    padding: 20,
    fontSize: 48,
  },
  textTitle: {
    textAlign: "center",
  },
  button: {
    marginTop: 10,
  },
});
