import { View, Text, SafeAreaView, Image,Button,TextInput, ScrollView,StyleSheet, ImageBackground} from 'react-native'
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



export default function BlogCreate() {

    const navigation = useNavigation();
  
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [imageSource, setImageSource] = useState(null);
    
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
              setCardImage(response.assets[0].uri);
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

      
   }
)
