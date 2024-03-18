import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import CustomButton from './../atom/CustomButton';
import CustomTextInput from './../atom/CustomTextInput';

export default function Dashboard({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.centerAlign}>
        <Text style={styles.normalText}>What do you want to learn today?</Text>
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