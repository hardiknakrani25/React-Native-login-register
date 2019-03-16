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
    sendMail=()=>{
        const {navigation}=this.props;
        navigation.navigate('ForgetPassword');
    };


    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'skyblue',alignItems:'center',justifyContent:'center'}}>
                <View style={{alignItems:'center'}}>
                    <TextInput
                        style={{  height: 50,width:250,backgroundColor:'white',borderRadius:20,borderWidth:3,borderColor:'black'}}
                        placeholder="Enter your Register email"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <View style={{marginTop:20,marginRight:100,marginLeft:100,alignItems:'center',backgroundColor:'#FF9E19',borderRadius:10,borderWidth:1}}>
                        <Button
                            onPress={this.sendMail}
                            title="Send Reset Link"
                            color="white"
                        />

                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

