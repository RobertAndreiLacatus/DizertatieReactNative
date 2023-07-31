import { View, Text, SafeAreaView,  ScrollView,StyleSheet, ImageBackground} from 'react-native'
import React, { useState } from 'react'
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
import axios from 'axios'
import { API_URL } from './HttpService'
import { Card } from 'react-native-paper'



export default function Blog() {

   const navigation = useNavigation();
 
   
   const [displayMessage, setDisplayMessage] = useState('');
   const [title,setTitle]=useState('');
   const [description, setDescription] = useState('');
   const [imageSource, setImageSource] = useState(null);
   const [addCard, setAddCard] =useState([]);


   const createBlog =()=>{
      navigation.navigate('CreateBlog')
   }

   const refreshCard = () => {
  const data = {
    'title': title,
    'description': description,
    'imageSource': imageSource
  };
  console.log("DATA", data);

  axios
    .post(API_URL + '/findBlog', data)
    .then((response) => {
      console.log(response.data);

      if (Array.isArray(response.data)) {
        // If response.data is an array of blogs, update the state
        setAddCard(response.data);
      } else {
        setDisplayMessage("Invalid response format");
      }
    })
    .catch((error) => {
      console.log("EROARE", error);
      setDisplayMessage("EROARE nu merge");
    });
};


   return(
         <SafeAreaView>
            <ScrollView>
            <ImageBackground source={Granada} resizeMode='cover' style={style.image}>
               <TouchableOpacity style={style.blogBTN} onPress={createBlog}>
                  <Text>Create a blog</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={refreshCard}>
                  <Text>Refresh Blogs</Text>
               </TouchableOpacity>
               <CardE  title='Three days in Lisbon' description='If you have never been in Lisbon before, this is the perfect blog for you' poza={Lisbon2} page='LisbonB'/>
               <CardE  title='Why Porto?' description="Let's see why Porto is suitable for your next vacation" poza={Porto2} page={Home}/>
               <CardE  title='Frankfurt with other eyes' description="Why Frankfurt is one of German's engines " poza={Frankfurt2} page={Home}/>
               <CardE  title="Barcelona and La Siesta " description="If you want to see the exclusivity of Spain, perhaps you should visit Barcelona" poza={Barcelona2} page={Home}/>
               <CardE  title="Viano de Castello's Monastery " description="Perhaps you want to reconnect with God, then this blog is for you" poza={Viano} page={Home}/>
               {addCard.map((result,index)=>(
                  <CardE
                     key={index}
                     title={result.title}
                     description={result.description}
                     poza={result.imageSource}
                     page={'T'}/>
               ))}

              
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
         flex: 1,
         justifyContent: 'center',
         height: '100%',
         width: '100%'
       
       },
       blogBTN: {
         width: "30%",
         backgroundColor: "#fb5b5a",
         borderRadius: 25,
         height: 50,
         alignItems: "center",
         justifyContent: "center",
         marginTop:20,
         left:150,
        
         
     },
   }
)
