import {DrawerItem, createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {View,Image,SafeAriaView, TouchableOpacity, StyleSheet} from 'react-native'
import MainPage from './MainPage';
import AuthStack from './AppStack';



// const Drawer=createDrawerNavigator();

function App(){
  return(
    <View style={{flex:'1'}}>
      <NavigationContainer>
        
        
        <AuthStack/>
   
    </NavigationContainer>
    
    </View>
  );
}

export default App;