import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView
} from "react-native";
import Constant from './helper/constant';
import {AppButton} from './subComponent';

export default class Home extends Component {

    onLoginPress = () => {
        const {navigation} = this.props;
        navigation.navigate('Login');
    };
onWelcome=()=>{
  const {navigation}=this.props;
  navigation.navigate('Welcome');
};

    render() {
        const {container} = styles;
        return (
            <SafeAreaView style={container}>
                <View style={{flex:1, backgroundColor: '#bdbdbd', alignItems:'center', justifyContent:'center'}}>

                   <AppButton title={'Login'}
                              onPress={this.onLoginPress}
                              extraStyle={{backgroundColor:'red'}}/>

                    <AppButton title={'Welcome'}
                               onPress={this.onWelcome}/>

                </View>
                <View style={{flex:1, backgroundColor: '#ff0'}}>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constant.themeColor,
    },
});
