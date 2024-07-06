import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/Login";
import Register from "./src/screens/register";
import ForgotPassword from "./src/screens/ForgotPassword";
import { createStackNavigator } from '@react-navigation/stack'

const Stack=createStackNavigator();

export default class App extends React.Component{
render(){
  return <NavigationContainer>
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="Register" component={Register}/>
    <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
  </Stack.Navigator>
</NavigationContainer>
}
}