import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

interface Props {
  route: any;
}

const EditarJogos: React.FC<Props> = ({ route }) => {
  const jogo = route.params.jogo?? {}; // fornecer um objeto vazio como padrão
  const [nome, setNome] = useState(jogo.nome?? ''); // fornecer um valor padrão vazio
  const [preco, setPreco] = useState(jogo.preco?? '');
  const [descricao, setDescricao] = useState(jogo.descricao?? '');
  const [classificacao, setClassificacao] = useState(jogo.classificacao?? '');
  const [plataformas, setPlataformas] = useState(jogo.plataformas?? '');
  const [desenvolvedor, setDesenvolvedor] = useState(jogo.desenvolvedor?? '');
  const [distribuidora, setDistribuidora] = useState(jogo.distribuidora?? '');
  const [categoria, setCategoria] = useState(jogo.categoria?? '');
  const [error, setError] = useState(null); // estado para armazenar erros

  useEffect(() => {
    // lidar com a atualização do estado quando o componente é montado ou desmontado
  }, []);

  const handleUpdate = async () => {
    if (!jogo.id) {
      console.error("Jogo ID doesn't exist!");
      return;
    }
  
    const data = {
      nome,
      preco,
      descricao,
      classificacao,
      plataformas,
      desenvolvedor,
      distribuidora,
      categoria,
    };
  
    console.log("Dados a serem enviados:", data);
  
    try {
      const response = await axios.put(`http://10.137.11.206:8000/api/update/game/${jogo.id}`, data);
  
      // ...
    } catch (error) {
      console.error(error.response);
    }
  };
  

  
  return (
    <View>
      <Text>Editar Jogo</Text>
      <TextInput
        value={nome}
        onChangeText={(text) => setNome(text)}
        placeholder="Nome do jogo"
      />
      <TextInput
        value={preco}
        onChangeText={(text) => setPreco(text)}
        placeholder="Preço do jogo"
      />
      <TextInput
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
        placeholder="Descrição do jogo"
      />
      <TextInput
        value={classificacao}
        onChangeText={(text) => setClassificacao(text)}
        placeholder="Classificação do jogo"
      />
      <TextInput
        value={plataformas}
        onChangeText={(text) => setPlataformas(text)}
        placeholder="Plataformas do jogo"
      />
      <TextInput
        value={desenvolvedor}
        onChangeText={(text) => setDesenvolvedor(text)}
        placeholder="Desenvolvedor do jogo"
      />
      <TextInput
        value={distribuidora}
        onChangeText={(text) => setDistribuidora(text)}
        placeholder="Distribuidora do jogo"
      />
      <TextInput
        value={categoria}
        onChangeText={(text) => setCategoria(text)}
        placeholder="Categoria do jogo"
      />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <TouchableOpacity onPress={handleUpdate}>
        <Text>Atualizar Jogo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditarJogos;