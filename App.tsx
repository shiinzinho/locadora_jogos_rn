import React from "react";
import { FlatList } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {createStackNavigator } from "@react-navigation/stack";
import CadastroJogos from "./src/screens/CadastroJogos";
import ListagemJogos from "./src/screens/ListagemJogos";

function App(): React.JSX.Element {
  return(
    <CadastroJogos />
  );
}
export default App;