import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import cart from "../../assets/cart.png";

export default function Cart(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
      }}
    >
      <View>
        <View style={styles.cartWrapper}>
          <Image source={cart} style={styles.iconCart} />
          <Text style={styles.notif}>{props.quantity}</Text>
        </View>
        <Text style={styles.text}>Keranjang belanja anda</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartWrapper: {
    borderWidth: 1,
    borderColor: "#4398D1",
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 40,
  },
  iconCart: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 12,
    color: "#777777",
    fontWeight: "700",
    marginTop: 50,
  },
  notif: {
    fontSize: 12,
    color: "white",
    backgroundColor: "#6FCF97",
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: "absolute",
    top: 0,
    right: 0,
  },
});
