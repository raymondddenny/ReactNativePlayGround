import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ButtonTouchable = (props) => {
  const { title, handleOnPressNich, height } = props;

  return (
    <>
      <TouchableOpacity
        onPress={handleOnPressNich}
        style={{ height: height, width: 100, backgroundColor: "red" }}
      >
        <Text>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonTouchable;
