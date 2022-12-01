import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { estilos } from "../css/CSS";

import ProfessorService from "../service/ProfessorService";
import { firestoreDb } from "../firebase/firebase_config";

const criarProfessor = (props) => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [salario, setSalario] = useState("");

  const acaoBotaoSubmeter = () => {
    ProfessorService.criar(
      firestoreDb,
      (id) => {
        alert(`Professor ${id} está inserido!`);
        props.navigation.navigate("listarProfessor");
      },
      { nome, curso, salario }
    );
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.cabecalho}>Criar Professor</Text>
      <TextInput
        style={estilos.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(nome) => setNome(nome)}
      />
      <TextInput
        style={estilos.input}
        placeholder="Curso"
        value={curso}
        onChangeText={(curso) => setCurso(curso)}
      />
      <TextInput
        style={estilos.input}
        placeholder="Salário"
        value={salario}
        keyboardType="numeric"
        onChangeText={(salario) => setSalario(salario)}
      />
      <View style={estilos.botao}>
        <Button title="Submeter" onPress={acaoBotaoSubmeter} />
      </View>
    </View>
  );
};

export default criarProfessor;
