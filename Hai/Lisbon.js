import { View, Text , SafeAreaView, ScrollView, ImageBackground,StyleSheet, Image} from 'react-native'
import React from 'react'
import Lisbon22 from './assets/lisbon.png'
import LisbonTr from './assets/lisbontr.jpg'
import Bel from './assets/bel.png'
import C from './assets/centru.png'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const LisbonBlog=() =>{

    const navigation = useNavigation();
    const handleBlogs=()=>{
        navigation.navigate('Blog')
      }

  return (


    <SafeAreaView>
      <ScrollView>
        <ImageBackground style={style.image} source={Lisbon22}>
            <View style={style.containerTitle}>
                <Text style={style.title}> Three days in Lisbon</Text>
            </View>
           
            
        </ImageBackground>
        <View >
            <Text style={style.text}>Lisbon is one of the prettiest and most liveable cities we have been to thus far. I used to live in San Francisco in the late 90s and that is exactly what Lisbon felt like to me. It is beautiful, it is hilly, it is got that same artsy vibe, and it is home to some amazing food, both Portuguese and international. It is one of those cities that makes you feel good simply by being there.

With so much going for it, it is no surprise that Lisbon has been one of the most talked about European destinations in recent memory. If you have heard the buzz and want to see what all the fuss is about, then this detailed travel guide will tell you all you need to know to plan your first trip to Lisbon.</Text>
            <Image source={LisbonTr} style={style.imageL} />
            <Image source={Bel} style={style.imageB} />
            <Image source={C} style={style.imageC} />
            <TouchableOpacity onPress={handleBlogs} style={style.appButtonContainer}>
                <Text>Back to Blog</Text>
            </TouchableOpacity>
        </View>


      </ScrollView>

      <View style={style.footer}>
        <Text style={style.footerText}>@ Lacatus Robert</Text>
       
      </View>

    </SafeAreaView>
  )
}

const style=StyleSheet.create({
    image:{
        flex:0.5,
        width:'100%',
        height:190,
        opacity:0.8,
        
           
    },
    title:{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize:18,
        marginTop:25,
       color:'black',
      
    },
    containerTitle:{
        backgroundColor:'white',
        width:200,
        height:70,
        borderRadius:20,
        position:'relative',
        top:30,
        left:85,
        opacity:0.7
    },
    text:{
        top:10,
        left:10,
        width:170,
        fontSize:22,
    },
    imageL:{
        width:100,
        height:160,
        position:'absolute',
        borderRadius:10,
        top:30,
        left:220,
    },
    imageB:{
        width:100,
        height:160,
        position:'absolute',
        borderRadius:10,
        top:220,
        left:220,
    },
    imageC:{
        width:100,
        height:160,
        position:'absolute',
        borderRadius:10,
        top:400,
        left:220,
    },
    appButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#009688",
        height:50,
        width:140,
        borderRadius: 10,
        bottom:350,
        left:200
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
    
})

export default LisbonBlog;