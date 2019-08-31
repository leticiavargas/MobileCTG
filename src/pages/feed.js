import React from 'react';
//import io from 'socket.io-client';

import api from '../services/Api'; 
import {View, Image, StyleSheet, TouchableOpacity, FlatList, Text} from 'react-native';
import {ButtonText, ButtonImage} from '../components/Buttons';

/* import camera from '../../assets/camera.png';
import more from '../../assets/more.png';
import like from '../../assets/like.png';
import comment from '../../assets/comment.png';
import send from '../../assets/send.png'; */

class Feed extends React.Component {
    
    static navigationOptions = ({ navigation }) => ({
        title: 'Lista de Notícias', 
        headerRight: (
            <TouchableOpacity style={{ marginHorizontal: 20 }} onPress={() => navigation.navigate('New')}>
                
            </TouchableOpacity>
        ),
    });

    state = {
        feed: [],
    };
      
        async componentDidMount(){
          //this.registerToSocket();  
          const response = await api.get('posts');
            console.log(response.data);
            this.setState({ feed: response.data});
       }

        /* registerToSocket =()=>{
           const socket = io('http://192.168.25.76:8080');
            socket.on('post', newPost=>{
            this.setState({feed:[newPost, ...this.state.feed]});
       }) 
   
        socket.on('like', likedPost => {
          this.setState({
             feed:this.state.feed.map(post=>
               post._id === likedPost._id ? likedPost : post)
          });
        })
      } */     

    render() {
       
        return (
             <View style={styles.container}>
                 <FlatList
                    data={this.state.feed}
                    keyExtractor={post => post._id}
                    renderItem={({ item }) => <FeedItem item={item} propsItem={this.props}/>  }
                /> 
             </View>
        )
    }
}

function FeedItem({item, propsItem}) {
    
    handleLike = (id) => {
        //console.log("curtiu", id);
        api.post(`/posts/${id}/like`);
    }
      
    handleSeeMore=(id)=> {
        console.log("ver mais...", id);
        propsItem.navigation.navigate('SeeMore', {id: id});
      } 

    return(
        <View style={styles.feedItem}>
            <View style={styles.textBox}>
                <Text numberOfLines={1} style={styles.title}>{item.titleNews}</Text>
                <View style={styles.feedHeader}>
                    <Text style={styles.infos}>{item.author} </Text>
                    <Text style={styles.infos}>{item.createdAt}</Text>
                </View>
                    <Text numberOfLines={2} style={styles.textNews}>{item.textNews}</Text>
                <View style={styles.feedFoot}>
                   <Text style={styles.infos}>Categoria</Text>
                </View>
                <View style={styles.feedActions}>
                    <ButtonImage onPress={()=>{this.handleLike(item._id)}}></ButtonImage>
                    <ButtonText name="Leia mais ..." onPress={()=>{this.handleSeeMore(item._id)}}></ButtonText>
                </View>
            </View>
            <Image style={styles.feedImage} source={require("../../assets/icon.png")} />
        </View>  
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    feedItem: {
        marginTop: 20,
        paddingHorizontal:10,
        flexDirection:'row',
        height: 120,
        justifyContent:'space-between',
    },
    feedHeader: {
        borderBottomColor:'#D3D3D3',
        borderBottomWidth:1,
        paddingHorizontal: 5,
        flexDirection: 'row',
    },
    feedFoot: {
        marginTop:5,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },    
    feedImage: {
        width: 100,
        height: '90%',
        alignSelf:'center',
    },
    feedActions:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginTop:5,
    },
    textBox:{
        flex:1,
        alignItems:'stretch',
        marginRight:10,
    },
    textNews:{
        marginTop:5,
        fontSize:12,
    },
    title:{
        fontWeight:'bold',
        color:'#000',
        fontSize:16,
    },
    infos:{
        color:'#696969',
        fontSize:11,
    },
});

export default Feed;