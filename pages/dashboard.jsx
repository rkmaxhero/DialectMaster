import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';

import CustomButton from './../atom/CustomButton';
import CustomTextInput from './../atom/CustomTextInput';

export default function Dashboard({navigation}) {
  const [loading, setLoading] = useState(false);
  const [completionPercent, setCompletionPercent] = useState(39);
  function handleClick(page) {
    setLoading(true);
    setTimeout(() => navigation.navigate(page), 2000);
    setTimeout(() => setLoading(false), 2000);
  }

  if (!loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar></StatusBar>
        <View style={styles.centerAlign}>
          <Text style={styles.normalText}>What dialect do you want to learn today?</Text>
          <View style={styles.button}>
            <CustomButton text ="New England" onPress={() => handleClick('Questions')}/>
          </View>
          <View style={styles.box}>
            <Text style={styles.normalText}>Continue learning</Text>
            <View style={styles.button}>
              <CustomButton text ="New England" onPress={() => handleClick('Questions2')}/>
            </View>
            <Text style={styles.normalText}>{completionPercent}%</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  else {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.normalText}>Loading...</Text>
      </SafeAreaView>
    )
  }
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