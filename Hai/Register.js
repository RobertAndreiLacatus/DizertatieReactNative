import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView
  
} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import axios from 'axios';
import { API_URL } from './HttpService';
import { useNavigation } from '@react-navigation/native';

export default function Register() {

  const navigation = useNavigation();
  
  const [selectedOption, setSelectedOption]=useState('Host');
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister =  () => {
   
    var data = {
      'username': username,
      'password': password,
      'email': email,
      'phone': phone,
      'selectedOption':selectedOption,
    };

    
    if (phone && username && password && email) {
      // Send a POST request to the Flask API endpoint
      axios
        .post(API_URL + '/register', data)
        .then( (response) => {
          // Handle the response from the server
          // For example, show a success message or navigate
          Alert.alert(response.data.message);
          onRegister()
          navigation.navigate('LogOut')
        })
        .catch((error) => {
          // Handle the error from the server
          // For example, show an error message
          console.error(error);
        });
    } else {
      Alert.alert('Please fill in all the fields');
    }
  };

  const onRegister = () => {
    setUser('');
    setEmail('');
    setPassword('');
    setPhone('');

  };
  

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Register Please</Text>
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
          placeholder="E-mail"
          placeholderTextColor="#003f5c"
          onChangeText={setEmail}
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Phone Number"
          placeholderTextColor="#003f5c"
          onChangeText={setPhone}
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

      <TouchableOpacity onPress={handleRegister} style={styles.loginBtn}>
        <Text style={styles.loginText}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onRegister} style={styles.loginBtn}>
        <Text style={styles.loginText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BE93D4',
    alignContent:'center',
    alignItems:'center',
    
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#3AB4BA',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
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
