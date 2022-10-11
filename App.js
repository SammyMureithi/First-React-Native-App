import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputField from './Components/InputField';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sammy You can Do this</Text>
      <StatusBar style="auto" />
      <InputField text={"Happy Customer Day"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
