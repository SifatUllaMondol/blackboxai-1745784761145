import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function CheckoutScreen({ navigation }) {
  const handleCheckout = () => {
    Alert.alert('Checkout', 'Checkout functionality is not implemented yet.');
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <Text className="text-xl mb-4">Checkout</Text>
      <Button title="Confirm Order" onPress={handleCheckout} />
    </View>
  );
}
