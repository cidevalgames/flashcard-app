# 📚 Flashcard Quiz App

> A simple mobile quiz app built with React Native & Expo — developed as a learning project.
> 
> Une application mobile de quiz par flashcards développée avec React Native & Expo — projet d'entraînement.

---

## 🇬🇧 English

### Description
A mobile quiz application where users answer multiple-choice questions, get instant visual feedback on their answers, and see their final score at the end. Built as a frontend-only training project to learn React Native fundamentals.

### Stack
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo Router](https://expo.github.io/router/)

### Features
- ✅ Multiple-choice questions with instant feedback
- ✅ Green / red answer highlighting
- ✅ Score tracking throughout the quiz
- ✅ Final results screen with percentage
- ✅ Restart the quiz at any time

### Project Structure
```text
flashcard-app/
├── app/
│   ├── (tabs)/
│   │   └── index.tsx        # Main quiz screen
│   └── _layout.tsx
├── components/
│   ├── FlashCard.tsx         # Question card with answer choices
│   └── ResultsScreen.tsx     # Final score screen
├── data/
│   └── questions.ts          # Static quiz questions dataset
├── hooks/
│   └── useQuiz.ts            # Quiz logic (score, navigation, state)
└── constants/
```

### Installation & Launch
```bash
# Clone the repository
git clone https://github.com/cidevalgames/flashcard-app.git
cd flashcard-app

# Install dependencies
npm install

# Start the app
npx expo start
```

Then press `a` to open on Android emulator, or scan the QR code with **Expo Go** on your phone.

---

## 🇫🇷 Français

### Description
Une application mobile de quiz où l'utilisateur répond à des questions à choix multiples, reçoit un retour visuel instantané sur ses réponses et consulte son score final. Projet frontend uniquement pour apprendre les bases de React Native.

### Stack
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo Router](https://expo.github.io/router/)

### Fonctionnalités
- ✅ Questions à choix multiples avec feedback instantané
- ✅ Mise en évidence des réponses en vert / rouge
- ✅ Suivi du score tout au long du quiz
- ✅ Écran de résultats final avec pourcentage
- ✅ Redémarrage du quiz à tout moment

### Structure du projet
```text
flashcard-app/
├── app/
│   ├── (tabs)/
│   │   └── index.tsx        # Écran principal du quiz
│   └── _layout.tsx
├── components/
│   ├── FlashCard.tsx         # Carte de question avec choix de réponses
│   └── ResultsScreen.tsx     # Écran du score final
├── data/
│   └── questions.ts          # Dataset statique des questions
├── hooks/
│   └── useQuiz.ts            # Logique du quiz (score, navigation, état)
└── constants/
```

### Installation & Lancement
```bash
# Cloner le repository
git clone https://github.com/cidevalgames/flashcard-app.git
cd flashcard-app

# Installer les dépendances
npm install

# Lancer l'application
npx expo start
```

Appuie sur `a` pour ouvrir sur l'émulateur Android, ou scanne le QR code avec **Expo Go** sur ton téléphone.

---

## 📁 Git Flow

This project follows the **git-flow** branching strategy:

- `main` → stable production code
- `develop` → integration branch
- `feature/*` → one branch per feature
- `release/*` → version preparation
- `bugfix/*` → bug fixes on develop

---

*Built with ❤️ by [cidevalgames](https://github.com/cidevalgames)*