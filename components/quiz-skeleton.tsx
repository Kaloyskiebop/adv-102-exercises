import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

interface Props {
  amount: number;
}

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export const QuizScreen: React.FC<Props> = ({ amount }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple`)
      .then(res => res.json())
      .then(data => setQuestions(data.results))
      .catch(err => console.error(err));
  }, []);

  if (questions.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading Questions...</Text>
      </View>
    );
  }

  const currentQuestion = questions[currentIndex];
  const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort();

  const handleAnswer = (answer: string) => {
    if (answer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Quiz Completed!</Text>
        <Text style={styles.result}>Your Score: {score} / {questions.length}</Text>
        <Button title="Back to Start" onPress={() => location.reload()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{decodeURIComponent(currentQuestion.question)}</Text>
      {answers.map((answer, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.option}
          onPress={() => handleAnswer(answer)}
        >
          <Text>{decodeURIComponent(answer)}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.progress}>Question {currentIndex + 1} of {questions.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: "white" },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" },
  question: { fontSize: 18, marginBottom: 20 },
  option: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  progress: { marginTop: 20, textAlign: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  result: { fontSize: 20, marginBottom: 30 },
});
