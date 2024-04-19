import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ConfirmationScreen = ({ navigation }) => {
  // Handle the completion action
  const handleDone = () => {
    navigation.navigate('SurveyPromptScreen');
    // Or navigation to specific screen if needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>DIALECT MASTER</Text>
      <Text style={styles.confirmationText}>Confirmation email sent!</Text>
      <Text style={styles.instructionText}>Please check your inbox</Text>
      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.doneButtonText}>DONE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  mainText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  confirmationText: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 5,
  },
  instructionText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  doneButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    marginBottom: 10,
  },
  doneButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ConfirmationScreen;
