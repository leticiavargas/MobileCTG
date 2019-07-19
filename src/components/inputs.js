import React from  'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

export class InputText extends React.Component {
   render(){
    const {label, style, labelStyle, ...inputProps} = this.props;
    return(
        <View style={[styles.container, style]}>
            {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
            <TextInput
                style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                placeholderTextColor="#999"
                {...inputProps}
            />
        </View>
    );
   };
};

const styles = StyleSheet.create({
    container:{
        alignSelf:'stretch',
    },
    label:{
        fontSize: 12,
        color: '#696969',
    },
    input: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        color:'#696969',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
        marginHorizontal:20,
        fontSize: 14,
        alignSelf: 'stretch'
      },
})