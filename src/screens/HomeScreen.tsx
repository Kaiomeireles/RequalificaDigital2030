// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, spacing, fontSize, radius } from '../styles/theme';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        
        <Text style={styles.title}>Início</Text>
        <Text style={styles.subtitle}>
          Bem-vindo(a)! Acompanhe sua jornada de requalificação digital.
        </Text>

        {/* CARD ROXO DESTACADO */}
        <View style={styles.highlightCard}>
          <Text style={styles.highlightTitle}>Seu próximo passo</Text>
          <Text style={styles.highlightText}>
            Continue a trilha de Inteligência Artificial para se preparar para o mercado 2030+.
          </Text>
        </View>

        {/* CARD NORMAL */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Objetivos do RequalificaDigital2030</Text>
          <Text style={styles.cardText}>• Autoavaliação de competências</Text>
          <Text style={styles.cardText}>• Trilhas curtas em áreas emergentes</Text>
          <Text style={styles.cardText}>• Acompanhamento de progresso</Text>
          <Text style={styles.cardText}>• Microcursos gamificados</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>ODS relacionados</Text>
          <Text style={styles.cardText}>• ODS 4 – Educação de Qualidade</Text>
          <Text style={styles.cardText}>• ODS 8 – Trabalho Decente</Text>
          <Text style={styles.cardText}>• ODS 9 – Inovação e Infraestrutura</Text>
          <Text style={styles.cardText}>• ODS 10 – Redução das Desigualdades</Text>
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
    fontSize: fontSize.xl,
    fontWeight: '700',
    color: colors.text,
  },
  subtitle: {
    color: colors.textSoft,
    fontSize: fontSize.sm,
    marginBottom: spacing.lg,
  },

  highlightCard: {
    backgroundColor: colors.primarySoft,
    padding: spacing.lg,
    borderRadius: radius.lg,
    marginBottom: spacing.lg,
  },
  highlightTitle: {
    color: colors.text,
    fontWeight: '600',
    fontSize: fontSize.md,
    marginBottom: spacing.xs,
  },
  highlightText: {
    color: '#E5E7EB',
    fontSize: fontSize.sm,
  },

  card: {
    backgroundColor: colors.cardBg,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },

  cardTitle: {
    color: colors.text,
    fontWeight: '600',
    fontSize: fontSize.md,
    marginBottom: spacing.sm,
  },
  cardText: {
    color: colors.textSoft,
    fontSize: fontSize.sm,
    marginBottom: spacing.xs,
  },
});

export default HomeScreen;
