import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import Lisbon from './assets/lisbon.png'
import { useNavigation } from '@react-navigation/native';



const Home=() =>{
  
  const video=React.useRef(null);
  
  const navigation = useNavigation();
  const handle=()=>{
    navigation.navigate('Blog')
  }
 
  return (
    <View style={styles.container}>
       
      <ScrollView>
     
      <ImageBackground source={Lisbon} resizeMode='cover' style={styles.image}>
        <Text style={styles.textH}> Welcome in this world</Text>
        <Text style={styles.text}> City Show </Text>
        
      </ImageBackground>
      <TouchableOpacity onPress={handle} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Check the Blog</Text>
       </TouchableOpacity>
       
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>@ Lacatus Robert</Text>
       
      </View>
      
    </View>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    image:{
      flex: 1,
      justifyContent: 'center',
      height: 1000,
      width: '100%'
    
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 150,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    textH:{
      color:'white',
      fontSize:32,
      textAlign:'center',
      justifyContent:'center',
      position:'absolute',
      top:20,
      left:20,
      
      
    },
    appButtonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 2,
      backgroundColor: "#009688",
      height:60,
      width:190,
      borderRadius: 10,
      paddingVertical: 5,
      paddingHorizontal: 5,
      position:'absolute',
      bottom:250,
      right:90
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
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
    footerText: {
      fontSize: 16,
      color: 'white',
    },
  });

  export default Home;