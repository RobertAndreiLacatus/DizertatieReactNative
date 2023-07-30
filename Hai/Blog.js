import { View, Text, SafeAreaView,  ScrollView,StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import CardE from './Card'
import Lisbon2 from './assets/lisbon.png'
import Home from './Home'
import Porto2 from './assets/porto.png'
import Frankfurt2 from './assets/frankfurt.png'
import Barcelona2 from './assets/barcelona.png'
import Viano from './assets/viano.jpg'
import Granada from './assets/granda.png'
import LisbonBlog from './Lisbon'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';



export default function Blog() {

   const navigation = useNavigation();

   const createBlog =()=>{
      navigation.navigate('CreateBlog')
   }

   return(
         <SafeAreaView>
            <ScrollView>
            <ImageBackground source={Granada} resizeMode='cover' style={style.image}>
               <TouchableOpacity style={style.blogBTN} onPress={createBlog}>
                  <Text>Create a blog</Text>
               </TouchableOpacity>
               <CardE  title='Three days in Lisbon' description='If you have never been in Lisbon before, this is the perfect blog for you' poza={Lisbon2} page='LisbonB'/>
               <CardE  title='Why Porto?' description="Let's see why Porto is suitable for your next vacation" poza={Porto2} page={Home}/>
               <CardE  title='Frankfurt with other eyes' description="Why Frankfurt is one of German's engines " poza={Frankfurt2} page={Home}/>
               <CardE  title="Barcelona and La Siesta " description="If you want to see the exclusivity of Spain, perhaps you should visit Barcelona" poza={Barcelona2} page={Home}/>
               <CardE  title="Viano de Castello's Monastery " description="Perhaps you want to reconnect with God, then this blog is for you" poza={Viano} page={Home}/>
            </ImageBackground>
            </ScrollView>
            <View style={style.footer}>
                  <Text style={style.footerText}>@ Lacatus Robert</Text>
       
            </View>
            
         </SafeAreaView>
        
    )
}

const style=StyleSheet.create(
   {
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
       image:{
         flex: 0.5,
         justifyContent: 'center',
         height: '100%',
         width: '100%'
       
       },
       blogBTN: {
         width: "30%",
         backgroundColor: "#fb5b5a",
         borderRadius: 25,
         height: 40,
         alignItems: "center",
         justifyContent: "center",
         marginTop:10,
         left:125
         
     },
   }
)
