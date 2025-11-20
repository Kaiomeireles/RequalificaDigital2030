import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import DrawerNavigator from './DrawerNavigator';
import CursoDetalheScreen from '../screens/CursoDetalheScreen';

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  CursoDetalhe: {
    titulo: string;
    descricao: string;
    progresso?: number;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CursoDetalhe"
        component={CursoDetalheScreen}
        options={{ title: 'Detalhes da Trilha' }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
