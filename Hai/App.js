import {DrawerItem, createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {View,Image,SafeAriaView, TouchableOpacity, StyleSheet} from 'react-native'
import Home from './Home';
import ContactUs from './ContactUs';
import Blog from './Blog';
import MapB from './MapB';
import Profile from './assets/profile.png'
import CustomDrawer1 from './CustomDrawer';
import AuthStack from './AppStack';
import LogIn from './Log';



const Drawer=createDrawerNavigator();

function App(){
  return(
    <View style={{flex:'1'}}>
      <NavigationContainer>
        
        <AuthStack/>
        
        
      
      {/* <Drawer.Navigator drawerContent={props=><CustomDrawer1{...props}/>} >
      
        <Drawer.Screen name='Contact' component={ContactUs}/>
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='Blog' component={Blog}/>
        <Drawer.Screen name='Map' component={MapB}/>
      </Drawer.Navigator> */}
    </NavigationContainer>
    
    </View>
  );
}

export default App;