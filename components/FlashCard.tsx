import { Question } from "@/data/questions";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    question: Question;
    onAnswer: (isCorrect: boolean) => void;
};

export default function FlashCard({ question, onAnswer }: Props) {
    const [selected, setSelected] = useState<string | null>(null);

    const handlePress = (choice: string) => {
        if (selected) return;
        setSelected(choice);
        onAnswer(choice === question.answer);
    };

    return (
        <View style={styles.card}>
            <Text style={styles.question}>{question.question}</Text>

            <View style={styles.choices}>
                {question.choices.map((choice) => {
                    let bgColor = "#f0f0f0";
                    if (selected === choice) {
                        bgColor = choice === question.answer ? "#4CAF50" : "#f44336";
                    } else if (selected && choice === question.answer) {
                        bgColor = "#4CAF50";
                    }

                    return (
                        <TouchableOpacity
                            key={choice}
                            style={[styles.choice, { backgroundColor: bgColor }]}
                            onPress={() => handlePress(choice)}
                        >
                            <Text style={styles.choiceText}>{choice}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 24,
        margin: 16,
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    question: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 24,
        textAlign: "center",
        color: "#333",
    },
    choices: {
        gap: 12,
    },
    choice: {
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
    },
    choiceText: {
        fontSize: 16,
        color: "#333",
    },
});