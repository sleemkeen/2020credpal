import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {SvgXml} from 'react-native-svg';
import {NavSvg} from './svg/nav'; 
import Card from '../screens/home/card'
import Transaction from '../screens/home/transaction'
import Dashboard from '../screens/home/dashboard';
import Repayment from '../screens/home/repayment';
import Notifications from '../screens/home/notification';





const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = Ionicons;
    let iconName;
    if (routeName === "Dashboard") {
        iconName = NavSvg.bhome;
    } else if (routeName === "Card") {
        iconName = NavSvg.bcard;
    } else if (routeName === "Repayment") {
        iconName = NavSvg.brepayment;
    } else if (routeName === "Transaction") {
        iconName = NavSvg.btransaction;
    } else{
        iconName = NavSvg.bnotification;
    }
    return <SvgXml width="25" height="25" xml={iconName} />;
};

const BottomTabNavigator = createBottomTabNavigator(
    {
  
        Dashboard: { screen: Dashboard }, 
        Card: Card,
        Transaction: { screen: Transaction }, 
        Repayment: {screen: Repayment},
        Notifications: {screen: Notifications},


    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor)
        }),
        tabBarOptions: {
            activeTintColor: "#0058D9",
            inactiveTintColor: "gray",
            showLabel: false,
            style:{height:70}
        }
    }
);

export default BottomTabNavigator;