import React from 'react'
import { View, Text , SafeAreaView, ScrollView, ImageBackground,StyleSheet, Image} from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';


export default function LogIn() {

    const navigation = useNavigation();
    const handleBlogs=()=>{
        navigation.navigate('Home')
      }

  return (
    <SafeAreaView>
       
      <View>
        <TouchableOpacity onPress={handleBlogs} style={style.appButtonContainer}>
                <Text>Go to Home</Text>
        </TouchableOpacity>
       </View>
    </SafeAreaView>
  )
}


const style=StyleSheet.create({
    
      
    appButtonContainer: {
        elevation:8,
        backgroundColor:"#009688",
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:12
    },
    
    
})