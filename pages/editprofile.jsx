import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

export default function EditProfilePage({navigation}) {
  return (
    <SafeAreaView style={styles.centerAlign}>
      <StatusBar></StatusBar>
        <Text style={styles.text}>Edit Profile</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }, 

    text: {
        fontSize: 24,
        color: 'black',
        fontWeight: 600,
        textTransform: 'uppercase',
    }
});