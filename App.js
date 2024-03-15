import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import CustomButton from './atom/CustomButton';
import CustomTextInput from './atom/CustomTextInput';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar></StatusBar>
      <Text style={styles.title}>Dialect Master</Text>

      <View style={styles.input}>
        <CustomTextInput label="Email"/>
        <CustomTextInput label="Password"/>
      </View>

      <View> 
        <View style={styles.button}>
          <CustomButton text ="login"/>
        </View>
        <View style={styles.button}>
          <CustomButton text ="sign up"/>
        </View>
      </View>
    </SafeAreaView>
  );
}

/*
DOCUMENTATION FORMAT: 

"FunctionName"

Props:
    myProp= num / "string" / {object}
        myPropDescription

Notes:
    This is a useful note for my file / component / atom / etc
*/

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    justifyContent: 'space-around'
  },

  input: {
    width: '90%',
    display: 'flex',
    alignItems: 'center',
  },

  button: {
    width: 174,
    height: 57,
    margin: '2%', 
  },

  title: {
    fontSize: 36,
    textTransform: 'uppercase',
  }
});
