import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import CustomButton from '../atom/CustomButton';

const RegionSelectMap = ({navigation}) => {
  const [selectedRegion] = useState('Select Region');

  return (
    <View style={styles.container}>
      {/* Header with menu and search */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.title}>DIALECT MASTER</Text>
        <TouchableOpacity style={styles.searchButton}>
          <CustomButton text = '🔍' onPress = {() => navigation.navigate('SearchScreen')} style={styles.searchText}/>
          {/* <Text style={styles.searchText} onPress = {() => navigation.navigate('PremiumFeaturesScreen')}>🔍</Text> */}
        </TouchableOpacity>
      </View>

      {/* Placeholder for map */}
      <View style={styles.mapContainer}>
        {/* Map Image */}
        <Image source={require('../component/map.jpg')} style={styles.mapImage} />
        
        {/* Overlay Touchable Regions */}
        <TouchableOpacity
          style={[styles.region, styles.northwestRegion]} // Positioning styles specific to the northwest region
          onPress={() => navigation.navigate('SelectedRegionScreen', {name: 'NORTHEAST REGION'})}
        />
        <TouchableOpacity
          style={[styles.region, styles.southwestRegion]} // Positioning styles specific to the southwest region
          onPress={() => navigation.navigate('SelectedRegionScreen', {name: 'SOUTHWEST REGION'})}
        />
        {/* ... Additional regions here ... */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFA1', // Light yellow background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFA1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuButton: {
    // Add styles for the menu button
  },
  menuText: {
    fontSize: 24,
  },
  searchButton: {
    // Add styles for the search button
  },
  searchText: {
    fontSize: 50,
  },
  mapContainer: {
    // Add styles for map container
    width: 800,
    height: 800, // Temporary height for the placeholder
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapPlaceholderText: {
    // This is just a placeholder style
    fontSize: 18,
    color: 'grey',
  },
  selectedRegionContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  selectedRegionText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  progressText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ADD8E6', // Light blue color for buttons
    padding: 20,
    marginHorizontal: 50,
    marginBottom: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    // Your container styles
  },
  mapContainer: {
    // Set the height and width to fit your screen or parent container
    width: '100%', // You can adjust this percentage as needed
    height: '100%', // You can adjust this percentage as needed
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  mapImage: {
    width: '50%', // Ensures the image takes full width of its container
    height: '500px', // Ensures the image takes full height of its container
    resizeMode: 'stretch', // Ensures the entire map is visible and aspect ratio is maintained
  },
  region: {
    position: 'absolute',
    backgroundColor: 'transparent', // Ensure the touchable area is invisible
    borderStyle: "solid",
    borderRadius: 50,
    borderWidth: 7,
    borderColor: "rgba(16, 170, 174, 0.2)",
    elevation: 10,
    shadowColor: "#10aaae",
    shadowRadius: 7,
    shadowOpacity: .5,
    shadowOffset : { width: 0, height: 10 },
  },
  northwestRegion: {
    // Position and size for the northwest region based on your map image
    top: '23%', // Adjust these percentages to match the region's position on your map image
    left: '60%',
    width: '15%',
    height: "25%",
  },
  southwestRegion: {
    // Similarly for the southwest region
    top: "55%",
    left: "45%",
    width: "25%",
    height: "30%",
  },
});

export default RegionSelectMap;
