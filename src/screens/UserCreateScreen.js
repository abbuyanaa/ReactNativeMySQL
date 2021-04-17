import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import Axios from "axios";

const UserCreateScreen = () => {
  const [name, setName] = useState("name");
  const [image, setImage] = useState("image");
  const [employee, setEmployee] = useState([]);

  // const checkName = (text) => {
  //   setName(text);
  // };

  const createUser = () => {
    Axios.post("http://192.168.5.4:8080/api/create", {
      name: "name",
      image: "image",
    }).then(() => {
      setEmployee([...employee, { name: name, image: image }]);
    });
  };

  return (
    <View>
      <Text>User Create Screen</Text>
      <FormInput
        label="Username"
        placeholder="Please enter username"
        value={name}
      />
      <FormButton text="Add" onPress={createUser} />
    </View>
  );
};

export default UserCreateScreen;

const styles = StyleSheet.create({});
