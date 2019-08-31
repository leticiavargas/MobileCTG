import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import api from '../services/Api';
import { ScrollView } from 'react-native-gesture-handler';

class SeeMore extends React.Component{
    state = {
        news: '',
    };

    async componentDidMount(){
        const id = this.props.navigation.getParam('id', null);
        //console.log("id no see more", id);
        //this.registerToSocket();  
        const response = await api.get(`/posts/${id}/more`);
          console.log(response.data);
          this.setState({ news: response.data});
     }
    

    render(){
        const news = this.state.news;
        return (
            <View style={styles.container}>
                <Text style={styles.titleNews}>{news.titleNews}</Text>
                <View style={styles.infos}>
                    <Text style={styles.infosText}>{news.author}</Text>
                    <Text style={styles.infosText}>{news.createdAt}</Text>
                </View>
                <ScrollView>
                    <Image style={styles.feedImage} source={require("../../assets/icon.png")} />
                    <Text style={styles.textNews}>{news.textNews}</Text>
                </ScrollView>
            </View>
       );
    };
}


const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    titleNews:{
        fontSize:21,
        color:'#000',
        fontWeight:'bold',
        marginVertical:15,
        paddingHorizontal:15,
    },
    infos:{
        marginHorizontal:15,
        borderBottomWidth:1,
        borderBottomColor:'#D3D3D3'
    },
    infosText:{
        fontSize:12,
        color:'#696969',
       // paddingHorizontal:15,
    },
    feedImage:{
        maxWidth:'90%',
        height: 180,
        alignSelf:'center',
        marginVertical:20,
    },
    textNews:{
        width:'90%',
        textAlign:'justify',
        alignSelf:'center',
        fontSize:15,
        color:'#000',
        marginVertical:10,
        paddingHorizontal:15,
    },
});
export default SeeMore;