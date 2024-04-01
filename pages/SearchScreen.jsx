import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  // Simulate fetching search results
  const handleSearch = (query) => {
    setSearchQuery(query);
    // Here you would fetch and filter data based on the searchQuery
    // For demonstration, we're setting static data
    setResults([
      { id: '1', name: 'Example Result 1' },
      { id: '2', name: 'Example Result 2' },
    ]);
  };

  return (
    <View>
      <TextInput
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default SearchScreen;
