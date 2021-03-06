import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {Image} from 'react-native';

import Login from './pages/Login';
import Feed from './pages/Feed';
import SignUp from './pages/SignUp';
import SeeMore from './pages/SeeMore';
import ForgotPwd from './pages/ForgotPwd';


//import logo from '../assets/logo.png';
//headerTitle: <Image style={{marginHorizontal: 20}} source={logo}/>,

export default createAppContainer(
    createStackNavigator({
        Login,
        Feed,
        SignUp,
        SeeMore,
        ForgotPwd
    }, {
        
        defaultNavigationOptions: {
            headerTintColor: '#000',
            headerBackTitle: null,
        },
        mode: 'modal'
    })
);