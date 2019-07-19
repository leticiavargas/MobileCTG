import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ForgotPwd extends React.Component{   

     
    static navigationOptions = {
        title: 'Esqueceu a senha? ', 
       // headerLeft: <DrawerButton />
      };

   
    render(){
        
        return (
            <View style={styles.container}>
                <Text> Que pena ... </Text>
             </View> 

        );
    };
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:20,
    },
});

export default ForgotPwd;