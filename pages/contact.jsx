import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

export default function ContactPage({navigation}) {
  return (
    <SafeAreaView style={styles.centerAlign}>
      <StatusBar></StatusBar>
      <Text style={styles.mainText}>Contact Us </Text>
      <View style={{marginTop: '7%'}}>
      <Text style={styles.subText}>Email: Dont_Contact@Me.com</Text>
      <Text style={styles.subText}>Phone: 911-911-9111</Text>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  mainText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 600,
    textTransform: 'uppercase',
  },

  subText:{
    fontSize: 18,
    color: 'black',
    fontWeight: 400,
  },
});