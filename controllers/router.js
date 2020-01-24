import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreens from '../screens/onboarding/splashscreen';
import Onboarding from '../screens/onboarding/onboarding';
import Onboardingb from '../screens/onboarding/onboardingb';
import Onboardingc from '../screens/onboarding/onboardingc';
import Landing from '../screens/onboarding/landing';
import Signup from '../screens/auth/signup';
import Verify from '../screens/auth/verify';
import Account from '../screens/auth/account';
import CompleteProfile from '../screens/onboarding/completeprofile'
import Bvn from '../screens/onboarding/bvn'
import Employment from '../screens/onboarding/employment'
import Upload from '../screens/onboarding/upload'
import Addcard from '../screens/onboarding/addcard'
import Success from '../screens/onboarding/success'
import Login from '../screens/auth/login'
import Pin from '../screens/auth/pin'
import Dashboard from '../screens/home/dashboard'




 const Router = createStackNavigator({

    // SplashScreens: { screen: SplashScreens }, 
   //  Onboarding: { screen: Onboarding }, 
   //  Onboardingb: { screen: Onboardingb }, 
   //  Onboardingc: { screen: Onboardingc }, 
   //  Landing: { screen: Landing }, 
   //  Signup: { screen: Signup }, 
   //  Verify: { screen: Verify }, 

   //  Account: { screen: Account },
   //  CompleteProfile: { screen: CompleteProfile }, 
   //  Bvn: { screen: Bvn }, 
   // Employment: { screen: Employment }, 
   // Upload: { screen: Upload }, 
   // Addcard: { screen: Addcard },
   // Success: { screen: Success }, 
   //  Login: { screen: Login }, 
   //  Pin: { screen: Pin },

    Dashboard: { screen: Dashboard }, 




    



     
 },{
   
    headerMode: 'none',
    swipeEnabled: true,
    navigationOptions:{
      gesturesEnabled: true,
      swipeEnabled: false,
      headerVisible: false,
      
    },
     defaultNavigationOptions: {
      gesturesEnabled: false,
    },
 });


export default createAppContainer(Router);