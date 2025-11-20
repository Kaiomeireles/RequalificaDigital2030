# 🚀 RequalificaDigital2030

> Plataforma de requalificação profissional para o trabalho em 2030+, alinhada aos ODS da ONU.

Aplicativo desenvolvido para a **Global Solution – Mobile Development & IoT (FIAP)**, com foco em apoiar estudantes e profissionais na jornada de **requalificação digital** frente ao impacto da **Inteligência Artificial, automação e análise de dados**.

---

## 🎯 Propósito do App

O **RequalificaDigital2030** foi pensado para:

- Apoiar a **requalificação profissional** para o futuro do trabalho;
- Facilitar o acesso a **trilhas de aprendizado** em áreas emergentes (IA, Soft Skills, Sustentabilidade, Gestão);
- Permitir que o usuário **visualize seu progresso** ao longo da jornada;
- Conectar educação, tecnologia e inclusão aos **ODS 4, 8, 9 e 10**.

---

## 🌍 Alinhamento aos ODS da ONU

O app dialoga diretamente com:

- **ODS 4 – Educação de Qualidade:** acesso à capacitação tecnológica e contínua;  
- **ODS 8 – Trabalho Decente e Crescimento Econômico:** requalificação para novas oportunidades;  
- **ODS 9 – Indústria, Inovação e Infraestrutura:** uso de tecnologia para inovação em educação;  
- **ODS 10 – Redução das Desigualdades:** inclusão de públicos em transição de carreira ou em vulnerabilidade.

---

## 🧭 Arquitetura de Navegação (Híbrida)

A navegação segue o padrão solicitado na GS: **Stack + Drawer + Tabs**.

- **Stack Navigator**
  - `Login`
  - `Main` (agrupa o Drawer)
  - `CursoDetalhe` (detalhes da trilha selecionada)

- **Drawer Navigator**
  - `Início` (contém as tabs)
  - `Meu Perfil`
  - `Sobre o App`

- **Bottom Tab Navigator**
  - `Home` – visão geral da jornada
  - `Trilhas` – lista de trilhas de aprendizado
  - `Progresso` – indicadores de evolução

---

## 📱 Telas da Aplicação

> As imagens abaixo podem ser salvas na pasta `docs/` ou `assets/` do repositório e referenciadas conforme o caminho que vocês escolherem.

### 🔐 Login  
Tela de autenticação e escolha da **área de interesse** do usuário.

<!-- ![Tela de Login](docs/login.png) -->

---

### 🏠 Início (Home)  
Apresenta o contexto da requalificação, próximos passos sugeridos e conexão com os ODS.

<!-- ![Tela Home](docs/home.png) -->

---

### 📚 Trilhas  
Lista de trilhas com título, descrição e **progresso** em cada uma.

<!-- ![Tela Trilhas](docs/trilhas.png) -->

---

### 📘 Detalhe da Trilha  
Mostra informações detalhadas da trilha selecionada e o progresso atual.

<!-- ![Tela Detalhe da Trilha](docs/detalhe-trilha.png) -->

---

### 📊 Progresso  
Resumo visual da jornada do usuário: trilhas iniciadas, concluídas, horas estimadas e competências em foco.

<!-- ![Tela Progresso](docs/progresso.png) -->

---

### 👤 Meu Perfil  
Permite que o usuário personalize **nome** e **resumo profissional**, com dados salvos localmente.

<!-- ![Tela Perfil](docs/perfil.png) -->

---

### ℹ️ Sobre o App  
Explica o contexto da Global Solution, o propósito do app e os ODS envolvidos.

<!-- ![Tela Sobre](docs/sobre.png) -->

---

### 📂 Drawer (Menu Lateral)  
Menu lateral que dá acesso rápido a **Início**, **Meu Perfil** e **Sobre o App**.

<!-- ![Drawer Aberto](docs/drawer.png) -->

---

### 🗂 Estrutura do Projeto  
Organização das pastas e arquivos principais do app.

<!-- ![Estrutura de Pastas](docs/estrutura-projeto.png) -->

---

## 🧩 Principais Funcionalidades & Componentes

O projeto utiliza os componentes e conceitos pedidos no enunciado:

- Layout e UI:
  - `View`, `ScrollView`, `Text`
  - `TextInput`, `Button`, `TouchableOpacity`
  - `Alert`
  - `Picker` (seleção da área de interesse)
- Navegação:
  - `@react-navigation/stack`
  - `@react-navigation/drawer`
  - `@react-navigation/bottom-tabs`
- Lógica & Hooks:
  - `useState`, `useEffect`
- Persistência (desafio atendido):
  - `@react-native-async-storage/async-storage`  
    - Salva **e-mail** e **área de interesse** do usuário na tela de Login;
    - Salva **nome** no perfil do usuário.

---

## 🛠 Tecnologias Utilizadas

- **React Native** com **Expo**
- **TypeScript**
- **React Navigation** (Stack, Drawer, Tabs)
- **AsyncStorage** para armazenamento local
- **Expo Web** para execução em navegador
- Tema visual **NeoFuture Dark** (UI futurista, focada em tecnologia e IA)

---

## ▶️ Como Rodar o Projeto

```bash
# Clonar o repositório
git clone https://github.com/SEU-USUARIO/requalificadigital2030.git
cd requalificadigital2030

# Instalar dependências
npm install

# Instalar dependências de navegação (Expo)
npx expo install @react-navigation/native @react-navigation/stack \
@react-navigation/bottom-tabs @react-navigation/drawer \
react-native-screens react-native-safe-area-context \
react-native-gesture-handler react-native-reanimated \
@react-native-async-storage/async-storage @react-native-picker/picker

# Rodar no navegador (web)
npm run web

# Ou abrir no app Expo Go (Android/iOS)
npx expo start
