import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import CustomDrawer from './CustomDrawer'
import Home from './Home.js'
import ContactUs from './ContactUs.js'
import Blog from './Blog.js'
import MapB from './MapB.js'
import LisbonBlog from './Lisbon'
import LogIn from './Log'
import Register from './Register'


const Drawer= createDrawerNavigator();


const AuthStack =()=>{
    return(
        <Drawer.Navigator drawerContent={props=><CustomDrawer{...props}/>} screenOptions={{headerShow:false}}  initialRoute='LogIn' >
          <Drawer.Screen name='LogOut' component={LogIn}/>
          <Drawer.Screen name='Home' component={Home}/>
          <Drawer.Screen name='Blog' component={Blog}/>
          <Drawer.Screen name='MapB' component={MapB}/>
          <Drawer.Screen name='Contact' component={ContactUs}/>
          <Drawer.Screen name='LisbonB' component={LisbonBlog}/>
          <Drawer.Screen name='Register' component={Register}/>
        </Drawer.Navigator>
    )
}

export default AuthStack;