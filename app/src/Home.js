import React from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
  } from 'react-native';
import Cadastro from './Cadastro';
import Login from './Login';

const Home = ({navigation})=>{

    return (
        <View>
            <TouchableOpacity onPress = {() =>{
                navigation.navigate("Cadastro");
            }}>
                <Text>
                    Cadastro
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() =>{
                navigation.navigate("Login");
            }}>
                <Text>
                    Login
                </Text>
            </TouchableOpacity>
        </View>

    )
}

export default Home;

