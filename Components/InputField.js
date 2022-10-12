import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function InputField( { text } ) {
    const [customerName, setCustomerName] = useState( "Juju City Mall" );
    const [counter, setCunter] = useState( 0 );
    function handleClick() {
        setCustomerName( "Sammy Mureithi" )
        setCunter( prevValue => prevValue + 1 );
        console.log("Clicked")
    }
  
    return (
        <View >
            <Text onPress={handleClick} style={styles.Text1} >Hello Again {customerName} ,{text} points {counter}</Text>
            <Text  style={styles.green}>Am Green Color</Text>
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
    }
})

export default InputField