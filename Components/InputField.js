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
        <>
            <Text onPress={handleClick}>Hello Again {customerName} ,{text} points { counter}</Text>
 
      </>
      
  )
}

export default InputField