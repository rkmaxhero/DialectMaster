import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import MapView, { Polygon } from 'react-native-maps';

import CustomButton from './../atom/CustomButton';
import CustomTextInput from './../atom/CustomTextInput';

const regions = [
  { name: "Northeast", coordinates: [
      { latitude: 46.073230, longitude: -67.345626 },
      { latitude: 42.039048, longitude: -71.862772 }
    ], fillColor: 'rgba(0, 0, 255, 0.5)' },
  // Define other regions similarly
];

export default function Dashboard({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.centerAlign}>
        <Text style={styles.normalText}>What dialect do you want to learn today?</Text>
        <View style={styles.button}>
          <CustomButton text ="New England" onPress={() => navigation.navigate('Questions')}/>
        </View>
        <View style={styles.box}>
          <Text style={styles.normalText}>Continue learning</Text>
          <View style={styles.button}>
            <CustomButton text ="New England" onPress={() => navigation.navigate('Questions2')}/>
          </View>
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
    width: 180,
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
  },

  box: {
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    outline: 1 // need to get border for the "continue learning" box
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
});