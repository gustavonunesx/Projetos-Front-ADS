import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  const [item, setItem] = useState("");
  const [quantidade, setQuantidade] = useState("");

  function confirmarRecebimento() {
    Alert.alert(
      "Recebimento Registrado",
      `Item: ${item}\nQuantidade: ${quantidade}`
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de Entrada</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do item"
        value={item}
        onChangeText={setItem}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botao} onPress={confirmarRecebimento}>
        <Text style={styles.textoBotao}>Confirmar Recebimento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#f2f2f2",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  botao: {
    backgroundColor: "#2e86de",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});