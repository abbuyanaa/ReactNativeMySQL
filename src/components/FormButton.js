import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const FormButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "green",
        padding: 10,
        margin: 10,
      }}
    >
      <Text style={{ textAlign: "center", color: "#fff", fontSize: 16 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({});
