// src/navigation/DrawerNavigator.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import PerfilScreen from '../screens/PerfilScreen';
import SobreScreen from '../screens/SobreScreen';
import { colors, spacing, radius, fontSize } from '../styles/theme';

export type DrawerParamList = {
  Inicio: undefined;
  Perfil: undefined;
  Sobre: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, backgroundColor: colors.bgStart }}
    >
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>RD</Text>
        </View>
        <View>
          <Text style={styles.name}>RequalificaDigital2030</Text>
          <Text style={styles.subtitle}>Sua jornada até 2030+</Text>
        </View>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: colors.bgStart },
        headerTintColor: colors.text,
        headerTitleStyle: { fontWeight: '600' },
        drawerStyle: { backgroundColor: colors.bgStart },
        drawerActiveTintColor: colors.accent,
        drawerInactiveTintColor: colors.textSoft,
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={TabNavigator}
        options={{ title: 'Início' }}
      />
      <Drawer.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{ title: 'Meu Perfil' }}
      />
      <Drawer.Screen
        name="Sobre"
        component={SobreScreen}
        options={{ title: 'Sobre o App' }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: spacing.lg,
    paddingBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: spacing.md,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.cardBg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  avatarText: {
    color: colors.accent,
    fontWeight: '600',
    fontSize: fontSize.md,
  },
  name: {
    color: colors.text,
    fontWeight: '600',
    fontSize: fontSize.md,
  },
  subtitle: {
    color: colors.textSoft,
    fontSize: fontSize.xs,
  },
});

export default DrawerNavigator;
