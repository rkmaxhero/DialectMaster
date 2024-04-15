import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import CustomButton from './../atom/CustomButton';
import CustomTextInput from './../atom/CustomTextInput';

export default function LoginPage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar></StatusBar>
      <Text style={styles.title}>Dialect Master</Text>

      <Text style={styles.normalText}>Login</Text>
      <View style={styles.input}>
        <CustomTextInput label="Email"/>
        <CustomTextInput label="Password"/>
      </View>

      <View style={styles.centerAlign}> 
        <View style={styles.button}>
          <CustomButton text ="login" onPress={() => navigation.navigate('Dialect Master')}/>
        </View>
        <Text style={styles.normalText}>Don't have an account?</Text>
        <View style={styles.button}>
          <CustomButton text ="sign up" onPress={() => navigation.navigate('Signup')}/>
        </View>
        <View>
          <CustomButton text = "premium" onPress = {() => navigation.navigate('RegionSelectMap')}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

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
  },

  normalText: {
    fontSize: 25,
    textTransform: 'uppercase',
  },

  centerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});