import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import CustomButton from './atom/CustomButton';
import CustomTextInput from './atom/CustomTextInput';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import Dashboard from './pages/dashboard';
import MapPage from './pages/map';
import SettingsPage from './pages/settings';
import ContactPage from './pages/contact';
import EditProfilePage from './pages/editprofile';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuestionSet1 from './pages/question1';
import QuestionSet2 from './pages/question2';
import Question3 from './pages/question3';
import SouthernQuestions from './pages/southernQuestions';
import SearchScreen from './pages/SearchScreen';
import PremiumFeaturesScreen from './pages/PremiumFeaturesScreen';
import SelectedRegionScreen from './pages/SelectedRegionScreen';
import RegionSelectMap from './pages/RegionSelectMap';
import ConfirmationScreen from './pages/cnfrm';
import SurveyPromptScreen from './pages/survey1';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Map"
          component={MapPage}
        /> */}
        <Stack.Screen
          name="Login"
          component={LoginPage}
        />
        <Stack.Screen
          name = "RegionSelectMap"
          component = {RegionSelectMap}
        />
        
        <Stack.Screen 
          name="Signup" 
          component={SignupPage} 
        />
        <Stack.Screen
          name="Home"
          component={Dashboard}
        />
        <Stack.Screen 
          name="Questions"
          component={QuestionSet1}
        />
        <Stack.Screen 
          name="Questions2"
          component={QuestionSet2}
        />
        <Stack.Screen 
          name="South"
          component={SouthernQuestions}
        />
        <Stack.Screen
          name = "SearchScreen"
          component = {SearchScreen}
        />
        <Stack.Screen
          name = "PremiumFeaturesScreen"
          component = {PremiumFeaturesScreen}
        />
        <Stack.Screen
          name = "SelectedRegionScreen"
          component = {SelectedRegionScreen}
        />
        <Stack.Screen
          name = "RegionSelectMap"
          component = {RegionSelectMap}
        />
        
        <Stack.Screen
          name="Settings"
          component={SettingsPage}
        />
        <Stack.Screen
          name="Edit Profile"
          component={EditProfilePage}
        />
        <Stack.Screen
          name="Contact"
          component={ContactPage}
        />
        <Stack.Screen
          name="ConfirmationScreen"
          component={ConfirmationScreen}
        />
        <Stack.Screen
          name = "SurveyPromptScreen"
          component={SurveyPromptScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={styles.container}>
    //   <StatusBar></StatusBar>
    //   <Text style={styles.title}>Dialect Master</Text>

    //   <View style={styles.input}>
    //     <CustomTextInput label="Email"/>
    //     <CustomTextInput label="Password"/>
    //   </View>

    //   <View> 
    //     <View style={styles.button}>
    //       <CustomButton text ="login"/>
    //     </View>
    //     <View style={styles.button}>
    //       <CustomButton text ="sign up"/>
    //     </View>
    //   </View>
    // </SafeAreaView>
  );
}


/*
DOCUMENTATION FORMAT: 

"FunctionName"

Props:
    myProp= num / "string" / {object}
        myPropDescription

Notes:
    This is a useful note for my file / component / atom / etc
*/

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
    width: 174,
    height: 57,
    margin: '2%', 
  },

  title: {
    fontSize: 36,
    textTransform: 'uppercase',
  }
});
