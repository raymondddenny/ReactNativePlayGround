import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Moment from "moment";
import axios from "axios";

// Atoms Custom Components
// import ButtonTouchable from "../../components/atoms/ButtonTouchable";
// import { ButtonTouchable } from "../../components/molecules/allAtoms";

const CallAPIAxios = () => {
  const [dataUser, setDataUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });

  const [dataJson, setDataJson] = useState({
    name: "",
    job: "",
    createdAt: "",
  });

  const getData = () => {
    // Fetch API using vanilla
    // fetch("https://reqres.in/api/users/2")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //     setDataUser(json.data);
    //   });

    // Fetch API using Axios
    axios.get("https://reqres.in/api/users/3").then((result) => {
      console.log("result :", result.data.data);
      setDataUser(result.data.data);
    });
  };

  const postData = () => {
    console.log("masuk");
    const dataForAPI = {
      name: "Denny",
      job: "software engineer",
    };
    // fetch("https://reqres.in/api/users", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log("post response : ", json);
    //     setDataJson(json);
    //   });

    axios
      .post("https://reqres.in/api/users", dataForAPI)
      .then((result) => {
        console.log("result : ", result.data);
        setDataJson(result.data);
      })
      .catch((err) => console.log("error : ", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan AXIOS</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      <View style={styles.line} />
      {dataUser.avatar.length > 0 && (
        // literal condition
        <Image source={{ uri: dataUser.avatar }} style={styles.avatar} />
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>

      <Button title="POST DATA" onPress={postData} />
      {/* <ButtonTouchable
        title="POST DATA TEST"
        handleOnPressNich={postData}
        height={100}
      /> */}
      <Text>Response POST DATA</Text>
      <Text>{dataJson.name}</Text>
      <Text>{dataJson.job}</Text>
      {dataJson.createdAt.length > 0 && (
        <Text>{Moment(dataJson.createdAt).format("dddd, MMMM yyyy")}</Text>
      )}
      <View style={styles.line} />
    </View>
  );
};

export default CallAPIAxios;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  line: {
    height: 2,
    backgroundColor: "black",
    marginVertical: 20,
  },
});
