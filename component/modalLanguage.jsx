import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

import CustomButton from '../atom/CustomButton';

export default function CustomLangModal({ modalVisible, setModalVisible, }) {
  return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
        >
            <View style={styles.centerAlign}>
                <View style={styles.modalView}>

                <View style={styles.button2}>
                <CustomButton
                text='English'
                onPress={() => setModalVisible(false)}
                />
                </View>
                

                <View style={styles.button2}>
                <CustomButton
                text='British English'
                onPress={() => setModalVisible(false)}
                />
                </View>

                <View style={styles.button2}>
                <CustomButton 
                    text='Close'
                  onPress={() => setModalVisible(false)}
                />
                </View>
                
                </View>
            </View>
        </Modal>
    
  );
}

const styles = StyleSheet.create({
    centerAlign: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1, 
      },


      button2: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingHorizontal: 30,
        margin: 5,
      },

      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

        justifyContent: 'space-around',

      },

      textInput:{
        backgroundColor: '#FFF',
        width: '100%',
        height: 57,
        borderRadius: 24, 
        padding: 20,
        fontSize: 18
      },
});