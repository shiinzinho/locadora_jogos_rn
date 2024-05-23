import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

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

function ListagemJogos(): React.JSX.Element {
  const [jogos, setJogos] = useState<Jogos[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.137.11.206:8000/api/return/all/games');
        if (Array.isArray(response.data.data)) {
          setJogos(response.data.data);
        } else {
          // console.error('A API deve retornar um array de jogos');
        }
      } catch (error) {
        // console.error(`Erro: ${error.message}`);
        // if (error.response) {
        //   console.error(`Status: ${error.response.status} ${error.response.statusText}`);
        // }
      }
    };
  
    fetchData();
  }, []);

  const renderItem = ({ item }: { item: Jogos }) => {
    return (
      <View style={styles.jogoContainer}>
        <Text style={styles.jogoText}>{`Nome: ${item.nome}`}</Text>
        <Text style={styles.jogoText}>{`Preço: ${item.preco}`}</Text>
        <Text style={styles.jogoText}>{`Descrição: ${item.descricao}`}</Text>
        <Text style={styles.jogoText}>{`Classificação: ${item.classificacao}`}</Text>
        <Text style={styles.jogoText}>{`Plataformas: ${item.plataformas}`}</Text>
        <Text style={styles.jogoText}>{`Desenvolvedor: ${item.desenvolvedor}`}</Text>
        <Text style={styles.jogoText}>{`Distribuidora: ${item.distribuidora}`}</Text>
        <Text style={styles.jogoText}>{`Categoria: ${item.categoria}`}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#6c5ce7'}></StatusBar>
      <View style={styles.header}>
        <Text style={styles.headerText}>Listagem de Jogos</Text>
      </View>
      <FlatList
        data={jogos}
        renderItem={renderItem}
        keyExtractor={(item) => item.nome}
        style={{ height: '70%' }} // Define uma altura fixa para a lista de jogos
      />
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
    marginTop: -35,
    marginBottom: 40
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    backgroundColor: '#151f42'
  },
  jogoContainer: {
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10, // Adiciona um raio de borda ao container branco
  },
  jogoText: {
    fontSize: 16,
    marginBottom: 5
  }
});

export default ListagemJogos;