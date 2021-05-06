import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BasicJavascript() {
  // Tipe data di JS

  // primitive type
  const name = "Denny"; // String
  let age = 24; // Number
  const isMale = true; // boolean

  // complex type
  const hewanPeliharaan = {
    nama: "MAW",
    jenis: "Kucing",
    usia: 2,
    apakahHewanLokal: true,
    orangTua: {
      jantan: "ande",
      betina: "wiw",
    },
  }; // object

  const sapaOrang = (pplName, pplAge) => {
    return console.log(`Hello ${pplName}, usia anda ${pplAge}`);
  };

  sapaOrang("Denny", 22);

  const namaOrang = ["Denny", "Raymond", "Wahyu", "Andi"]; //object - array

  const checkHewan = (objectHewan) => {
    // let hasil = "";
    // if (objectHewan.nama === "Meoew") {
    //   hasil = "Hello Meoew";
    // } else {
    //   hasil = "Hewan apa ini?";
    // }
    return objectHewan.nama === "MAW" ? "Hello MAW" : "Hello SIAPA INI?";
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Belajar basic BasicJavascript buat React Native
      </Text>
      <Text>{checkHewan(hewanPeliharaan)}</Text>

      <Text>LOOPING ===============</Text>

      {namaOrang.map((orang) => (
        <Text>{orang}</Text>
      ))}

      <Text>{JSON.stringify(hewanPeliharaan)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: "center",
  },
});
