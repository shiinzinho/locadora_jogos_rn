import React from "react";
import { FlatList } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='CadastroJogos' component={} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;