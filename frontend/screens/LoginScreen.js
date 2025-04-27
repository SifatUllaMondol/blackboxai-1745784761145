import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login', 'Login functionality is not implemented yet.');
  };

  return (
    <View className="flex-1 justify-center p-4 bg-white">
      <Text className="text-2xl mb-4">Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        className="border border-gray-300 rounded p-2 mb-4"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border border-gray-300 rounded p-2 mb-4"
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
