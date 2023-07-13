import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Home.js'
import ContactUs from './ContactUs.js'
import Blog from './Blog.js'
import LogIn from './Log'
import Register from './Register.js'
import FirstPageHost from './Host/FirstPageH.js'
import FirstPageG from './Guest/FirstPageG.js'
import TemplateH from './Host/TemplatePage.js'





const Drawer= createDrawerNavigator();


const AuthStack =()=>{
    return(
        <Drawer.Navigator screenOptions={{headerShow:false}}  initialRoute='/' >
          <Drawer.Screen name='LogOut' component={LogIn}/>
          <Drawer.Screen name='Home' component={Home}/>
          <Drawer.Screen name='Blog' component={Blog}/>
          <Drawer.Screen name='Contact' component={ContactUs}/>
          <Drawer.Screen name='Register' component={Register}/>
          <Drawer.Screen name='FirstHost' component={FirstPageHost}/>
          <Drawer.Screen name='FirstGuest' component={FirstPageG}/>
          <Drawer.Screen name='TemplateH' component={TemplateH}/>
          
          
        </Drawer.Navigator>
    )
}

export default AuthStack;