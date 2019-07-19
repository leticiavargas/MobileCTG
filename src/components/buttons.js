import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

import like from '../../assets/like.png';


export class ButtonPrimary extends React.Component{
    render(){
        const {name, style, ...otherProps } = this.props;

        return(
            <TouchableOpacity style={styles.PrimaryButton} {...otherProps}>
                <Text style={styles.PrimaryButtonText}> {name} </Text>
            </TouchableOpacity>
        );
    }
}

export class ButtonSecondary extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.SecondaryButton} {...otherProps}>
                <Text style={styles.SecondaryButtonText}> {name} </Text>
            </TouchableOpacity>
        );
    }
}
export class ButtonText extends React.Component{
    render(){
        const {name, style, ...otherProps } = this.props;
        return(
            <TouchableOpacity style={styles.TextButton} {...otherProps}>
                <Text style={styles.TextButtonText}> {name} </Text>
            </TouchableOpacity>
        );
    }
}
export class ButtonImage extends React.Component{
    render(){
        const {name, style, imageURI, ...otherProps } = this.props;
        return(
            <TouchableOpacity style={styles.TextButton} {...otherProps}>
                <Image source={like} />
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    PrimaryButton: {
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        height: 42,
        marginTop: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    PrimaryButtonText:{
            fontWeight: 'bold',
            fontSize: 14,
            color: '#FFF',
    },
    SecondaryButton: {
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        height: 42,
        marginTop: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    TextButton: {
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
      },
      TextButtonText:{
        fontSize: 11,
        color: '#333',
      },
});
