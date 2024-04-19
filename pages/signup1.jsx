import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import CustomTextInput from '../atom/CustomTextInput';

export default function SignUp1({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar></StatusBar>
      <Text style={styles.text}>DIALECT MASTER</Text>
      <CustomTextInput label="Type in Email to start"/>

        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("ConfirmationScreen")}>
            <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  centerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: '#EEE462',
    borderRadius: 24,
    padding: 10,
  },

});