import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';

import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const CardGuest = ({title, description, image,page }) => {
  
    const navigation = useNavigation();
    const handleBlogs=()=>{
        navigation.navigate(page)
      }
    return(
        
        <Card style={Styles.container}>
        <Card.Content>
            <Title style={Styles.title}>{title}</Title>
        </Card.Content>
        <Card.Cover source={image} />
       <Card.Content>
        <Paragraph style={Styles.description}>{description}</Paragraph>
        </Card.Content>
        <Card.Actions>
            <TouchableOpacity style={Styles.appButtonContainer} onPress={handleBlogs}>
                <Text>Check the Blog</Text>
            </TouchableOpacity>
        </Card.Actions>
      </Card>
      
         
    );
  
};

// // const styles = StyleSheet.create({
// //   card: {
// //     backgroundColor: 'white',
// //     borderRadius: 8,
// //     padding: 16,
// //     margin: 8,
// //     shadowColor: '#000',
// //     shadowOffset: {
// //       width: 0,
// //       height: 2,
// //     },
// //     shadowOpacity: 0.25,
// //     shadowRadius: 4,
// //     elevation: 5,
// //   },
// //   title: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 8,
// //   },
// //   description: {
// //     fontSize: 14,
// //     color: '#888',
// //   },
// });
const Styles = StyleSheet.create({
    container :{
        alignContent:'center',
        margin:37,
        alignItems:'center'

    },
    description: {
            fontSize: 14,
            color: '#241531',
            fontWeight: 'bold',
            
    },
    title: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 8,
            justifyContent:'center',
            alignContent:'center'
            
    },
    appButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#009688",
        height:60,
        width:190,
        borderRadius: 10,
      },
})

export default CardGuest;