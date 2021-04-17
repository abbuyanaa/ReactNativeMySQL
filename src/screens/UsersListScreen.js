import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FormButton from "../components/FormButton";
import Axios from "axios";

const UsersListScreen = ({ navigation }) => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    Axios.get("http://192.168.5.4:8080/api/view").then((response) => {
      // console.log(response.data);
      setEmployee(response.data);
    });
  }, []);

  const deleteEmployee = (id) => {
    Axios.delete(`http://192.168.5.4:8080/api/delete/${id}`);
    console.log(id);
  };

  return (
    <View>
      <FormButton
        text="New User"
        onPress={() => navigation.navigate("UserCreate")}
      />
      {employee.map((el) => {
        return (
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "green",
              margin: 5,
            }}
            onPress={() => {
              navigation.navigate("UserDetail", { empId: el });
              // console.log(el);
            }}
            key={el.id}
          >
            <Text style={{ color: "#fff", fontSize: 16 }} key={el.id}>
              {el.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default UsersListScreen;

const styles = StyleSheet.create({});
