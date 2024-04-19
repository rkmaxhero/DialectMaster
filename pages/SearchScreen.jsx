import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DATA = [
  {
    id: 'northeast',
    title: 'NORTHEAST REGION',
    progress: 99
  },
  {
    id: 'southwest',
    title: 'SOUTHWEST REGION',
    progress: 0
  },
];

const Item = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const SearchScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(DATA);

  const searchFilterFunction = (text) => {
    const newData = DATA.filter((item) => {
      const itemData = item.title.toUpperCase();
      const queryData = text.toUpperCase();
      return itemData.indexOf(queryData) > -1;
    });
    setFilteredData(newData);
    setSearchQuery(text);
  };

  const handlePress = (item) => {
    // Placeholder for what to do when an item is clicked
    console.log('Selected: ', item.title);
  };

  const Item = ({ id, title, progress, navigation }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('SelectedRegionScreen',{name: title, progress: progress})}
      style={styles.item}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
  
  const renderItem = ({ item }) => (
    <Item id={item.id} title={item.title} progress={item.progress} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => searchFilterFunction(text)}
        value={searchQuery}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderColor: '#CCCCCC',
  },
  list: {
    flex: 1,
  },
});

export default SearchScreen;
