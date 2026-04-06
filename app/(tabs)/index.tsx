import FlashCard from "@/components/FlashCard";
import ResultsScreen from "@/components/ResultsScreen";
import { useQuiz } from "@/hooks/useQuiz";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const {
    currentQuestion,
    currentIndex,
    total,
    score,
    isFinished,
    hasAnswered,
    handleAnswer,
    goToNext,
    restart,
  } = useQuiz();

  if (isFinished) {
    return (
      <ResultsScreen
        score={score}
        total={total}
        onRestart={restart}
      />
    )
  }

  return (
    <View style={styles.container}>

      <Text style={styles.progress}>
        Question {currentIndex + 1} / {total}
      </Text>

      <Text style={styles.score}>Score : {score}</Text>

      <FlashCard
        key={currentIndex}
        question={currentQuestion}
        onAnswer={handleAnswer}
      />

      {hasAnswered && (
        <TouchableOpacity style={styles.button} onPress={goToNext}>
          <Text style={styles.buttonText}>
            {currentIndex + 1 >= total ? "Voir les résultats" : "Question suivante →"}
          </Text>
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  progress: {
    fontSize: 14,
    textAlign: "center",
    color: "#888",
    marginBottom: 4,
  },
  score: {
    fontSize: 18,
    textAlign: "center",
    color: "#555",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#3b82f6",
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});