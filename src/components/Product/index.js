import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import macbook from "../../assets/macbook.jpg";

export default function Product(props) {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image source={macbook} style={styles.imageProduct} />
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 16 }}>
          New Macbook 2020
        </Text>
        <Text style={styles.titleProduct}>Rp. 25.000.000</Text>
        <Text style={styles.priceProduct}>Jakarta</Text>
        <TouchableOpacity onPress={props.onPress} style={{ borderRadius: 25 }}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Beli</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: "#F2F2F2",
    width: 212,
    borderRadius: 8,
  },
  imageProduct: { width: 188, height: 107, borderRadius: 8 },
  titleProduct: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#F2994A",
    marginTop: 12,
  },
  priceProduct: { fontSize: 12, fontWeight: "300", marginTop: 12 },
  buttonWrapper: {
    backgroundColor: "#6FCF97",
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});
