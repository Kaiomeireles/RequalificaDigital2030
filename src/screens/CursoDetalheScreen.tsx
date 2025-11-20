// src/screens/CursoDetalheScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootNavigator';
import { colors, spacing, radius, fontSize } from '../styles/theme';

type CursoDetalheRouteProp = RouteProp<RootStackParamList, 'CursoDetalhe'>;

type Props = {
  route: CursoDetalheRouteProp;
};

const CursoDetalheScreen: React.FC<Props> = ({ route }) => {
  const { titulo, descricao, progresso } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.text}>{descricao}</Text>
        {typeof progresso === 'number' && (
          <View style={styles.progressPill}>
            <Text style={styles.progressText}>Progresso atual: {progresso}%</Text>
          </View>
        )}
      </View>
      <Text style={styles.note}>
        Esta tela pode ser expandida com módulos, vídeos, quizzes e materiais de apoio.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgEnd,
    padding: spacing.lg,
  },
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    fontSize: fontSize.lg,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  text: {
    fontSize: fontSize.sm,
    color: colors.textSoft,
    marginBottom: spacing.md,
  },
  progressPill: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 999,
    backgroundColor: 'rgba(34,211,238,0.15)',
  },
  progressText: {
    fontSize: fontSize.xs,
    color: colors.accent,
    fontWeight: '600',
  },
  note: {
    marginTop: spacing.lg,
    fontSize: fontSize.xs,
    color: colors.textSoft,
  },
});

export default CursoDetalheScreen;
