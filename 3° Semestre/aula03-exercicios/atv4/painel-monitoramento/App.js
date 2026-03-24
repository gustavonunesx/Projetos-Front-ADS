import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [status, setStatus] = useState("Operacional");

  function alterarStatus() {
    if (status === "Operacional") {
      setStatus("Manutenção");
    } else {
      setStatus("Operacional");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SENAI</Text>

      <Image
        source={{
          uri: "https://thumbs.dreamstime.com/b/hydraulic-press-machine-11638125.jpg",
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        Máquina:
        {"\n"}Prensa Hidráulica
      </Text>

      <Text style={styles.status}>
        Status:{" "}
        <Text style={{ color: status === "Operacional" ? "green" : "red" }}>
          {status}
        </Text>
      </Text>

      <TouchableOpacity style={styles.botao} onPress={alterarStatus}>
        <Text style={styles.textoBotao}>ALTERAR STATUS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0b5fa5",
  },
  imagem: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  status: {
    fontSize: 20,
    marginBottom: 20,
  },
  botao: {
    borderWidth: 1,
    borderColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: "bold",
  },
});