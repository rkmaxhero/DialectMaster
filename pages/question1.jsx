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

export default function QuestionSet1({navigation}) {
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
            <Text style={styles.normalText}>What does "deadass" mean?</Text>
            <View style={styles.button}>
              <CorrectButton text='"Seriously"' onPress={() => setTimeout(handleClick, timeoutTime)} />
            </View>
            <View style={styles.button}>
              <WrongButton text="A dead donkey" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text="A lobster" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text="Dead booty" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <IDKButton text ="I don't know" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
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
            <Text style={styles.normalText}>What does "dat" mean?</Text>
            <View style={styles.button}>
              <WrongButton text ='"Stick"' onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ="A dot" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <CorrectButton text ='"That"' onPress={() => setTimeout(handleClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ='"Dead"' onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <IDKButton text ="I don't know" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
          </View>
        </SafeAreaView>
      )
    }
    else if (questionNum == 3) {
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar></StatusBar>
          <View style={styles.centerAlign}>
            <Text style={styles.normalText}>Question 3/7</Text>
            <Text style={styles.wordText}>Bang a uey</Text>
            <Text style={styles.normalText}>To make a U-Turn while driving</Text>
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
            <Text style={styles.normalText}>What does "frappe" mean in New England?</Text>
            <View style={styles.button}>
              <WrongButton text ='A Starbucks drink' onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <CorrectButton text ="A milkshake" onPress={() => setTimeout(handleClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ="A Greek drink" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ="A frappucino" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <IDKButton text ="I don't know" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
          </View>
        </SafeAreaView>
      )
    }
    else if (questionNum == 5) { // TODO
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar></StatusBar>
          <View style={styles.centerAlign}>
            <Text style={styles.normalText}>Question {questionNum}/7</Text>
            <Text style={styles.normalText}>What does "frappe" mean in New England?</Text>
            <View style={styles.button}>
              <WrongButton text ='A Starbucks drink' onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <CorrectButton text ="A milkshake" onPress={() => setTimeout(handleClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ="A Greek drink" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ="A frappucino" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <IDKButton text ="I don't know" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
          </View>
        </SafeAreaView>
      )
    }
    else if (questionNum == 6) { // TODO
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar></StatusBar>
          <View style={styles.centerAlign}>
            <Text style={styles.normalText}>Question {questionNum}/7</Text>
            <Text style={styles.normalText}>What does "frappe" mean in New England?</Text>
            <View style={styles.button}>
              <WrongButton text ='A Starbucks drink' onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <CorrectButton text ="A milkshake" onPress={() => setTimeout(handleClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ="A Greek drink" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ="A frappucino" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <IDKButton text ="I don't know" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
          </View>
        </SafeAreaView>
      )
    }
    else if (questionNum == 7) { // TODO
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar></StatusBar>
          <View style={styles.centerAlign}>
            <Text style={styles.normalText}>Question {questionNum}/7</Text>
            <Text style={styles.normalText}>What does "frappe" mean in New England?</Text>
            <View style={styles.button}>
              <WrongButton text ='A Starbucks drink' onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <CorrectButton text ="A milkshake" onPress={() => setTimeout(handleClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ="A Greek drink" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ="A frappucino" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
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
            <Text style={styles.normalText}>You learned or reviewed {numCorrect} terms!</Text>
            <Text style={styles.normalText}>What does "frappe" mean in New England?</Text>
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