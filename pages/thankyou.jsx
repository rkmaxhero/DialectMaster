import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ThankYouScreen = ({ onContinue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.thankYouText}>Thank you</Text>
      <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
        <Text style={styles.continueButtonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  thankYouText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  continueButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    // Shadow and other styling if necessary
  },
  continueButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ThankYouScreen;
