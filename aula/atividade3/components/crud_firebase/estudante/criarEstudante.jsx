import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { estilos } from "../css/CSS";

import EstudanteService from "../service/EstudanteService";
import { firestoreDb } from "../firebase/firebase_config";

const criarEstudante = (props) => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [ira, setIra] = useState("");

  const acaoBotaoSubmeter = () => {
    EstudanteService.criar(
      firestoreDb,
      (id) => {
        alert(`Estudante ${id} está inserido!`);
        props.navigation.navigate("listarEstudante");
      },
      { nome, curso, ira }
    );
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.cabecalho}>Criar Estudante</Text>
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
        placeholder="IRA"
        value={ira}
        keyboardType="numeric"
        onChangeText={(ira) => setIra(ira)}
      />
      <View style={estilos.botao}>
        <Button title="Submeter" onPress={acaoBotaoSubmeter} />
      </View>
    </View>
  );
};

export default criarEstudante;
