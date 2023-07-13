import { View, Text , StyleSheet, ScrollView, Image} from 'react-native'
import React,{useState}from 'react'
import { useRoute } from '@react-navigation/native';
import {TextInput} from 'react-native'

import { useNavigation } from '@react-navigation/native';




const TemplateH=() =>{
  
  
  
  const navigation = useNavigation();
  const route=useRoute()
  const {title,description,image} = route.params 
  const [inboxText, setInboxText] = useState('');
 
  return (
    
    <ScrollView >
        <View style={styles.container}>
            <Text style={styles.title}>Template {title} </Text>
            <Text style={styles.description}>Template {description} </Text>
            <Image source={{ uri: image }} style={styles.image} />
            <TextInput
              style={styles.inboxInput}
              value={inboxText}
              onChangeText={setInboxText}
              placeholder="Enter inbox text"
              placeholderTextColor="#999"
              multiline
              textAlignVertical="top"
      />
        </View>
    </ScrollView>
   
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FD3DA',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height:2000,
    width:'100%'

  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginLeft:20,
    marginTop:200
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description:{
    fontSize:20,
    color:'white',
    position:'absolute',
    marginTop:100
  },
  inboxInput: {
    fontSize: 30,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#999',
    padding: 20,
    width: '100%',
    height: 200,
    marginTop:20
  },
    
   
   
  });

  export default TemplateH;