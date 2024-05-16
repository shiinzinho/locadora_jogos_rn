import React, { useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";

const CadastroJogos: React.FC = () => {
  const [nome, setNome] = useState<string>('');
  const [preco, setPreco] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');
  const [classificacao, setClassificacao] = useState<string>('');
  const [plataformas, setPlataformas] = useState<string>('');
  const [desenvolvedor, setDesenvolvedor] = useState<string>('');
  const [distribuidora, setDistribuidora] = useState<string>('');
  const [categoria, setCategoria] = useState<string>('');

  const cadastrarJogos = async () => {
    try {
      const formData = new FormData();
      formData.append('nome', nome);
      formData.append('preco', preco);
      formData.append('descricao', descricao);
      formData.append('classificacao', classificacao);
      formData.append('plataformas', plataformas);
      formData.append('desenvolvedor', desenvolvedor);
      formData.append('distribuidora', distribuidora);
      formData.append('categoria', categoria);

      const response = await axios.post('http://10.137.11.206:8000/api/register/games', formData, {
        headers: {
          'Content-Type': 'ultipart/form-data'
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ImageBackground source={require('../assets/images/singup.jpg')} style={styles.imageBackground}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Cadastro de Jogos</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          value={nome}
          onChangeText={setNome}
          color='#010E2C'
        />
        <TextInput
          style={styles.input}
          placeholder="Preço"
          value={preco}
          onChangeText={setPreco}
          color='#010E2C'
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
          color='#010E2C'
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Classificação"
          value={classificacao}
          onChangeText={setClassificacao}
          color='#010E2C'
        />
        <TextInput
          style={styles.input}
          placeholder="Plataformas"
          value={plataformas}
          onChangeText={setPlataformas}
          color='#010E2C'
        />
        <TextInput
          style={styles.input}
          placeholder="Desenvolvedor"
          value={desenvolvedor}
          onChangeText={setDesenvolvedor}
          color='#010E2C'
        />
        <TextInput
          style={styles.input}
          placeholder="Distribuidora"
          value={distribuidora}
          onChangeText={setDistribuidora}
          color='#010E2C'
        />
        <TextInput
          style={styles.input}
          placeholder="Categoria"
          value={categoria}
          onChangeText={setCategoria}
          color='#010E2C'
        />
        <Button title="Cadastrar" onPress={cadastrarJogos} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 55,
    marginBottom: 200,
    backgroundColor: '#000',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 60,
    borderBottomStartRadius: 22,
    borderBottomEndRadius: 22
  },
  errorText: {
    color: 'yellow',
    marginBottom: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  form: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: 'black',
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 350,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  imageButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  imageButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  fotoSelecionada: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 10,
  },
  alinhamentofotoSelecionada: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  imageHeader: {
    width: 320,
    height: 150,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 3,
    borderColor: 'red',
  },
  footerIcon: {
    width: 30,
    height: 30
  },
});

export default CadastroJogos;