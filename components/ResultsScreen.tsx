import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    score: number;
    total: number;
    onRestart: () => void;
};

export default function ResultsScreen({ score, total, onRestart }: Props) {
    const percentage = Math.round((score / total) * 100);

    const getMessage = () => {
        if (percentage === 100) return "Parfait ! 🏆";
        if (percentage >= 80) return "Excellent ! 🎉";
        if (percentage >= 60) return "Bien joué ! 👍";
        if (percentage >= 40) return "Pas mal ! 💪";
        return "Continue à t'entraîner ! 📚";
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Résultats</Text>

            <View style={styles.scoreCard}>
                <Text style={styles.percentage}>{percentage}%</Text>
                <Text style={styles.score}>{score} / {total} bonnes réponses</Text>
                <Text style={styles.message}>{getMessage()}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={onRestart}>
                <Text style={styles.buttonText}>Recommencer 🔄</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 32,
    color: "#333",
  },
  scoreCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 32,
    alignItems: "center",
    width: "100%",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 32,
  },
  percentage: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#3b82f6",
  },
  score: {
    fontSize: 18,
    color: "#555",
    marginTop: 8,
  },
  message: {
    fontSize: 22,
    marginTop: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#3b82f6",
    padding: 16,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});