import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import InputField from './Components/InputField';
import ListViewComponent from './Components/ListView';
import ScrollViewComponent1 from './Components/ScrollView';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     {/*  <Text>Sammy You can Do this</Text>
      <StatusBar style="auto" />
      <InputField text={"Happy Customer Day"} />
      <ScrollViewComponent1 />
      <InputField text={"Happy Customer Day"} /> */}
      <ListViewComponent />
      <Text>Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
