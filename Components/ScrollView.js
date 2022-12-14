import React from 'react'
import { AppRegistry, ScrollView, View, Image, Text, Button, StyleSheet } from 'react-native';  
  
function ScrollViewComponent1() {
    return (
        <ScrollView horizontal={true} style={styles.container}>
            <Text style={{fontSize:22, padding: 10}}>Horizontal ScrollView</Text>  
                <View style={[{ width: 220,height: 70,padding: 10 }]}>  
                    <Button  
                      
                        title="Button 1"  
                        color="#FF3D00"  
                    />  
                </View>  
                <Text style={{fontSize:22, padding: 10}}>javatpoint</Text>  
                <View style={[{ width: 220,height: 70,padding: 10 }]}>  
                    <Button  
                       
                        title="Button 2"  
                        color="#3D00FF"  
                    />  
                </View>  
                <Text style={{fontSize:22, padding: 10}}>React Native ScrollView Example</Text>  
                <View style={[{ width: 220,height: 70,padding: 10 }]}>  
                    <Button  
                       
                        title="Button 3"  
                        color="#FFFF3D"  
                    />  
                </View>  
                <Text style={{fontSize:22, padding: 10}}>If you like</Text>  
                <View style={[{ width: 220,height: 70,padding: 10 }]}>  
                    <Button  
                        title="Button 4"  
                        color="#FF3DFF"  
                    />  
                </View>  
                <Text style={{fontSize:22, padding: 10}}>Scrolling horizontal</Text>  
                <View style={[{ width: 220,height: 70,padding: 10 }]}>  
                    <Button    
                        title="Button 5"  
                        color="#3DFF00"  
                    />  
                </View>  
      </ScrollView>
  )
}
const styles = StyleSheet.create( {
    container: {
        flex:1,
        height:"10%"
    }
} )

export default ScrollViewComponent1