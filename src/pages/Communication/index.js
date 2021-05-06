import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Cart from "../../components/Cart";
import Product from "../../components/Product";

export default function Communication() {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View style={styles.container}>
      {/* <Text style={styles.textTitle}>
        Belajar Communication antar component
      </Text> */}
      <View>
        <Cart quantity={totalProduct} />
        <Product onPress={() => setTotalProduct(totalProduct + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
  },

  textTitle: {
    textAlign: "center",
  },
});
