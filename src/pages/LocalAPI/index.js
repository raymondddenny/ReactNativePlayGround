import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import ProfileUser from "../../components/Profile";

const LocalAPI = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
    console.log(isEdit);
  }, []);

  const buttonSubmit = () => {
    // const data = {
    //   name: name,
    //   age: age,
    //   job: job,
    // };

    // versi ringkas klw nama dan params sama
    const data = {
      name,
      age,
      job,
    };
    console.log("Data before send : ", data);

    if (isEdit === true) {
      axios
        .put(`http://192.168.88.45:3001/users/${selectedUser.id}`, data)
        .then((result) => {
          console.log("result update : ", result.data);
          setName("");
          setAge("");
          setJob("");
          setIsEdit(false);

          // call get data
          getData();
        });
    } else if (isEdit === false) {
      axios
        .post("http://192.168.88.45:3001/users", data)
        .then((result) => {
          console.log("result :", result.data);

          // reset the value in text field
          setName("");
          setAge("");
          setJob("");
          setIsEdit(false);

          // call get data
          getData();
        })
        .catch((err) => console.log(err));
    }
  };

  const getData = () => {
    axios.get("http://192.168.88.45:3001/users").then((res) => {
      console.log("hasil get data : ", res.data);
      setUsers(res.data);
    });
  };

  const onChangTextInput = (val, param) => {
    switch (param) {
      case "name":
        setName(val);
        break;
      case "age":
        setAge(val);
        break;
      case "job":
        setJob(val);
        break;

      default:
        break;
    }
  };

  const selectItem = (data) => {
    console.log("selected item =>", data);
    setSelectedUser(data);
    setName(data.name);
    setAge(data.age.toString());
    setJob(data.job);
    setIsEdit(true);
  };

  const deleteItem = (item) => {
    console.log("deleted user :", item);
    axios
      .delete(`http://192.168.88.45:3001/users/${item.id}`)
      .then((result) => {
        console.log("result delete : ", result.data);
        getData();
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>LOCAL API (JSON Server)</Text>
      <View style={styles.line} />
      <TextInput
        placeholder="Masukan nama"
        style={styles.input}
        onChangeText={(text) => {
          onChangTextInput(text, "name");
          //   console.log(typeof text);
        }}
        value={name}
      />
      <TextInput
        placeholder="Umur anda"
        style={styles.input}
        onChangeText={(value) => {
          onChangTextInput(value, "age");
        }}
        value={age}
      />
      <TextInput
        placeholder="Pekerjaan"
        style={styles.input}
        onChangeText={(value) => {
          onChangTextInput(value, "job");
        }}
        value={job}
      />

      <>
        <Button
          title={!isEdit ? "Tambahkan" : "Update"}
          onPress={buttonSubmit}
          color={!isEdit ? "#FF7F50" : "#008000"}
        />
      </>

      <View style={styles.line} />

      {users.map((user) => {
        return (
          <ProfileUser
            key={user.id}
            name={user.name}
            age={user.age}
            job={user.job}
            onPress={() => selectItem(user)}
            onDelete={() => deleteItem(user)}
          />
        );
      })}
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: "center",
  },
  line: {
    height: 2,
    backgroundColor: "black",
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 18,
    borderRadius: 8,
    padding: 8,
  },
});
