import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Image, TextInput, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import {API_URL} from './HttpService'
import Register from './Register'
import {Picker} from '@react-native-picker/picker'
import AsyncStorage from '@react-native-async-storage/async-storage'



export default function LogIn() {
    
    const navigation = useNavigation();
    const handleBlogs = () => {
        
        console.log("handleBlogs")
        navigation.navigate('Home')
    }
    const handleCreateAccount = () => {
        console.log("handleCreateAccount")
        navigation.navigate('Register')
    }


    const onPressForgotPassword = () => {
        // Do something about forgot password operation
    };
    const onPressSignUp = () => {
        // Do something about signup operation
    };

    // To get the value from the TextInput
    const [textInputValue, setTextInputValue] = useState('');
  // To set the value on Text
    const [getValue, setGetValue] = useState('');
    const [selectedOption, setSelectedOption]=useState('Host');
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [displayMessage, setDisplayMessage] = useState('');

    // const onPressLogin = () => {

    //   if (user==='Robert' && password==='123'){
    //     handleBlogs();
    //   }
    //   else{
    //     Alert.alert("No")
    //   }
    //   };

    
    
    const onPressLogin = () => {
        const data = {
            "username": username,
            "password": password,
            "selectedOption":selectedOption,
            
        };
        console.log("DATA", data)
        axios
            .post(API_URL + '/login', data)
            .then(response => {
                console.log(response.data);
                setDisplayMessage(response.data.message)

                if (response.data.success) {
                    setUser(response.data.username);
                }
                
                if (selectedOption ==="Guest"){
                    navigation.navigate('FirstGuest')
                }
                else if (selectedOption === "Host"){
                    navigation.navigate('FirstHost',{ username: username })
                    
                    
                }
                else{
                    setDisplayMessage(response.data.message)
                }
                
               
                    

                // Handle successful login
            })
            .catch(error => {
                console.log("EROARE FRAIERE")
                setDisplayMessage("EROARE NU MERGE")
                // Handle login error
            });
    };

   

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}> Traveller</Text>
            <Text style={styles.title}> {displayMessage} </Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={setUser}

                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    onChangeText={setPassword}

                />
            </View>
            <View style={styles.inputChose}>
                <Picker
                    selectedValue={selectedOption}
                    onValueChange={(itemValue) => setSelectedOption(itemValue)}
                >
                    <Picker.Item label="Host" value="Host" />
                    <Picker.Item label="Guest" value="Guest" />
                </Picker>
            </View>
            <TouchableOpacity onPress={onPressForgotPassword}>
                <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount}>
                <Text style={styles.forgotAndSignUpText}>Signup</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        
    );
}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4FD3DA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#3AB4BA",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    forgotAndSignUpText: {
        color: "white",
        fontSize: 11,
        bottom:20
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 30
    },
    inputChose: {
        width: '40%',
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        paddingHorizontal: 3,
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: '#d3d3d3',
        
       
      },
});
