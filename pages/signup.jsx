import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import CustomButton from './atom/CustomButton';
import CustomTextInput from './atom/CustomTextInput';

export default function home() {
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
          <CustomButton text ="sign up"/>
        </View>
        <Text>Already have an account?</Text>
        <View style={styles.button}>
          <CustomButton text ="login"/>
        </View>
      </View>
    </SafeAreaView>
  );
}