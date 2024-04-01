import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PremiumFeaturesScreen = () => {
  // State for the countdown timer
  const [timer, setTimer] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    // Update the timer every second
    const interval = setInterval(() => {
      setTimer((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Clear interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Format the timer into minutes and seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Handle the purchase action
  const handlePurchase = () => {
    // Integrate with the payment API or navigate to payment screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WANT A BREAK FROM THE ADS?</Text>
      <Text style={styles.subtitle}>
        WITH DIALECT MASTER PREMIUM YOU CAN...
      </Text>
      <TouchableOpacity style={styles.featureButton}>
        <Text style={styles.featureText}>Remove any advertisements!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.featureButton}>
        <Text style={styles.featureText}>
          Get access to our exclusive ChatBot
        </Text>
      </TouchableOpacity>
      <Text style={styles.priceText}>for just $29.99 a month!</Text>
      <Text style={styles.timerText}>
        offer expires in {formatTime(timer)}
      </Text>
      <TouchableOpacity style={styles.purchaseButton} onPress={handlePurchase}>
        <Text style={styles.purchaseButtonText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  featureButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timerText: {
    fontSize: 20,
    marginBottom: 20,
  },
  purchaseButton: {
    // Style for the arrow button
  },
  purchaseButtonText: {
    // Style for the text inside the button
  },
});

export default PremiumFeaturesScreen;
