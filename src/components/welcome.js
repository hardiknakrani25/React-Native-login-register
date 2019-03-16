/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView,Image,TextInput,Button} from 'react-native';
//import Welcome  from 'Welcome'



export default class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
        this.state={password:''}
    }



    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'skyblue',alignItems:'center',justifyContent:'center'}}>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:50,alignItems:'center'}}>Welcome</Text>
                </View>
            </SafeAreaView>
        );
    }
}

