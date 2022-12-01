import { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { estilos } from "../css/CSS";

import EstudanteService from "../service/EstudanteService";
import { firestoreDb } from "../firebase/firebase_config";

const editarEstudante = (props) => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [ira, setIra] = useState("");

  useEffect(() => {
    EstudanteService.recuperar(
      firestoreDb,
      (estudante) => {
        setNome(estudante.nome);
        setCurso(estudante.curso);
        setIra(estudante.ira);
      },
      props.route.params.id
    );
  }, []);

  const acaoBotaoSubmeter = () => {
    EstudanteService.atualizar(
      firestoreDb,
      () => {
        alert("Estudante está atualizado!");
        props.navigation.navigate("listarEstudante");
      },
      props.route.params.id,
      { nome, curso, ira }
    );
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.cabecalho}>Editar Estudante</Text>
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
        <Button title="Atualizar" onPress={acaoBotaoSubmeter} />
      </View>
    </View>
  );
};

export default editarEstudante;
