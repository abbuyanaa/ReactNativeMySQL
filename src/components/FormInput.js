import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const FormInput = (props) => {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "gray",
        paddingHorizontal: 15,
        paddingVertical: 5,
      }}
    >
      <Text style={{ fontSize: 14 }}>{props.label}</Text>
      <TextInput
        style={{ height: 40, borderBottomWidth: 1, borderBottomColor: "#000" }}
        {...props}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({});
