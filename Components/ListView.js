
import React from 'react'
import { useState } from 'react'
import {View,Button, FlatList,Text,StyleSheet } from 'react-native'

function ListViewComponent() {
    const [data,setData]=useState(['Mure',"Mau","Shoke","Jimmy"])
    return (
        <FlatList
            data={[  
                {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                {key: 'Python'},{key: 'Ajax'}, {key: 'C-+'},  
                {key: 'Ruby'},{key: 'Railsq'},{key: '.Net'},  
                {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                {key: 'Ajax'}, {key: 'C++'},{key: 'Rubyk'},  
                {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
            ]}  
            renderItem={( {item} ) => 
                    <View key={item.key} style={styles.container}>
                        <Text>{item.key}</Text>
                    <Button title='Add' />
                    <Button title='Cancel'/>
                </View>
        }/>
  )
}
const styles = StyleSheet.create( {
    container: {
        display: "flex",
        flexDirection:"column"
    }
})
export default ListViewComponent