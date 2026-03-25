import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [carregando, setCarregando] = useState(true);

  const sensores = [
    { id: "1", nome: "Sensor de Temperatura", valor: "45°C" },
    { id: "2", nome: "Sensor de Umidade", valor: "60%" },
    { id: "3", nome: "Sensor de Pressão", valor: "101 kPa" },
    { id: "4", nome: "Sensor de Calor", valor: "48°C" },
    { id: "5", nome: "Sensor de Vibração", valor: "3.2 Hz" },
    { id: "6", nome: "Sensor de Fluxo", valor: "120 L/min" },
    { id: "7", nome: "Sensor de Gás", valor: "Normal" },
    { id: "8", nome: "Sensor de Energia", valor: "220V" },
    { id: "9", nome: "Sensor de Corrente", valor: "15A" },
    { id: "10", nome: "Sensor de Nível", valor: "70%" },
    { id: "11", nome: "Sensor de Luz", valor: "350 lux" },
    { id: "12", nome: "Sensor de Torque", valor: "30 Nm" },
    { id: "13", nome: "Sensor de Ruído", valor: "80 dB" },
    { id: "14", nome: "Sensor de Velocidade", valor: "1500 RPM" },
    { id: "15", nome: "Sensor de Produção", valor: "240 peças/h" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setCarregando(false);
    }, 3000);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {carregando ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
            <Text style={styles.textoLoading}>
              Conectando ao Gateway IoT...
            </Text>
          </View>
        ) : (
          <>
            {/* Status da fábrica */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.statusContainer}
            >
              <Text style={styles.statusTexto}>
                Status da Fábrica: Sistema Operando Normalmente
              </Text>
            </ScrollView>

            {/* Lista de sensores */}
            <FlatList
              data={sensores}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Text style={styles.sensorNome}>{item.nome}</Text>
                  <Text style={styles.sensorValor}>{item.valor}</Text>
                </View>
              )}
            />
          </>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textoLoading: {
    marginTop: 10,
    fontSize: 16,
  },
  statusContainer: {
    backgroundColor: "#0b5fa5",
    padding: 15,
  },
  statusTexto: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    elevation: 2,
  },
  sensorNome: {
    fontSize: 16,
    fontWeight: "bold",
  },
  sensorValor: {
    fontSize: 16,
    marginTop: 5,
    color: "#333",
  },
});