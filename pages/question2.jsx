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

export default function QuestionSet2({navigation}) {
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
            <Text style={styles.normalText}>What does "Bang a uey" mean?</Text>
            <View style={styles.button}>
              <WrongButton text='Slam a door' onPress={() => setTimeout(handleWrongClick, timeoutTime)} />
            </View>
            <View style={styles.button}>
              <CorrectButton text="Make a u-turn" onPress={() => setTimeout(handleClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text="Cook a quick meal" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text="Jump a hurdle" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
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
            <Text style={styles.normalText}>What's a New England term for a milkshake typically made with ice cream, milk, and flavored syrup, often served thick and creamy?</Text>
            <View style={styles.button}>
              <WrongButton text ='"Milkshake"' onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ="Smoothie" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <CorrectButton text ='Frappe' onPress={() => setTimeout(handleClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ='Frosty' onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <IDKButton text ="I don't know" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
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
            <Text style={styles.wordText}>Cottage</Text>
            <Text style={styles.normalText}>A small vacation home by the sea</Text>
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
            <Text style={styles.normalText}>How might someone in certain dialects, particularly in urban areas, express "that" informally or casually?</Text>
            <View style={styles.button}>
              <WrongButton text ='This' onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <CorrectButton text ="Dat" onPress={() => setTimeout(handleClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ="Those" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
            </View>
            <View style={styles.button}>
              <WrongButton text ="Dem" onPress={() => setTimeout(handleWrongClick, timeoutTime)}/>
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
            <Text style={styles.normalText}>Question {questionNum}/7</Text>
            <Text style={styles.normalText}>What's a common New England term for a traffic jam on the highway?</Text>
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
            <Text style={styles.wordText}>Brook</Text>
            <Text style={styles.normalText}>A small stream or river</Text>
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
            <Text style={styles.normalText}>What does bubbler mean?</Text>
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