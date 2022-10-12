import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const Questao02 = () => {
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();
  const [result, setResult] = useState();

  const sum = () => {
    if (numberOne != null && numberTwo != null) {
      let num1 = parseFloat(numberOne);
      let num2 = parseFloat(numberTwo);
      setResult(num1 + num2);
      setNumberOne();
      setNumberTwo();
    } else {
      setResult("Invalid value");
    }
  };

  const sub = () => {
    if (numberOne != null && numberTwo != null) {
      let num1 = parseFloat(numberOne);
      let num2 = parseFloat(numberTwo);
      setResult(num1 - num2);
      setNumberOne();
      setNumberTwo();
    } else {
      setResult("Invalid value");
    }
  };

  const mult = () => {
    if (numberOne != null && numberTwo != null) {
      let num1 = parseFloat(numberOne);
      let num2 = parseFloat(numberTwo);
      setResult(num1 * num2);
      setNumberOne();
      setNumberTwo();
    } else {
      setResult("Invalid value");
    }
  };

  const div = () => {
    if (numberOne != null && numberTwo != null) {
      let num1 = parseFloat(numberOne);
      let num2 = parseFloat(numberTwo);
      if (num2 == 0) {
        setResult("Invalid value, division by zero");
      } else {
        setResult((num1 / num2).toFixed(2));
      }
      setNumberOne();
      setNumberTwo();
    } else {
      setResult("Invalid value");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={setNumberOne}
        value={numberOne}
        placeholder="Número 01"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={setNumberTwo}
        value={numberTwo}
        placeholder="Número 02"
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={sum} style={styles.button}>
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={sub} style={styles.button}>
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={mult} style={styles.button}>
        <Text style={styles.textButton}>*</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={div} style={styles.button}>
        <Text style={styles.textButton}>/</Text>
      </TouchableOpacity>
      <Text style={styles.textResult}>{result}</Text>
    </View>
  );
};

export default Questao02;
