import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  const [codigo, setCodigo] = useState("");

  function adicionarNumero(numero) {
    setCodigo(codigo + numero);
  }

  function limpar() {
    setCodigo("");
  }

  function acessar() {
    Alert.alert("Acesso solicitado", `Código do funcionário: ${codigo}`);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <Image
        source={{
          uri: "https://logodownload.org/wp-content/uploads/2019/08/senai-logo.png",
        }}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Controle de Acesso</Text>

      {/* Campo de código */}
      <TextInput
        style={styles.input}
        placeholder="Digite o código"
        value={codigo}
        editable={false}
      />

      {/* Teclado Numérico */}
      <View style={styles.teclado}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <TouchableOpacity
            key={num}
            style={styles.botaoNumero}
            onPress={() => adicionarNumero(num)}
          >
            <Text style={styles.textoNumero}>{num}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.botaoNumero} onPress={limpar}>
          <Text style={styles.textoNumero}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoNumero}
          onPress={() => adicionarNumero(0)}
        >
          <Text style={styles.textoNumero}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNumero} onPress={acessar}>
          <Text style={styles.textoNumero}>OK</Text>
        </TouchableOpacity>
      </View>

      {/* Botões principais */}
      <View style={styles.areaBotoes}>
        <TouchableOpacity style={styles.botaoLimpar} onPress={limpar}>
          <Text style={styles.textoBotao}>Limpar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoAcessar} onPress={acessar}>
          <Text style={styles.textoBotao}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f2f2f2",
    flexGrow: 1,
    justifyContent: "center",
  },
  logo: {
    width: 160,
    height: 60,
    resizeMode: "contain",
    marginBottom: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    padding: 12,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  teclado: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 250,
    justifyContent: "center",
  },
  botaoNumero: {
    width: 70,
    height: 70,
    margin: 5,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textoNumero: {
    fontSize: 22,
    fontWeight: "bold",
  },
  areaBotoes: {
    flexDirection: "row",
    marginTop: 20,
  },
  botaoLimpar: {
    backgroundColor: "#e74c3c",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  botaoAcessar: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 10,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});