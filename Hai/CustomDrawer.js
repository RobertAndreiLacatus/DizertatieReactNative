import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import Back from './assets/back.png'
import Profile from './assets/profile.png'
import { Image } from 'react-native';

const CustomDrawer = ({navigation,props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView
      {...props}
      contentContainerStyle={{backgroundColor:'#8200d6'}}
      >
        <ImageBackground source={Back}
        style={{height:'100%',width:'100%'}}/>
        <Image source={Profile}
        style={{height:80, width:80,resizeMode:'center' ,borderRadius:40,marginBottom:30, marginTop:10, position:'absolute', top:50, left:10}}/>
        <Text style={{flex:1,position:'absolute',top:80, left:100, color:'#fff'}}>Welcome to my APP</Text>
      <View style={styles.menuItems}>
        <Text style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
          Home
        </Text>
        <Text style={styles.menuItem} onPress={() => navigation.navigate('Blog')}>
          Blog
        </Text>
        <Text style={styles.menuItem} onPress={() => navigation.navigate('MapB')}>
          MapB
        </Text>
        <Text style={styles.menuItem} onPress={() => navigation.navigate('Contact')}>
          Contact Us
        </Text>
        <Text style={styles.menuItem} onPress={() => navigation.navigate('LogOut')}>
          LogOut
        </Text>
       
      </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#8200d6',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItems: {
    
    marginTop: 20,
  },
  menuItem: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CustomDrawer;
