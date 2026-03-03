import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [ocorrencia, setOcorrencia] = useState('')
  const [pin, setPin] = useState('')
  const [pesoCromo, setPesoCromo] = useState('')
  const [pesoNiquel, setPesoNiquel] = useState('')
  const [pesoTotal, setPesoTotal] = useState('')

  function calculaMetais(){
    const cromo = parseFloat(pesoCromo.replace(',', '.')) || 0;
    const niquel = parseFloat(pesoNiquel.replace(',', '.')) || 0;
    const total = cromo + niquel;
    setPesoTotal(total.toFixed(2));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Tech Alloy</Text>
      <Text style={styles.subtitulo}>Controle de Produção</Text>

      {/* Card Ocorrência */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Relatório de Ocorrência</Text>

        <TextInput
          style={styles.input}
          placeholder='Digite a ocorrência'
          placeholderTextColor="#999"
          value={ocorrencia}
          onChangeText={setOcorrencia}
        />

        <TextInput
          style={styles.input}
          placeholder='PIN de segurança'
          placeholderTextColor="#999"
          value={pin}
          onChangeText={setPin}
          secureTextEntry
        />

        <TouchableOpacity style={styles.botaoVermelho}>
          <Text style={styles.textoBotao}>Enviar Ocorrência</Text>
        </TouchableOpacity>
      </View>

      {/* Card Produção */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Cálculo da Liga</Text>

        <TextInput
          style={styles.input}
          placeholder='Carga de Cromo (kg)'
          placeholderTextColor="#999"
          value={pesoCromo}
          onChangeText={setPesoCromo}
          keyboardType='numeric'
        />

        <TextInput
          style={styles.input}
          placeholder='Carga de Níquel (kg)'
          placeholderTextColor="#999"
          value={pesoNiquel}
          onChangeText={setPesoNiquel}
          keyboardType='numeric'
        />

        <TouchableOpacity style={styles.botaoAzul} onPress={calculaMetais}>
          <Text style={styles.textoBotao}>Calcular Total</Text>
        </TouchableOpacity>

        {pesoTotal !== '' && (
          <Text style={styles.resultado}>
            Peso Total: {pesoTotal} kg
          </Text>
        )}
      </View>

      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1e1e2f',
    padding: 20,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#bbb',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#2c2c3e',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#3a3a50',
    color: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  botaoVermelho: {
    backgroundColor: '#ff4444',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  botaoAzul: {
    backgroundColor: '#4e73df',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00ffcc',
    textAlign: 'center',
  }
});