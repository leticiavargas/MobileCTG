import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

import api from '../services/Api';

import {ButtonPrimary, ButtonText} from '../components/Buttons';
import {InputText} from '../components/Inputs';

class Signup extends React.Component{   

     
    static navigationOptions = {
        title: 'Novo Cadastro', 
       // headerLeft: <DrawerButton />
      };

    state={
        username:'',
        email:'',
        phone:'',
        passwd:'',
        ctg:'',
        isLoading:false,
        error:'',
        profile:[]
    };

    handleSignup = async () => {
        console.log("signup");
        
        if(this.state.username.length === 0 || this.state.passwd.length === 0){
            Alert.alert('Favor preencher login e senha');          
        } else {
            try{
                this.setState({isLoading: true, error:''});
                
                profile = this.state;
               
                console.log(profile);
                await api.post(`/signup`, profile);
                
                Alert.alert('Cadastro realizado com sucesso, realize o login');
                this.props.navigation.replace('Login');
             } catch (_err) {
                 Alert.alert('Houve um problema no cadastro, favor tentar novamente' );
             } finally {
                 this.setState({isLoading: false});
             }
         } 
    }; 

    render(){
        
        return (
            <View style={styles.container}>
                <InputText
                    placeholder="Nome Completo"
                    value={this.state.username}
                    onChangeText={username => this.setState({username})}
                />
                <InputText 
                    placeholder="E-mail"
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                />
                <InputText 
                    placeholder="Telefone"
                    value={this.state.phone}
                    onChangeText={phone => this.setState({phone})}
                />
                <InputText
                    placeholder="Senha"
                    secureTextEntry
                    value={this.state.passwd}
                    onChangeText={passwd => this.setState({passwd})}
                />
               <ButtonPrimary name="Cadastrar" onPress={this.handleSignup}></ButtonPrimary>
                {this.state.isLoading && <View style={styles.loading}></View>}
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

export default Signup;