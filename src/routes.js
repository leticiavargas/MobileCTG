import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {Image} from 'react-native';

import Login from './pages/login';
import Feed from './pages/feed';
import SignUp from './pages/signup';
import SeeMore from './pages/seemore';
import ForgotPwd from './pages/forgotpwd';


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