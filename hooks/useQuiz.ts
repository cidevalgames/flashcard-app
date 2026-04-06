import { questions } from "@/data/questions";
import { useState } from "react";

export function useQuiz() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [hasAnswered, setHasAnswered] = useState(false);

    const currentQuestion = questions[currentIndex];
    const total = questions.length;

    const handleAnswer = (isCorrect: boolean) => {
        if (hasAnswered) return;
        setHasAnswered(true);
        if (isCorrect) setScore((prev) => prev + 1);
    };

    const goToNext = () => {
        if (currentIndex + 1 >= total) {
            setIsFinished(true);
        } else {
            setCurrentIndex((prev) => prev + 1);
            setHasAnswered(false);
        }
    };

    const restart = () => {
        setCurrentIndex(0);
        setScore(0);
        setIsFinished(false);
        setHasAnswered(false);
    };

    return {
        currentQuestion,
        currentIndex,
        total,
        score,
        isFinished,
        hasAnswered,
        handleAnswer,
        goToNext,
        restart,
    };
}