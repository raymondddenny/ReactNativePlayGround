import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileUser = (props) => {
  const {
    name = "Default name",
    age = 20,
    job = "Default job",
    onPress,
    onDelete,
  } = props;
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.avatar}
          source={{
            uri: `https://i.pravatar.cc/150?u=${name}@pravatar.com`,
          }}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descAge}>{age}</Text>
        <Text style={styles.descJob}>{job}</Text>
      </View>

      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileUser;

const styles = StyleSheet.create({
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  desc: {
    flex: 1,
    marginLeft: 16,
    width: "55%",
  },
  descName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  delete: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
});
