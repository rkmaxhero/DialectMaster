import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import ProgressBar from '../component/progressBar';

export default function MapPage({navigation}) {
  return (
    <SafeAreaView style={styles.centerAlign}>
      <StatusBar></StatusBar>
      Map image here
      <ProgressBar region='southwest' percent='10' ></ProgressBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
});