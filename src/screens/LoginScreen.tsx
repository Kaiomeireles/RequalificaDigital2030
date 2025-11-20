// src/screens/LoginScreen.tsx
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '../navigation/RootNavigator';
import { colors, spacing, radius, fontSize } from '../styles/theme';

type LoginScreenNavProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavProp;
};

const STORAGE_KEY_EMAIL = '@requalifica_email';
const STORAGE_KEY_AREA = '@requalifica_area';

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [areaInteresse, setAreaInteresse] = useState('IA');

  useEffect(() => {
    const carregar = async () => {
      const sEmail = await AsyncStorage.getItem(STORAGE_KEY_EMAIL);
      const sArea = await AsyncStorage.getItem(STORAGE_KEY_AREA);
      if (sEmail) setEmail(sEmail);
      if (sArea) setAreaInteresse(sArea);
    };
    carregar();
  }, []);

  const validar = () => {
    if (!email.includes('@')) {
      Alert.alert('Erro', 'Informe um e-mail válido.');
      return false;
    }
    if (senha.length < 4) {
      Alert.alert('Erro', 'Senha deve ter ao menos 4 caracteres.');
      return false;
    }
    return true;
  };

  const entrar = async () => {
    if (!validar()) return;
    await AsyncStorage.setItem(STORAGE_KEY_EMAIL, email);
    await AsyncStorage.setItem(STORAGE_KEY_AREA, areaInteresse);
    navigation.replace('Main');
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.gradientBg}>
        <View style={styles.blurCircleBig} />
        <View style={styles.blurCircleSmall} />

        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.logoText}>SkillUp+</Text>
            <Text style={styles.appTitle}>RequalificaDigital2030</Text>
            <Text style={styles.appSubtitle}>
              Plataforma de requalificação digital para o trabalho em 2030+.
            </Text>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                value={email}
                placeholder="seuemail@exemplo.com"
                placeholderTextColor={colors.textSoft}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                style={styles.input}
                value={senha}
                placeholder="Digite sua senha"
                placeholderTextColor={colors.textSoft}
                secureTextEntry
                onChangeText={setSenha}
              />
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Área de interesse</Text>
              <View style={styles.pickerBox}>
                <Picker
                  selectedValue={areaInteresse}
                  onValueChange={setAreaInteresse}
                  dropdownIconColor={colors.text}
                >
                  <Picker.Item label="Inteligência Artificial" value="IA" />
                  <Picker.Item label="Soft Skills" value="SoftSkills" />
                  <Picker.Item label="Gestão e Liderança" value="Gestao" />
                  <Picker.Item label="Sustentabilidade" value="Sustentabilidade" />
                </Picker>
              </View>
            </View>

            <View style={styles.primaryButtonWrapper}>
              <View style={styles.primaryButtonBg}>
                <Button title="Entrar na jornada" onPress={entrar} color="#FFFFFF" />
              </View>
            </View>

            <Text style={styles.footer}>
              Construído sobre IA, automação e aprendizado contínuo. Alinhado aos ODS 4, 8, 9 e 10.
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bgStart,
  },
  gradientBg: {
    flex: 1,
    backgroundColor: colors.bgEnd,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  blurCircleBig: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: colors.primarySoft,
    opacity: 0.22,
    top: -40,
    right: -80,
  },
  blurCircleSmall: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: colors.accent,
    opacity: 0.2,
    bottom: -40,
    left: -40,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: radius.xl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 25 },
  },
  logoText: {
    fontSize: fontSize.sm,
    color: colors.accent,
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: spacing.sm,
  },
  appTitle: {
    fontSize: fontSize.xxl,
    color: colors.text,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  appSubtitle: {
    fontSize: fontSize.sm,
    color: colors.textSoft,
    marginBottom: spacing.xl,
  },
  fieldGroup: {
    marginBottom: spacing.md,
  },
  label: {
    fontSize: fontSize.sm,
    color: colors.textSoft,
    marginBottom: spacing.xs,
  },
  input: {
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    color: colors.text,
    backgroundColor: 'rgba(15,23,42,0.9)',
  },
  pickerBox: {
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: 'rgba(15,23,42,0.9)',
    overflow: 'hidden',
  },
  primaryButtonWrapper: {
    marginTop: spacing.lg,
  },
  primaryButtonBg: {
    borderRadius: radius.lg,
    overflow: 'hidden',
    backgroundColor: colors.primarySoft,
  },
  footer: {
    marginTop: spacing.lg,
    fontSize: fontSize.xs,
    color: colors.textSoft,
  },
});

export default LoginScreen;
