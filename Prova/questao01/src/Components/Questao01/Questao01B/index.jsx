import { Text, View } from "react-native";
import { styles } from "./styles";

let disciplinas = ["PI-IV", "PIW", "CDP","UX"];

const renderDisciplina = (disciplina) => {
  return <Text style={styles.disciplina}>{disciplina}</Text>;
};

const Questao01B = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questão 01B</Text>
      <View>
        {disciplinas.map((disciplina) => renderDisciplina(disciplina))}
      </View>
    </View>
  );
};

export default Questao01B;
