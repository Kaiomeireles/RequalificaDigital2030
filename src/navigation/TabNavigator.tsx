// src/navigation/TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TrilhasScreen from '../screens/TrilhasScreen';
import ProgressoScreen from '../screens/ProgressoScreen';
import { colors } from '../styles/theme';
import { Ionicons } from '@expo/vector-icons'; // se não tiver, remova ícones

export type TabParamList = {
  Home: undefined;
  Trilhas: undefined;
  Progresso: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: colors.bgStart },
        headerTintColor: colors.text,
        headerTitleStyle: { fontWeight: '600' },
        tabBarStyle: {
          borderTopColor: 'rgba(148,163,184,0.3)',
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textSoft,
        tabBarLabelStyle: { fontSize: 11 },
        tabBarIcon: ({ color, size }) => {
          // Se não quiser usar ícones, pode devolver null aqui
          let iconName: keyof typeof Ionicons.glyphMap = 'home';
          if (route.name === 'Home') iconName = 'home';
          if (route.name === 'Trilhas') iconName = 'layers';
          if (route.name === 'Progresso') iconName = 'stats-chart';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Início' }}
      />
      <Tab.Screen
        name="Trilhas"
        component={TrilhasScreen}
        options={{ title: 'Trilhas' }}
      />
      <Tab.Screen
        name="Progresso"
        component={ProgressoScreen}
        options={{ title: 'Progresso' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
