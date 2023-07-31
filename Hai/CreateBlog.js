import { View, Text, SafeAreaView,Alert, Image,Button,TextInput, ScrollView,StyleSheet, ImageBackground} from 'react-native'
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
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { API_URL } from './HttpService';



export default function BlogCreate() {

    const navigation = useNavigation();
  
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [imageSource, setImageSource] = useState(null);



    const handleInfoBlog = () =>{
      var data={
        'title':title,
        'description':description,
        'imageSource':imageSource
      }


      if (title && description && imageSource) {
        axios 
        .post(API_URL + '/infoBlog', data)
        .then((response)=>{
          Alert.alert(response.data.message);
          onInfo()
          navigation.navigate('Blog')
          
        })
        .catch((error)=>{
          console.error(error);
        });

      }else{
        Alert.alert('Please fill in all the fields')
      }
    }

    const onInfo =()=>{
      setTitle('');
      setDescription('');
      setImageSource(null);
    }

    
    
    const handleSelectPhoto =  async () => {
        const options = {
          title: 'Select Image',
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        };
        try {
            const response = await ImagePicker.launchImageLibraryAsync(options);
            if (!response.cancelled) {
              console.log("RESPONSE URI IMAGE", response.assets[0].uri)
              setImageSource(response.assets[0].uri);
            }
          } catch (error) {
            console.log('Image picker error:', error);
          }
        };
        


   return(
         <SafeAreaView>
            <ScrollView >
                <View style={style.container}>
                    
                        <TextInput
                        style={style.inputText}
                        placeholder="Add the Title"
                        placeholderTextColor="#003f5c"
                        onChangeText={setTitle}/>
                         <TextInput
                        style={style.inputText1}
                        placeholder="Add the your story"
                        placeholderTextColor="#003f5c"
                        onChangeText={setDescription}/>
                        {imageSource && <Image source={imageSource} style={style.image} />}
                        <Button title="Adaugă fotografie" onPress={handleSelectPhoto} />
                        <Image
                        source={{ uri: imageSource }}
                        style={style.selectedImage}
                        />

                        <TouchableOpacity onPress={handleInfoBlog} style={style.btnStyle}>
                            <Text>Save the info</Text>
                        </TouchableOpacity>
                </View>
                
               
            
            </ScrollView>
            
            
         </SafeAreaView>
        
    )
}

const style=StyleSheet.create(
   {
      container:{
        flex: 1,
        backgroundColor: '#4FD3DA',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        height:5000,
        width:'100%',
        gap:15

      },
      inputText:{
        fontSize: 10,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#999',
        padding: 20,
        width: '80%',
        height: 50,
        bottom:10,
        left:10,
    
        backgroundColor:'white',
        borderRadius:10
      },
    inputText1:{
      fontSize: 10,
      fontWeight: 'bold',
      borderWidth: 1,
      borderColor: '#999',
      padding: 20,
      width: '80%',
      height: 300,
      bottom:10,
      left:10,
  
      backgroundColor:'white',
      borderRadius:10
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
      },

    btnStyle:{
        width:100,
        height:30,
        bottom:20,
        backgroundColor:'orange',
        borderRadius:35
    },

      
   }
)
