import { Divider,Button,Snackbar } from '@react-native-material/core'
import React from 'react'
import { useState } from 'react'
import {View, FlatList,Text,StyleSheet } from 'react-native'

function ListViewComponent() {
    const [data,setData]=useState(['Mure',"Mau","Shoke","Jimmy"])
    return (
        <>
      
        <FlatList
            data={[  
                {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                {key: 'Python'},{key: 'Ajax'}, {key: 'C-+'},  
                {key: 'Ruby'},{key: 'Railsq'},{key: '.Net'},  
                {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                {key: 'Ajax'}, {key: 'C++'},{key: 'Rubyk'},  
                {key: 'Rails'},{key: '.Net1'},{key: 'Perl1'}  
            ]}  
            renderItem={( {item} ) => 
                    <View key={item.key} style={styles.container}>
                        <Text>{item.key}</Text>
                    <Button title='Add' variant="outlined"/>
                    <Button title='Cancel' color='pink'/>
                    <Divider />
                </View>
        } />
            <Snackbar message='Hello'/>
          </>
  )
}
const styles = StyleSheet.create( {
    container: {
        display: "flex",
        flexDirection:"column"
    }
})
export default ListViewComponent