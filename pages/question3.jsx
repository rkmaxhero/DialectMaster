// spare questions page in case we need another one

import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import CustomButton from '../atom/CustomButton';
import CustomTextInput from '../atom/CustomTextInput';

export default function Question3({navigation}) {
    var questionnum = 3;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar></StatusBar>
        <View style={styles.centerAlign}>
          <Text style={styles.normalText}>Question {questionnum}/7</Text>
          <Text style={styles.normalText}>What does "deadass" mean?</Text>
          <View style={styles.button}>
            <CustomButton text ='"Seriously"'/>
          </View>
          <View style={styles.button}>
            <CustomButton text ="A dead donkey"/>
          </View>
          <View style={styles.button}>
            <CustomButton text ="A lobster"/>
          </View>
          <View style={styles.button}>
            <CustomButton text ="Dead booty"/>
          </View>
          <View style={styles.idkbutton}>
            <CustomButton text ="I don't know"/>
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