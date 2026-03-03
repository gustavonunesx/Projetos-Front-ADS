import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tech Alloy -  Controle de Produção</Text>
      <Text>Relatórios de ocorrências</Text>
      <Text>PIN de segurança(Oculto)</Text>
      <Text>Carga de de Cromo(kg)</Text>
      <Text>Carga de Níquel(kg))</Text>
      <Text>Peso total da carga</Text>
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
  },
});
