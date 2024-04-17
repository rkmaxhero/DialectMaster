import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';


export default function CustomModal({ modalVisible, setModalVisible, setInputText }) {
    const [name, setName] = useState("");
    const handleSave = () => {
        setInputText(name); // Update the inputText state in EditProfilePage
        setModalVisible(false);
      };

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
                
                <TextInput style={styles.textInput}
                    placeholder="Enter new name"
                    onChangeText={setName}
                    value={name}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSave}
                >
                    <Text>Save</Text>
                </TouchableOpacity>
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

      button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        padding: 10,
        paddingHorizontal: 30,
        marginTop: 10,
        backgroundColor: '#EEE462'
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

      textInput:{
        backgroundColor: 'lightgrey',
        width: '100%',
        height: 57,
        borderRadius: 24, 
        padding: 20,
        fontSize: 18
      },
});