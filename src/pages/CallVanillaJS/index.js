import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Moment from "moment";

const CallAPIVanilla = () => {
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
  useEffect(() => {
    // CALL API METHOD GET
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    // .then((response) => response.json())
    // .then((json) => console.log(json));
    // CALL API METHOD POST
    // const dataForAPI = {
    //   name: "morpheus",
    //   job: "leader",
    // };
    // fetch("https://reqres.in/api/users", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log("post response : ", json);
    //   });
  }, []);

  const getData = () => {
    fetch("https://reqres.in/api/users/2")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
    const dataForAPI = {
      name: "Denny",
      job: "software engineer",
    };
    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataForAPI),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("post response : ", json);
        setDataJson(json);
      });
  };

  console.log(dataUser.completed);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan vanila JS</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      <View style={styles.line} />
      <Image source={{ uri: dataUser.avatar }} style={styles.avatar} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>

      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST DATA</Text>
      <Text>{dataJson.name}</Text>
      <Text>{dataJson.job}</Text>
      <Text>{Moment(dataJson.createdAt).format("dddd, MMMM yyyy")}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default CallAPIVanilla;

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
