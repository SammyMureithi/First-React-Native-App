import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

function InputField( { text } ) {
    const [customerName, setCustomerName] = useState( "Juju City Mall" );
    const [counter, setCunter] = useState( 0 );
    function handleClick() {
        setCustomerName( "Sammy Mureithi" )
        setCunter( prevValue => prevValue + 1 );
        console.log("Clicked")
    }
    function handleAlert() {
        Alert.alert( "Are you sure?" );
    }
    return (
        <View >
            <Text onPress={handleClick} style={styles.Text1} >Hello Again {customerName} ,{text} points {counter}</Text>
            <Text style={styles.green}>Am Green Color</Text>
            <View style={styles.view}>
                <Text>Am Green Color</Text>
                <Button title="Click"  />
                <Button title='Ok' onPress={handleAlert} style={styles.button}/>
            </View> 
      </View>
      
    )
    
}
const styles = StyleSheet.create( {
    Text1: {
        color: 'red',  
        fontWeight: 'bold',  
        fontSize: 30, 
    },
    green: {
        color: "green",
        textAlign: "center",
        marginTop:20
    },
    view: {
        width: 100,
        height:200,
        backgroundColor:"Pink",
        color:"Red"
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        
        padding:10,
    }
})

export default InputField