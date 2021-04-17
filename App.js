import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UsersListScreen from "./src/screens/UsersListScreen";
import UserCreateScreen from "./src/screens/UserCreateScreen";
import UserDetailScreen from "./src/screens/UserDetailScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UsersList">
        <Stack.Screen name="UsersList" component={UsersListScreen} />
        <Stack.Screen name="UserCreate" component={UserCreateScreen} />
        <Stack.Screen name="UserDetail" component={UserDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
