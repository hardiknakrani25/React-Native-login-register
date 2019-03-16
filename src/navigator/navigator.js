import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from '../index';
import Login from '../components/login';
import Welcome from '../components/welcome';
import ForgetPassword from '../components/forgetPassword';
import NewAccount from '../components/newAccount';






const AppNavigator = createStackNavigator({
    Home,
    Login,
    Welcome,
    ForgetPassword,
    NewAccount
},{
  headerMode:'none',
    initialRouteName:'Login'

});

export default createAppContainer(AppNavigator);
