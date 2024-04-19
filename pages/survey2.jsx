import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SurveyQuestionScreen = ({ navigation }) => {
  // Define the options
  const options = ['PROFESSIONAL', 'PERSONAL', 'TRAVELLING', 'PRACTICE'];

  // Handle selection
  const handleSelectOption = (option) => {
    navigation.navigate("ThankYouScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>what are you using this app for?</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.optionButton}
          onPress={() => handleSelectOption(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
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
  questionText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 40,
    color: 'black',
  },
  optionButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 30,
    marginBottom: 10,
    minWidth: '80%',
    // Shadow and other styling if necessary
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default SurveyQuestionScreen;
