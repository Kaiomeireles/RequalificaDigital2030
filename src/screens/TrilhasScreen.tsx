// src/screens/TrilhasScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { colors, spacing, radius, fontSize } from '../styles/theme';

type NavProp = StackNavigationProp<RootStackParamList, 'Main'>;

const trilhasMock = [
  {
    titulo: 'Fundamentos de Inteligência Artificial',
    descricao: 'Aprenda como a IA está transformando o trabalho até 2030.',
    progresso: 40,
  },
  {
    titulo: 'Soft Skills para o Futuro do Trabalho',
    descricao: 'Comunicação, colaboração e adaptabilidade na era digital.',
    progresso: 10,
  },
  {
    titulo: 'Sustentabilidade e Inovação',
    descricao: 'Integre ESG, tecnologia e impacto real na carreira.',
    progresso: 60,
  },
];

const TrilhasScreen: React.FC = () => {
  const navigation = useNavigation<NavProp>();

  const abrirDetalhe = (trilha: (typeof trilhasMock)[number]) => {
    navigation.navigate('CursoDetalhe', {
      titulo: trilha.titulo,
      descricao: trilha.descricao,
      progresso: trilha.progresso,
    });
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Trilhas de aprendizado</Text>
        <Text style={styles.subtitle}>
          Escolha uma trilha para acelerar sua requalificação.
        </Text>

        {trilhasMock.map((trilha, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => abrirDetalhe(trilha)}
          >
            <Text style={styles.cardTitle}>{trilha.titulo}</Text>
            <Text style={styles.cardDescription}>{trilha.descricao}</Text>
            <View style={styles.progressPill}>
              <Text style={styles.progressText}>Progresso: {trilha.progresso}%</Text>
            </View>
          </TouchableOpacity>
        ))}
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
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    fontSize: fontSize.md,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  cardDescription: {
    fontSize: fontSize.sm,
    color: colors.textSoft,
    marginBottom: spacing.md,
  },
  progressPill: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 999,
    backgroundColor: 'rgba(99,102,241,0.18)',
  },
  progressText: {
    fontSize: fontSize.xs,
    color: colors.accent,
    fontWeight: '600',
  },
});

export default TrilhasScreen;
