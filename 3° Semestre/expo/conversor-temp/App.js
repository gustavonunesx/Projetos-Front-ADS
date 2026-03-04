import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState(null);

  function converter() {
    
    const c = parseFloat(celsius.replace(',', '.'));
      const f = (c * 1.8) + 32;
      setFahrenheit(f.toFixed(1));
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Temperatura em Celsius:</Text>
      <TextInput
        style={styles.input}
        value={celsius}
        onChangeText={setCelsius}
        keyboardType="decimal-pad"
        placeholder="Ex: 36,5"
      />
      <Button title="Converter" onPress={converter} />
      {fahrenheit !== null && (
        <Text style={styles.result}>
          {fahrenheit} °F
        </Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
