import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from '../atom/CustomButton';

export default function SettingsPage({navigation, route}) {
  const [name, setName ] = useState('DANIEL JAMES LEUNG');
  return (
    <SafeAreaView style={styles.centerAlign}>
      <StatusBar></StatusBar>
      <Ionicons name="person" size={150} color="black" />
      <Text style={styles.text}>{name}</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Edit Profile', {
          onGoBack: (data) => {
            setName(data)
          },
        })}
      >
        <Text style={styles.editprofile}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={styles.button}>
        <CustomButton 
          text='contact us'
          onPress={() => navigation.navigate('Contact')}
        />
      </View>

      <View style={styles.button}>
        <CustomButton 
          text='FAQ'
          onPress={() => navigation.navigate('Contact')}
        />
      </View>

      <View style={styles.button}>
        <CustomButton 
          text='Log Out'
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    justifyContent: 'space-around',
  },

  text: {
    fontSize: 24,
    color: 'black',
    fontWeight: 600,
    textTransform: 'uppercase',
  },

  editprofile:{
    fontSize: 18,
    color: '#00A3FF',
    fontWeight: 600,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    width: '85%',
  },
});