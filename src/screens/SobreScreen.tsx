// src/screens/SobreScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, spacing, radius, fontSize } from '../styles/theme';

const SobreScreen: React.FC = () => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Sobre o RequalificaDigital2030</Text>
          <Text style={styles.text}>
            O RequalificaDigital2030 é um aplicativo fictício desenvolvido como parte
            da Global Solution de Mobile Development & IoT da FIAP.
          </Text>
          <Text style={styles.text}>
            O app apoia trabalhadores e estudantes na requalificação profissional,
            frente às transformações trazidas pela inteligência artificial, automação
            e análise de dados.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>ODS Relacionados</Text>
          <Text style={styles.text}>
            • ODS 4 – Educação de Qualidade: democratiza o acesso à capacitação tecnológica.
          </Text>
          <Text style={styles.text}>
            • ODS 8 – Trabalho Decente e Crescimento Econômico: fomenta empregabilidade e requalificação.
          </Text>
          <Text style={styles.text}>
            • ODS 9 – Indústria, Inovação e Infraestrutura: incentiva tecnologias acessíveis e sustentáveis.
          </Text>
          <Text style={styles.text}>
            • ODS 10 – Redução das Desigualdades: inclui públicos vulneráveis no aprendizado digital.
          </Text>
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
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    fontSize: fontSize.lg,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: fontSize.md,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  text: {
    fontSize: fontSize.sm,
    color: colors.textSoft,
    lineHeight: 20,
    marginBottom: 6,
  },
});

export default SobreScreen;
