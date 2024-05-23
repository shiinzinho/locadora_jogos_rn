import axios from "axios";
import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface Jogos {
  nome: string;
  preco: string;
  descricao: string;
  classificacao: string;
  plataformas: string;
  desenvolvedor: string;
  distribuidora: string;
  categoria: string;
}

function CadastroJogos(): React.JSX.Element {
  const [jogos, setJogos] = useState<Jogos[]>([
    {
      nome: "Jogo 1",
      preco: "50,00",
      descricao: "Descrição do Jogo 1",
      classificacao: "12",
      plataformas: "PC, PS4",
      desenvolvedor: "Desenvolvedor 1",
      distribuidora: "Distribuidora 1",
      categoria: "Ação"
    },
    {
      nome: "Jogo 2",
      preco: "60,00",
      descricao: "Descrição do Jogo 2",
      classificacao: "16",
      plataformas: "PC, Xbox",
      desenvolvedor: "Desenvolvedor 2",
      distribuidora: "Distribuidora 2",
      categoria: "Aventura"
    }
  ]);

  const renderJogo = (jogo: Jogos, index: number) => {
    return (
      <View key={index} style={styles.jogoContainer}>
        <Text style={styles.jogoText}>{`Nome: ${jogo.nome}`}</Text>
        <Text style={styles.jogoText}>{`Preço: ${jogo.preco}`}</Text>
        <Text style={styles.jogoText}>{`Descrição: ${jogo.descricao}`}</Text>
        <Text style={styles.jogoText}>{`Classificação: ${jogo.classificacao}`}</Text>
        <Text style={styles.jogoText}>{`Plataformas: ${jogo.plataformas}`}</Text>
        <Text style={styles.jogoText}>{`Desenvolvedor: ${jogo.desenvolvedor}`}</Text>
        <Text style={styles.jogoText}>{`Distribuidora: ${jogo.distribuidora}`}</Text>
        <Text style={styles.jogoText}>{`Categoria: ${jogo.categoria}`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="dark-content" backgroundColor={'#6c5ce7'}></StatusBar>
        <View style={styles.header}>
          <Text style={styles.headerText}>Listagem de Jogos</Text>
        </View>
        <View style={styles.list}>
          {jogos.map(renderJogo)}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#301461'
  },
  header: {
    backgroundColor: '#151f42',
    alignItems: 'center',
    paddingVertical: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100,
    height: 10,
    marginTop: -35
  },
  list: {
    paddingVertical: 20,
  },
  jogoContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 5,
    borderRadius: 5,
  },
  jogoText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CadastroJogos;