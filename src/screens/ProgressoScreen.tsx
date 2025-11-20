// src/screens/ProgressoScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, spacing, radius, fontSize } from '../styles/theme';

const ProgressoScreen: React.FC = () => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Seu progresso</Text>
        <Text style={styles.subtitle}>
          Visualize como você está evoluindo nas trilhas.
        </Text>

        <View style={styles.card}>
          <View style={styles.metricRow}>
            <Text style={styles.metricLabel}>Trilhas iniciadas</Text>
            <Text style={styles.metricValue}>3</Text>
          </View>

          <View style={styles.metricRow}>
            <Text style={styles.metricLabel}>Trilhas concluídas</Text>
            <Text style={styles.metricValue}>1</Text>
          </View>

          <View style={styles.metricRow}>
            <Text style={styles.metricLabel}>Horas estimadas de estudo</Text>
            <Text style={styles.metricValue}>12h</Text>
          </View>

          <View style={styles.metricColumn}>
            <Text style={styles.metricLabel}>Competências em foco</Text>
            <Text style={styles.metricValueSmall}>
              Inteligência Artificial, Soft Skills, Sustentabilidade
            </Text>
          </View>
        </View>

        <Text style={styles.note}>
          * Dados fictícios, utilizados apenas para demonstração da Global Solution.
        </Text>
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
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  metricColumn: {
    marginTop: spacing.sm,
  },
  metricLabel: {
    fontSize: fontSize.sm,
    color: colors.textSoft,
  },
  metricValue: {
    fontSize: fontSize.md,
    color: colors.text,
    fontWeight: '600',
  },
  metricValueSmall: {
    fontSize: fontSize.sm,
    color: colors.text,
  },
  note: {
    marginTop: spacing.lg,
    fontSize: fontSize.xs,
    color: colors.textSoft,
  },
});

export default ProgressoScreen;
