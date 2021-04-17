import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Axios from "axios";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";

const UserDetailScreen = ({ route }) => {
  const emp = route.params;
  const [name, setName] = useState();

  useEffect(() => {
    setName(emp.empId.name);
  }, []);

  const changeName = (text) => {
    setName(text);
  };

  const updateEmployee = () => {
    Axios.put("http://192.168.5.4:8080/api/update", {
      id: emp.empId.id,
      name: name,
      image: "asdfasdfasdf",
    });
  };

  return (
    <View>
      <Text>User Create Screen</Text>
      <FormInput
        label="Username"
        placeholder="Please enter username"
        value={name}
        onChangeText={setName}
      />
      <FormButton text="Update" onPress={updateEmployee} />
    </View>
  );
};

export default UserDetailScreen;

const styles = StyleSheet.create({});
