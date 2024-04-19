import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import CustomButton from '../atom/CustomButton';
import CustomTextInput from '../atom/CustomTextInput';
import CorrectButton from '../atom/CorrectButton';
import React, { useState } from 'react';
import WrongButton from '../atom/WrongButton';
import IDKButton from '../atom/IDKButton';

export default function SouthernQuestions({navigation}) {
    const timeoutTime = 300;
    const [questionNum, setQuestionNum] = useState(1)
    const [numCorrect, setNumCorrect] = useState(0)
    function handleClick() {
      setNumCorrect(numCorrect + 1)
      setQuestionNum(questionNum + 1)
    }
    function handleWrongClick() {
      setQuestionNum(questionNum + 1)
    }
    function handleHome() {
      navigation.navigate('Home')
    }
    function handleNextSet() {
      navigation.navigate('Questions2')
    }

    if (questionNum == 1) {
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar></StatusBar>
          <View style={styles.centerAlign}>
            <Text style={styles.normalText}>Question 1/7</Text>
            <Text style={styles.normalText}>Cookout</Text>
            <Text style={styles.normalText}>A large outdoor party or gathering with food and music?</Text>
          </View>
        </SafeAreaView>
      );
    }
    else if (questionNum == 2) {
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar></StatusBar>
          <View style={styles.centerAlign}>
            <Text style={styles.normalText}>Question 2/7</Text>
            <Text style={styles.normalText}>Y'all</Text>
            <Text style={styles.normalText}>Short for "you all", refers to a group of people</Text>
          </View>
        </SafeAreaView>
      )
    }
    else if (questionNum == 5) {
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar></StatusBar>
          <View style={styles.centerAlign}>
            <Text style={styles.normalText}>Question 5/7</Text>
            <Text style={styles.wordText}>Right</Text>
            <Text style={styles.normalText}>Can be used in place of the words "very" or "extremely"</Text>
            <View style={styles.button}>
              <CorrectButton text ='Got it!' onPress={() => setTimeout(handleClick, timeoutTime)}/>
            </View>
          </View>
        </SafeAreaView>
      )
    }
    else if (questionNum == 4) {
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar></StatusBar>
          <View style={styles.centerAlign}>
            <Text style={styles.normalText}>Question {questionNum}/7</Text>
            <Text style={styles.normalText}>Crawfish</Text>
            <Text style={styles.normalText}>A small freshwater crustacean often served boiled or fried</Text>
          </View>
        </SafeAreaView>
      )
    }
    else if (questionNum == 3) {
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar></StatusBar>
          <View style={styles.centerAlign}>
            <Text style={styles.normalText}>Question {questionNum}/7</Text>
            <Text style={styles.normalText}>Soda</Text>
            <Text style={styles.normalText}>A sweetened carbonated beverage</Text>
            <View style={styles.button}>
              <WrongButton text ='Gridlock' onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <CorrectButton text ="Backup" onPress={() => setTimeout(handleClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ="Congestion" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ="Standstill" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <IDKButton text ="I don't know" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
          </View>
        </SafeAreaView>
      )
    }
    else if (questionNum == 6) {
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar></StatusBar>
          <View style={styles.centerAlign}>
            <Text style={styles.normalText}>Question 6/7</Text>
            <Text style={styles.wordText}>Sack</Text>
            <Text style={styles.normalText}>A paper bag used for carrying groceries</Text>
            <View style={styles.button}>
              <CorrectButton text ='Got it!' onPress={() => setTimeout(handleClick, timeoutTime)}/>
            </View>
          </View>
        </SafeAreaView>
      )
    }
    else if (questionNum == 7) {
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar></StatusBar>
          <View style={styles.centerAlign}>
            <Text style={styles.normalText}>Question {questionNum}/7</Text>
            <Text style={styles.normalText}>Woods</Text>
            <Text style={styles.normalText}>A large wooded area with dense vegetation</Text>
            <View style={styles.button}>
              <WrongButton text ='Bubble gum' onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ="Bubble bath" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ="A water filter system" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <CorrectButton text ="A water fountain" onPress={() => setTimeout(handleClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <IDKButton text ="I don't know" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
          </View>
        </SafeAreaView>
      )
    }
    else { // TODO: show statistics
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar></StatusBar>
          <View style={styles.centerAlign}>
            <Text style={styles.normalText}>You learned {numCorrect} terms!</Text>
            <View style={styles.button}>
              <CustomButton text ="Home" onPress={() => setTimeout(handleHome, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <CustomButton text ="Next Lesson!" onPress={() => setTimeout(handleNextSet, timeoutTime)}/>
            </View>
          </View>
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
      width: 300,
      height: 57,
      margin: '5%', 
    },
  
    title: {
      fontSize: 36,
      textTransform: 'uppercase',
    },

    wordText: {
      fontSize: 25,
      textTransform: 'uppercase',
      margin: '5%',
      fontWeight: 'bold',
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