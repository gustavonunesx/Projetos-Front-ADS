import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function App() {
  const epis = [
    {
      nome: "Capacete",
      descricao: "Protege a cabeça contra impactos e queda de objetos.",
      imagem:
        "https://cdn-icons-png.freepik.com/512/968/968837.png",
    },
    {
      nome: "Luvas",
      descricao: "Protegem as mãos contra cortes, abrasões e produtos químicos.",
      imagem:
        "https://cdn-icons-png.flaticon.com/512/4601/4601815.png",
    },
    {
      nome: "Protetor Auricular",
      descricao: "Reduz a exposição a níveis elevados de ruído.",
      imagem:
        "https://cdn.awsli.com.br/2500x2500/2755/2755133/produto/276213324/9322295b2b56102de9346b21aa1d1920-1444632259bd58df0c17083740913978-1024-1024-duq6gf4ai1.jpg",
    },
    {
      nome: "Botas de Segurança",
      descricao: "Protegem os pés contra impactos e perfurações.",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_Do17sBbNXuDdnEIzpvMUiLY19hn0aEtzw&s",
    },
    {
      nome: "Óculos de Proteção",
      descricao: "Protegem os olhos contra partículas e respingos.",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdzjgP-Co2KI6T0X6i_LHYO5gQ21Fa3xQ8Q&s",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Guia de EPIs</Text>

      {epis.map((epi, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: epi.imagem }} style={styles.imagem} />

          <View style={styles.textos}>
            <Text style={styles.nome}>{epi.nome}</Text>
            <Text style={styles.descricao}>{epi.descricao}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    elevation: 2,
  },
  imagem: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  textos: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descricao: {
    fontSize: 14,
    color: "#555",
  },
});