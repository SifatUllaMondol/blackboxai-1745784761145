import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, ScrollView } from 'react-native';

export default function BookDetailScreen({ route, navigation }) {
  const { bookId } = route.params;
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/books/${bookId}/`)
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => console.error(error));
  }, [bookId]);

  const addToCart = () => {
    fetch('http://localhost:8000/api/cart/add_item/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ book_id: bookId, quantity: 1 }),
    })
      .then(response => response.json())
      .then(data => {
        alert('Added to cart');
        navigation.navigate('Cart');
      })
      .catch(error => console.error(error));
  };

  if (!book) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView className="p-4 bg-white">
      {book.cover_image ? (
        <Image source={{ uri: book.cover_image }} style={{ width: '100%', height: 300, marginBottom: 20 }} />
      ) : null}
      <Text className="text-2xl font-bold mb-2">{book.title}</Text>
      <Text className="text-lg mb-2">By {book.author}</Text>
      <Text className="text-gray-700 mb-4">{book.description}</Text>
      <Text className="text-xl font-semibold mb-4">${book.price}</Text>
      <Button title="Add to Cart" onPress={addToCart} />
    </ScrollView>
  );
}
