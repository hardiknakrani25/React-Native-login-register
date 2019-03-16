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

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
        this.state={password:''}
    }

    onWelcome=()=>{
        const {navigation}=this.props;
        navigation.navigate('Welcome');
    };

    onForgetPassword=()=>{
        const {navigation}=this.props;
        navigation.navigate('ForgetPassword');
    };


    onCreateAccount=()=>{
        const {navigation}=this.props;
        navigation.navigate('NewAccount');
    }
    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'skyblue'}}>
                {/*<Text style={styles.welcome}>Login</Text>*/}
                <View style={{paddingTop: 100,alignItems: 'center'}}>
                    <Image source={{uri:'https://static.thenounproject.com/png/17241-200.png'}} style={{height:100, width:100}}/>
                </View>


                <View style={{padding:20,alignItems:'center'}}>

                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter your name here"
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>


                <View style={{padding:5,alignItems:'center'}}>

                    <TextInput
                        //onPress={}
                        style={styles.textinput}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                    />
                </View>



                <View style={{marginTop:20,marginRight:150,marginLeft:150,alignItems:'center',backgroundColor:'#FF9E19',borderRadius:10,borderWidth:1}}>
                    <Button
                        onPress={this.onWelcome}
                        title="Login"
                        color="white"
                    />


                </View>

                <View style={{padding:5}}>
                    <Button
                        onPress={this.onForgetPassword}
                        title="Forget Password?"
                        color="#841584"
                    />

                    <Button
                        onPress={this.onCreateAccount}
                        title="Don't have account create new one"
                        color='black'
                    />
                </View>



            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textinput:{
        height: 50,width:250,backgroundColor:'white',borderRadius:20,borderWidth:3,borderColor:'black'
    },
    welcome: {
        fontSize: 42,
        textAlign: 'center',
        margin: 10,
        color:'white'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
