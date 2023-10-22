import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Assuntos from "../screens/assuntos";
import StackNavigator from "./stack";
import Login from "../screens/login";
import Register from "../screens/register";

const Tab = createStackNavigator();

export default class PrincipalStackNavigator extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="assuntos" component={Assuntos} />
        <Tab.Screen name="stackNavigator" component={StackNavigator} />
        <Tab.Screen name="login" component={Login} />
        <Tab.Screen name="register" component={Register} />
      </Tab.Navigator>
    );
  }
}
