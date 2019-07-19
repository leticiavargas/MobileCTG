import React from 'react';
import {View, Image, StyleSheet, Text, StatusBar, AsyncStorage, Alert} from 'react-native';
import api from '../services/api';

import {ButtonPrimary, ButtonText} from '../components/buttons';
import {InputText} from '../components/inputs';

class Login extends React.Component {
    
    static navigationOptions ={
        header: null
    }

    state={
        email:'',
        passwd:'',
        login:[],
        isLoading:false,
        error:''
    };

    //TODO Seria este componente realmente necessário?
   /* async componentDidMount(){
         const token = await getToken();
        if (token) {
            this.props.navigation.navigate('Feed');
        } 
    };*/

    handleUserChange=(email)=>{
        this.setState({email});
    };

    handlePasswdChange=(passwd)=>{
        this.setState({passwd});
    };
    
    handleCreateAccount=()=>{
        //console.log("Cadastrar novo");
        this.props.navigation.navigate('SignUp');
    };

    handleForgotPasswd=()=>{
        //console.log("esqueci senha");
        this.props.navigation.navigate('ForgotPwd');
    };

    handleLogin= async () => {
      console.log("chamou login");
          if(this.state.email.length === 0 || this.state.passwd.length === 0){
           Alert.alert('Favor preencher login e senha');          
        } else {            
            try{
                login = this.state;
               //this.setState({isLoading: true, error:''});
                 const response = await api.post(`/signin`, login);
              /* await AsyncStorage.setItem('@MyCTGApp:token', response.data.token); */
              if(response.status === 200){
                  this.props.navigation.replace('Feed');
              } else {
                   throw "erro de login";
              }
            } catch (_err) {
                Alert.alert('Houve um problema com o login, favor tente novamente mais tarde' );
            } finally {
                this.setState({isLoading: false});
            }
        } 
    };

    render() {
        return (
             <View style={styles.container}>
                  <Image></Image>
                  <InputText
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                  />
                  
                <InputText
                    placeholder="Senha"
                    secureTextEntry
                    value={this.state.passwd}
                    onChangeText={passwd => this.setState({passwd})}
                />
               <ButtonPrimary name="Entrar" onPress={this.handleLogin}></ButtonPrimary>
                {this.state.isLoading && <View style={styles.loading}></View>}
                <View style={styles.containerRow}>
                    <ButtonText name="Cadastre-se" onPress={this.handleCreateAccount}></ButtonText>
                    <ButtonText name="Esqueceu a senha?" onPress={this.handleForgotPasswd}></ButtonText>
                </View>
             </View> 

        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    },
    containerRow: {
        marginTop:10,
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between',
    },
      errorText:{
        fontSize:10,
        color:'#f00',
        marginTop:10,
      },
      loading:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#00008B',
        opacity: 0.5,
      },
});

export default Login;