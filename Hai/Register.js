import React , {useRef} from 'react'
import { View, Text , SafeAreaView, ScrollView, ImageBackground,StyleSheet, Image, TextInput, Alert} from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Travel from './assets/travel.png'
import { Title } from 'react-native-paper';
import axios from 'axios'


export default function Register() {

    const navigation = useNavigation();
    const userRef=useRef(null);
    const emailRef=useRef(null);
    const passRef= useRef(null);
    const phoneRef= useRef(null);
    const handleRegister=()=>{
        // navigation.navigate('LogOut')
        const username=userRef.current?.value;
        const email=emailRef.current?.value;
        const password=passRef.current?.value;
        const phoneNumber=phoneRef.current?.value;
        const data={
          "username":username,
          "password":password,
          "email":email,
          "phone":phoneNumber
        }
        
        if (username && email && password && phoneNumber){
          //Send a POST request to my Flask API endpoint
          axios.post(API_URL + '/register',data)
          .then(response =>{
            //Handle the response from the server
            //For example, show a success message or navigate
            setDisplayMessage(response.data.message)
            navigation.navigate('LogOut');
          })
          .catch(error=>{
            //Handle the error from the server
            //For example, show an error message
            console.error(error);
          });

        }else{
          Alert.alert('Please, fill in all the fields')
        }
        
      }

      
        const onPressForgotPassword = () => {
        // Do something about forgot password operation
        };
        const onPressSignUp = () => {
        // Do something about signup operation
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
          <Text style={styles.title}> Register Please</Text>
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
          <View style={styles.footer}>
                  <Text style={styles.footerText}>@ Lacatus Robert</Text>
       
            </View>
              <TouchableOpacity onPress={handleRegister} style={styles.loginBtn}>
                <Text style={styles.loginText}>Create </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleRegister} style={styles.loginBtn}>
                <Text style={styles.loginText}>Back to Login </Text>
              </TouchableOpacity>
          {/* <TouchableOpacity onPress={onPressForgotPassword}>
            <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressSignUp}>
            <Text style={styles.forgotAndSignUpText}>Signup</Text>
          </TouchableOpacity> */}
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
    title:{
    fontWeight: "bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom: 40,
    },
    inputView:{
    width:"80%",
    backgroundColor:"#3AB4BA",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
    },
    inputText:{
    height:50,
    color:"white"
    },
    forgotAndSignUpText:{
    color:"white",
    fontSize:11
    },
    loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(52, 52, 52, 0.9)',
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
    },
    });
    
    
