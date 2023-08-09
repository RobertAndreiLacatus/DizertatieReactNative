import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import { SearchBar } from '@rneui/themed';
import CardE from '../Card';
import Lisbon2 from '../assets/lisbon.png';
import { API_URL } from '../HttpService';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import Line from '../assets/thinline.png'
import Bed from '../assets/bed.png'
import Bathroom from '../assets/bathroom.png'
import People from '../assets/people.png'
import Bedroom from '../assets/bedroom.png'
import Kitchen from '../assets/kitchen.png'
import LivingRoom from '../assets/livingroom.png'
import Balcony from '../assets/balcony.png'
import MapG from '../MapG';

export default function CardPageG( { route, navigation } ) {
  
  const { title } = route.params;

  const [descriptionB, setDescriptionB] = useState('');
  const [inboxText, setInboxText]=useState('');
  const [inboxText1, setInboxText1]=useState('');
  const [inboxText2, setInboxText2]=useState('');
  const [detailsText, setDetailsText]=useState('');
  const [detailsText1, setDetailsText1]=useState('');
  const [detailsText2,setDetailsText2] =useState('');
  const [detailsText3,setDetailsText3] =useState('');
  const [descriptionB1, setDescriptionB1]=useState('');

  const handleSearch = () => {
    const data = {
      searchQuery: title,
    };

    axios
      .post(API_URL + '/searchInfo', data)
      .then((response) => {
        let info = response['data'][0]
        setDescriptionB(info['description'])
        setDescriptionB1(info['descriptionB'])
        setInboxText(info['inboxText'])
        setInboxText1(info['inboxText1'])
        setInboxText2(info['inboxText2'])
        setDetailsText(info['detailsText'])
        setDetailsText1(info['detailsText1'])
        setDetailsText2(info['detailsText2'])
        setDetailsText3(info['detailsText3'])
      })
      .catch((error) => {
        console.log('Error occurred during search:', error);
      });
  };

  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <ScrollView >
      <View style={styles.container}>
        
      <Text style={styles.title}>{title}</Text>
      
      
      <Text style={styles.findTitle}>{descriptionB}</Text>
      
      <View style={styles.container2}>
        <Image source={Line} style={styles.line}/>
        <Text style={styles.inboxTexts}>Number of beds: {inboxText}</Text>
        <Image source={Bed} style={styles.imageIcon}/>
        <Text style={styles.inboxTexts1}>Number of people: {inboxText2}</Text>
        <Image source={People} style={styles.imageIcon1}/>
        <Text style={styles.inboxTexts2}>Number of bathrooms: {inboxText1}</Text>
        <Image source={Bathroom} style={styles.imageIcon2}/>  
        <Image source={Line} style={styles.line2}/>
        <Text style={styles.describeB}> Describe the bedroom</Text>
        <Text style={styles.describeB2}> {detailsText}</Text>
        <Image source={Bedroom} style={styles.bedroomIcon}/>
        <Text style={styles.describeK}> Describe the kitchen</Text>
        <Text style={styles.describeK2}> {detailsText1}</Text>
        <Image source={Kitchen} style={styles.kitchenIcon}/>
        <Image source={LivingRoom} style={styles.livingIcon}/>
        <Text style={styles.describeL}> Describe the living room</Text>
        <Text style={styles.describeL2}> {detailsText2}</Text>
        <Image source={Balcony} style={styles.balconyIcon}/>
        <Text style={styles.describeBL}> Describe the balcony</Text>
        <Text style={styles.describeBL2}> {detailsText3}</Text>
        <Image source={Line} style={styles.line3}/>
        <Text style={styles.describeBLD}> General Description</Text>
        <Text style={styles.describeBLD2}> {descriptionB1}</Text>
        <Text style={styles.where}> Where is the apartament or hotel placed</Text>
        
      </View>
      <View style={styles.mapGG}>
          <MapG/>
      </View>
      <View style={styles.mapGG}>
          <MapG/>
      </View>
      <View style={styles.mapGG}>
          <MapG/>
      </View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#4FD3DA',
    height:5000,
    width:'100%'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginTop: 10,
    marginBottom: 40,
    marginLeft: 50,
  },
  findTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    
    marginBottom: 30,
    marginLeft: 100,
  },
  searchBar: {
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    height: 40,
  },
  searchBarInput: {
    color: '#FFFFFF',
  },
  inboxTexts:{
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 30,
    marginLeft: 50,

  },
  imageIcon:{
    width:60,
    height:60,
    right:10,
    bottom:75
  },
  inboxTexts1:{
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 40,
    marginLeft: 50,
    bottom:50

  },
  imageIcon1:{
    width:40,
    height:40,
    left:1,
    bottom:120
  },
  imageIcon2:{
    width:40,
    height:40,
    left:1,
    bottom:170
  },
  inboxTexts2:{
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 40,
    marginLeft: 50,
    bottom:90

  },
  line2:{
    width:350,
    height:50,
    bottom:120,
    right:3
  },
  describeB:{
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 60,
    bottom:90
  },
  describeB2:{
    fontWeight: 'bold',
    color:'white',
    fontSize: 15,
    top:7,
    marginLeft: 60,
    bottom:90
  },
  bedroomIcon:{
    width:60,
    height:60,
    left:150,
    bottom:195,

  },
  describeK:{
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 60,
    top:140
  },
  kitchenIcon:{
    width:60,
    height:60,
    left:150,
    top:40,

  },
  describeK2:{
    fontWeight: 'bold',
    color:'white',
    fontSize: 15,
    top:7,
    marginLeft: 60,
    top:160
  },
  livingIcon:{
    width:60,
    height:60,
    left:150,
    top:190,

  },
  describeL:{
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 60,
    top:200
  },
  describeL2:{
    fontWeight: 'bold',
    color:'white',
    fontSize: 15,
    top:7,
    marginLeft: 60,
    top:220
  },
  balconyIcon:{
    width:60,
    height:60,
    left:150,
    top:280,

  },
  describeBL:{
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 60,
    top:300
  },
  describeBL2:{
    fontWeight: 'bold',
    color:'white',
    fontSize: 15,
    top:7,
    marginLeft: 60,
    top:320
  },
  line3:{
    width:350,
    height:50,
    top:400,
    right:2
  },
  describeBLD:{
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 60,
    top:420
  },
  describeBLD2:{
    fontWeight: 'bold',
    color:'white',
    fontSize: 15,
    top:7,
    marginLeft: 60,
    top:450
  },

  where:{
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 35,
    top:550
  },
  mapGG:{
    flex: 1,
    width: '100%',
    paddingTop: 300, // Adjust as needed
    paddingHorizontal: 20, // Adjust as needed
    paddingBottom: 20, // Adjust as needed
  }
  



});
