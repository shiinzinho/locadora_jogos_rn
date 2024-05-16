import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
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

            const response = await axios.post ('http://10.137.11.208:8000/api/register/games', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch(error){
            console.log(error);
        }
    }
    return (
        <View>
            <TouchableOpacity onPress={cadastrarJogos}>
                <Text>Cadastrar Jogo</Text>
            </TouchableOpacity>
        </View>
    );
};
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginBottom: 30,
        backgroundColor: '#000',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 40,
        borderBottomStartRadius:22,
        borderBottomEndRadius:22
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
        borderRadius:15,
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
        color:'black',
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