import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SurveyPromptScreen = ({ navigation }) => {
  // Handle the OK action
  const handleOkay = () => {
    navigation.navigate("SurveyQuestionScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.promptText}>let's do a short survey</Text>
      <TouchableOpacity style={styles.okayButton} onPress={handleOkay}>
        <Text style={styles.okayButtonText}>OKAY</Text>
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
  promptText: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 30,
    // Adjust color, font family, etc. to match your app's design
  },
  okayButton: {
    backgroundColor: '#FFD700', // Yellow color for the button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    // Shadow and other styling if necessary
  },
  okayButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black', // Adjust text color as needed
    textAlign: 'center',
  },
});

export default SurveyPromptScreen;
