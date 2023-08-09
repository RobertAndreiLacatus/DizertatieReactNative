import { View, Text , StyleSheet, ScrollView, Image, Button,Alert,TouchableOpacity} from 'react-native'
import React,{useState}from 'react'
import { useRoute } from '@react-navigation/native';
import {TextInput} from 'react-native'

import { useNavigation } from '@react-navigation/native';
import Bed from '../assets/bed.png'
import Line from '../assets/thinline.png'
import Bathroom from '../assets/bathroom.png'
import People from '../assets/people.png'
import Bedroom from '../assets/bedroom.png'
import Kitchen from '../assets/kitchen.png'
import LivingRoom from '../assets/livingroom.png'
import Balcony from '../assets/balcony.png'

import axios from 'axios';
import { API_URL } from '../HttpService';
import MapG from '../MapG';





const TemplateH=() =>{
  
  
  
  const navigation = useNavigation();
  const route=useRoute()
  const {title,description,image} = route.params 
  const [inboxText, setInboxText] = useState('');
  const [inboxText1, setInboxText1] = useState('');
  const [inboxText2, setInboxText2] = useState('');
  const [detailsText,setDetailsText] =useState('');
  const [detailsText1,setDetailsText1] =useState('');
  const [detailsText2,setDetailsText2] =useState('');
  const [detailsText3,setDetailsText3] =useState('');
  const [descriptionB, setDescriptionB]=useState('');
  const [place, setPlace] = useState('');
  const [yourTouristicPlace1, setYourTouristicPlace1] = useState('');
  const [yourTouristicPlace2, setYourTouristicPlace2] = useState('');
  const [yourTouristicPlace3, setYourTouristicPlace3] = useState('');
  const [yourLocation1, setYourLocation1] =useState('');
  const [yourLocation2, setYourLocation2] =useState('');


  const handlePageInfo= ()=>{

    var data = {
      'title':title,
      'description':description,
      'image':image,
      'inboxText':inboxText,
      'inboxText1':inboxText1,
      'inboxText2':inboxText2,
      'detailsText':detailsText,
      'detailsText1':detailsText1,
      'detailsText2':detailsText2,
      'detailsText3':detailsText3,
      'descriptionB':descriptionB,
      

    };

    const resetInputs = () => {
      setInboxText('');
      setInboxText1('');
      setInboxText2('');
      setDetailsText('');
      setDetailsText1('');
      setDetailsText2('');
      setDetailsText3('');
      setDescriptionB('');
    };

    if (data) {
      axios
          .post(API_URL + '/templateUser',data)
          .then((response)=>{
            Alert.alert(response.data.message);
          resetInputs();
          

          })
          .catch((error)=>{
            console.error(error);
          })
    } else{
      Alert.alert('Please fill in all the fields')
    }

    
  }

  
 
  return (
    
    <ScrollView >
        <View style={styles.container}>
            <Text style={styles.title}> {title} </Text>
            <Text style={styles.description}>{description} </Text>
            <Image source={{ uri: image }} style={styles.image} />
            <Image source={Line} style={styles.line}/>
            <TextInput
              style={styles.inboxInput}
              value={inboxText}
              onChangeText={setInboxText}
              placeholder="Enter the number of beds"
              placeholderTextColor="#999"
              multiline
              textAlignVertical="top"
      />    
            <Image source={Bed} style={styles.imageIcon}/>
            <TextInput
              style={styles.inboxInput1}
              value={inboxText1}
              onChangeText={setInboxText1}
              placeholder="Enter the number of bathrooms"
              placeholderTextColor="#999"
              multiline
              textAlignVertical="top"
      />
             <Image source={Bathroom} style={styles.imageIcon1}/> 

             <TextInput
              style={styles.inboxInput2}
              value={inboxText2}
              onChangeText={setInboxText2}
              placeholder="Enter the number of people"
              placeholderTextColor="#999"
              multiline
              textAlignVertical="top"
      />
            <Image source={People} style={styles.imageIcon2}/> 
            <Image source={Line} style={styles.line11}/>
        <View style={styles.containerDetails}>
          <Text style={styles.titleOther}>Other details</Text>
          <TextInput
              style={styles.detailsText}
              value={detailsText}
              onChangeText={setDetailsText}
              placeholder="Describe your Bedroom"
              placeholderTextColor="#999"
              multiline
              textAlignVertical="top"
      />
            <Image source={Bedroom} style={styles.bedroomIcon}/>
            <TextInput
              style={styles.detailsText1}
              value={detailsText1}
              onChangeText={setDetailsText1}
              placeholder="Describe your Kitchen"
              placeholderTextColor="#999"
              multiline
              textAlignVertical="top"
      />
            <Image source={Kitchen} style={styles.bedroomIcon}/>
            <TextInput
              style={styles.detailsText2}
              value={detailsText2}
              onChangeText={setDetailsText2}
              placeholder="Describe your Living Room"
              placeholderTextColor="#999"
              multiline
              textAlignVertical="top"
      />
            <Image source={LivingRoom} style={styles.bedroomIcon}/>
            <TextInput
              style={styles.detailsText2}
              value={detailsText3}
              onChangeText={setDetailsText3}
              placeholder="Describe your Balcony"
              placeholderTextColor="#999"
              multiline
              textAlignVertical="top"
      />
            <Image source={Balcony} style={styles.bedroomIcon}/>
        </View>
        
        <View style={styles.containerGeneral}>
          <Text style={styles.titleGeneral}> General Description</Text>
          <View style={styles.containerDescription2}> 
            <Text style={styles.descriptionGeneral}> Please, make a general description about the surroundings. </Text>
          </View>
          <TextInput
              style={styles.descriptionB}
              value={descriptionB}
              onChangeText={setDescriptionB}
              placeholder="Describe your area"
              placeholderTextColor="#999"
              multiline
              textAlignVertical="top"
      />
          
          <View style={styles.mapG1}>
              <Text style={styles.titleMap}>Please add coordinations to your place</Text>
              <TextInput
              style={styles.yourLocation1}
              value={yourLocation1}
              onChangeText={setYourLocation1}
              placeholder="Coordinate 1"
              placeholderTextColor="#999"
              multiline
              textAlignVertical="top"
              />
              <TextInput
              style={styles.yourLocation2}
              value={yourLocation2}
              onChangeText={setYourLocation2}
              placeholder="Coordinate 2"
              placeholderTextColor="#999"
              multiline
              textAlignVertical="top"
              />
              <MapG/>
              <TouchableOpacity  style={styles.placeBtn}>
                  <Text> Add Your Place </Text>
              </TouchableOpacity>
          </View>

          


          <View style={styles.mapG1}>
              <Text style={styles.titleMap}>Move the second pin to highlight the place</Text>
              <TextInput
              style={styles.yourLocation1}
              value={yourTouristicPlace1}
              onChangeText={setYourTouristicPlace1}
              placeholder="Title of the touristic place"
              placeholderTextColor="#999"
              multiline
              textAlignVertical="top"
              />
              
              <MapG/>
              <TouchableOpacity  style={styles.placeBtn}>
                  <Text> Add Your Place </Text>
              </TouchableOpacity>
          </View>

          <View style={styles.mapG1}>
              <Text style={styles.titleMap}>Move the second pin to highlight the place</Text>
              <TextInput
              style={styles.yourLocation1}
              value={yourTouristicPlace3}
              onChangeText={setYourTouristicPlace3}
              placeholder="Title of the touristic place"
              placeholderTextColor="#999"
              multiline
              textAlignVertical="top"
              />
              
              <MapG/>
              <TouchableOpacity  style={styles.placeBtn}>
                  <Text> Add Your Place </Text>
              </TouchableOpacity>
          </View>

          <View style={styles.mapG1}>
              <Text style={styles.titleMap}>Move the second pin to highlight the place</Text>
              <TextInput
              style={styles.yourLocation1}
              value={yourTouristicPlace2}
              onChangeText={setYourTouristicPlace2}
              placeholder="Title of the touristic place"
              placeholderTextColor="#999"
              multiline
              textAlignVertical="top"
              />
              
              <MapG/>
              <TouchableOpacity  style={styles.placeBtn}>
                  <Text> Add Your Place </Text>
              </TouchableOpacity>
          </View>

   
          
        </View>
        <Image source={Line} style={styles.line3}/>

        
        
        
          <TouchableOpacity onPress={handlePageInfo} style={styles.doneBtn}>
            <Text> Done </Text>
          </TouchableOpacity>
          <View style={styles.footer}>
                  <Text style={styles.footerText}>@ Lacatus Robert</Text>
       
            </View>
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
    height:5000,
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

    fontSize: 10,
    backgroundColor:'white',
    borderRadius:10
,    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#999',
    padding: 20,
    width: '70%',
    height: 50,
    marginTop:20,
    left:10
  },
  imageIcon:{
    width:60,
    height:60,
    right:150,
    bottom:50
  },
  line:{
    width:350,
    height:50
  },
  inboxInput1: {
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#999',
    padding: 20,
    width: '70%',
    height: 50,
    bottom:40,
    left:10,
    backgroundColor:'white',
    borderRadius:10
  },
  imageIcon1:{
    width:50,
    height:50,
    right:150,
    bottom:90
  },
  inboxInput2: {
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#999',
    padding: 20,
    width: '70%',
    height: 50,
    bottom:70,
    left:10,
    backgroundColor:'white',
    borderRadius:10
  },
  imageIcon2:{
    width:50,
    height:50,
    right:150,
    bottom:120
  },
  line2:{
    width:350,
    height:50,
    bottom:200
  },
  containerDetails:{
    flex:0.5,
    marginBottom:10,
    
    width:350,
    height:20,
    bottom:10
  },
  titleOther:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  detailsText:{
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#999',
    padding: 20,
    width: '70%',
    height: 80,
    top:20,
    left:50,
    backgroundColor:'white',
    borderRadius:10
  },
  bedroomIcon:{
    width:50,
    height:50,
    right:10,
    bottom:50
  },
  
  detailsText1:{
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#999',
    padding: 20,
    width: '70%',
    height: 80,
    top:10,
    left:50,
    
    backgroundColor:'white',
    borderRadius:10
  },
  detailsText2:{
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#999',
    padding: 20,
    width: '70%',
    height: 80,
    top:10,
    left:50,
    
    backgroundColor:'white',
    borderRadius:10
  },
  line2:{
    width:350,
    height:50,
    bottom:1470
  },
  containerGeneral:{
    flex:0.5,
    marginBottom:10,
    
    width:350,
    height:20,
    bottom:1200,
    
  },
  titleGeneral:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  line3:{
    width:350,
    height:50,
    bottom:3120
  },
  line11:{
    width:350,
    height:50,
    top:5
  },

  containerDescription2:{
    flex:0.1,
    marginBottom:10,
 
    width:320,
    height:50,
    bottom:50,
    
    left:40,
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  descriptionGeneral:{
    fontSize:20,
    color:'white',
    position:'absolute',
    marginTop:100,
    justifyContent:'flex-start',
    alignItems:'center',
    bottom:5,
    
    
    
  },
  descriptionB:{
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#999',
    padding: 20,
    width: '90%',
    height: 400,
    bottom:50,
    left:20,
    
    backgroundColor:'white',
    borderRadius:10

  },
  detailsTextMap:{
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#999',
    padding: 20,
    width: 250,
    height: 30,
    top:10,
    left:30,
    bottom:20,
    backgroundColor:'white',
    borderRadius:10
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

  doneBtn: {
    width: 120,
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    bottom: 1200,
  },
  mapG1: {
    flex: 1,
    width: '100%',
    paddingTop: 20, // Adjust as needed
    paddingHorizontal: 20, // Adjust as needed
    paddingBottom: 20, // Adjust as needed
  },
  titleMap: {
    fontSize: 17,
    color: 'white',
    marginBottom: 10,
  },
  yourLocation1: {
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#999',
    padding: 20,
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
  },
  yourLocation2: {
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#999',
    padding: 20,
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
  },
  placeBtn: {
    width: '100%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },


  mapG2:{
    flex:0.7,
    width:'87%',
    height:'10%',
    left:35,
    top:200
    
  },
    
   
   
  });

  export default TemplateH;