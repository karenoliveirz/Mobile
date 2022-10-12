import { Text, View } from "react-native";
import { styles } from "./styles";

const Questao01A = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questão 01A</Text>
      <Text>Nome: Karen</Text>
      <Text>Sobrenome: Oliveira</Text>
      <Text>Curso: DD</Text>
    </View>
  );
};

export default Questao01A;
