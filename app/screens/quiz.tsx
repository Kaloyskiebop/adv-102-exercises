import { QuizScreen } from "@/components/quiz-skeleton";
import { useState } from "react";
import { Alert, StyleSheet ,Button, TextInput, View, Text } from "react-native";

export default function Quiz(){
    const [amount, setAmount] = useState('');
    const [startQuiz, setStartQuiz] = useState(false);
  
    const handleStart = () => {
      const num = parseInt(amount);
      if (num >= 10 && num <= 30) {
        setStartQuiz(true);
      } else {
        Alert.alert('Please enter a number between 10 and 30');
      }
    };
  
    if (startQuiz) {
      return <QuizScreen amount={parseInt(amount)} />;
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter number of questions (10–30)</Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
        />
        <Button title="Start Quiz" onPress={handleStart} />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: "white" },
  title: { fontSize: 20, textAlign: 'center', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});