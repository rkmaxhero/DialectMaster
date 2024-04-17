import { StatusBar } from 'expo-status-bar';
import Ract, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from '../atom/CustomButton';

import CustomModal from '../component/modal';

import CustomLangModal from '../component/modalLanguage';

export default function EditProfilePage({navigation, route}) {
const [modalVisible, setModalVisible] = useState(false);

const [langModal, setLangModal] = useState(false);

const [inputText, setInputText] = useState('DANIAL JAMES LEUNG');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar></StatusBar>

      {/*<View style={styles.centerAlign}>
        <Text style={styles.text}>UPLOAD NEW PHOTO</Text>
        <TouchableOpacity>
        <Ionicons name="cloud-upload-outline" size={130} color="black" />
  </TouchableOpacity>
        <Text style={styles.text}>{inputText}</Text>
      </View>
      */}

      <Text style={styles.text}>{inputText}</Text>

      <View style={styles.centerAlign}>
      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} setInputText={setInputText}/>
      </View>

      <View>
        <CustomLangModal modalVisible={langModal} setModalVisible={setLangModal} />
      </View>

      <View style={styles.button}>
        <CustomButton 
          text='change name'
          onPress={() => setModalVisible(true)}
        />
      </View>

      <View style={styles.button}>
        <CustomButton 
          text='change language'
          onPress={() => setLangModal(true)}
        />
      </View>

      <View style={styles.button}>
        <CustomButton 
          text='get premium'
        />
      </View>

      <View style={styles.button}>
        <CustomButton 
          text='done'
          onPress={() => {
            if (route.params?.onGoBack) {
              route.params.onGoBack(inputText);
            }
            navigation.navigate('Settings');
          }}
        />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
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

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});