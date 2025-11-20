// src/screens/PerfilScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing, radius, fontSize } from '../styles/theme';

const STORAGE_KEY_NOME = '@requalifica_nome';

const PerfilScreen: React.FC = () => {
  const [nome, setNome] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    const carregar = async () => {
      const sNome = await AsyncStorage.getItem(STORAGE_KEY_NOME);
      if (sNome) setNome(sNome);
    };
    carregar();
  }, []);

  const salvar = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_NOME, nome);
      Alert.alert('Sucesso', 'Perfil atualizado.');
    } catch {
      Alert.alert('Erro', 'Não foi possível salvar seu perfil.');
    }
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Meu perfil</Text>
        <Text style={styles.subtitle}>
          Personalize seu nome e um breve resumo profissional.
        </Text>

        <View style={styles.card}>
          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            style={styles.input}
            value={nome}
            placeholder="Digite seu nome"
            placeholderTextColor={colors.textSoft}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Resumo profissional</Text>
          <TextInput
            style={[styles.input, styles.inputMultiline]}
            value={bio}
            placeholder="Ex: Profissional em transição para tecnologia..."
            placeholderTextColor={colors.textSoft}
            multiline
            onChangeText={setBio}
          />

          <View style={styles.buttonWrapper}>
            <Button title="Salvar perfil" onPress={salvar} color={colors.primarySoft} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bgStart,
  },
  container: {
    padding: spacing.lg,
  },
  title: {
    fontSize: fontSize.lg,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: fontSize.sm,
    color: colors.textSoft,
    marginBottom: spacing.lg,
  },
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontSize: fontSize.sm,
    color: colors.textSoft,
    marginBottom: spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: 'rgba(15,23,42,0.9)',
    color: colors.text,
    marginBottom: spacing.md,
  },
  inputMultiline: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonWrapper: {
    marginTop: spacing.sm,
    borderRadius: radius.lg,
    overflow: 'hidden',
  },
});

export default PerfilScreen;
