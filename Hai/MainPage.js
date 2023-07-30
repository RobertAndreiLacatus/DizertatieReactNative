
import {View,Image,SafeAriaView, TouchableOpacity, Text,StyleSheet} from 'react-native'
import AuthStack from './AppStack';
import { useNavigation } from '@react-navigation/native';
import {Button} from 'react-native'





const MainPage=()=>{

    const navigation = useNavigation();
    


    const onPressLoginButton=()=>{
        navigation.navigate('LogOut');
        
    }

    const onPressMainButton = () =>{
        navigation.navigate('Home');
    }

  return(
    
    <View style={styles.container}>
        
        <Text style={styles.title}> Travel with us</Text>
        <TouchableOpacity onPress={onPressMainButton} style={styles.loginBtn}>
                
                <Text style={styles.loginText}>Main App </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLoginButton} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN </Text>
        </TouchableOpacity>
      
        
      
    
    </View>
    
  );
};


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
        marginBottom: 240,
        top:80
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
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
});



export default MainPage;