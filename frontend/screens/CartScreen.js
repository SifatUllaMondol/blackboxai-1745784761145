import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';

export default function CartScreen({ navigation }) {
  const [cart, setCart] = useState(null);

  const fetchCart = () => {
    fetch('http://localhost:8000/api/cart/')
      .then(response => response.json())
      .then(data => setCart(data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = (bookId) => {
    fetch('http://localhost:8000/api/cart/remove_item/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ book_id: bookId }),
    })
      .then(response => response.json())
      .then(data => setCart(data))
      .catch(error => console.error(error));
  };

  const renderItem = ({ item }) => (
    <View className="p-4 border-b border-gray-200 flex-row justify-between items-center">
      <View>
        <Text className="text-lg font-semibold">{item.book.title}</Text>
        <Text className="text-gray-600">Quantity: {item.quantity}</Text>
      </View>
      <TouchableOpacity onPress={() => removeItem(item.book.id)} className="bg-red-500 px-3 py-1 rounded">
        <Text className="text-white">Remove</Text>
      </TouchableOpacity>
    </View>
  );

  if (!cart) {
    return <Text>Loading...</Text>;
  }

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={cart.items}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
      <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
}
