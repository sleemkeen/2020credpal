import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import BottomTabNavigator from "./bottom-tab-navigator";
import SideMenu from './sideMenu'




const DrawerRouter = createDrawerNavigator({
    
    TabNavigator: {screen: BottomTabNavigator},
  
    

},{ 
    
    contentComponent:SideMenu,
    drawerPosition: 'right',
    drawerWidth:'75%'


},
);

export default createAppContainer(DrawerRouter);