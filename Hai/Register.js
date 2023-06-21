import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';

export default function Register() {
  const userRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const phoneRef = useRef(null);

  const handleRegister = () => {
    const username = userRef.current?.value;
    const email = emailRef.current?.value;
    const password = passRef.current?.value;
    const phoneNumber = phoneRef.current?.value;
    const data = {
      username: username,
      password: password,
      email: email,
      phone: phoneNumber,
    };

    if (username && email && password && phoneNumber) {
      // Send a POST request to the Flask API endpoint
      axios
        .post('http://localhost:5000/register', data)
        .then((response) => {
          // Handle the response from the server
          // For example, show a success message or navigate
          Alert.alert(response.data.message);
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
    if (
      userRef.current &&
      emailRef.current &&
      passRef.current &&
      phoneRef.current
    ) {
      userRef.current.value = '';
      emailRef.current.value = '';
      passRef.current.value = '';
      phoneRef.current.value = '';
    } else {
      Alert.alert('No');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Please</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          ref={userRef}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="E-mail"
          placeholderTextColor="#003f5c"
          ref={emailRef}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          ref={passRef}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Phone Number"
          placeholderTextColor="#003f5c"
          ref={phoneRef}
        />
      </View>
      <TouchableOpacity onPress={handleRegister} style={styles.loginBtn}>
        <Text style={styles.loginText}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onRegister} style={styles.loginBtn}>
        <Text style={styles.loginText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BE93D4',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: 40,
    marginBottom: 10,
  },
});
