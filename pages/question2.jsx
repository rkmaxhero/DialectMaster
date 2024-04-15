import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import CustomButton from '../atom/CustomButton';
import CustomTextInput from '../atom/CustomTextInput';

export default function QuestionSet2({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar></StatusBar>
        <View style={styles.centerAlign}>
          <Text style={styles.normalText}>Question 2/7</Text>
          <Text style={styles.normalText}>What does "dat" mean?</Text>
          <View style={styles.button}>
            <CustomButton text ='"Stick"'/>
          </View>
          <View style={styles.button}>
            <CustomButton text ="A dot"/>
          </View>
          <View style={styles.button}>
            <CustomButton text ='"That"'/>
          </View>
          <View style={styles.button}>
            <CustomButton text ='"Dead"'/>
          </View>
          <View style={styles.idkbutton}>
            <CustomButton text ="I don't know" onPress={() => navigation.navigate('Question3')}/>
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
      width: 300,
      height: 57,
      margin: '5%', 
    },

    idkbutton: {
      width: 300,
      height: 57,
      margin: '5%', 
      backgroundColor: '#f44336',
    },
  
    title: {
      fontSize: 36,
      textTransform: 'uppercase',
    },
  
    normalText: {
      fontSize: 25,
      textTransform: 'uppercase',
      margin: '5%'
    },
  
    centerAlign: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });