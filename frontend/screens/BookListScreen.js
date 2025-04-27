import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

export default function BookListScreen({ navigation }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/books/')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('BookDetail', { bookId: item.id })} className="p-4 border-b border-gray-200">
      <View className="flex-row items-center">
        {item.cover_image ? (
          <Image source={{ uri: item.cover_image }} style={{ width: 50, height: 75, marginRight: 10 }} />
        ) : null}
        <View>
          <Text className="text-lg font-semibold">{item.title}</Text>
          <Text className="text-gray-600">{item.author}</Text>
          <Text className="text-gray-800">${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={books}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
