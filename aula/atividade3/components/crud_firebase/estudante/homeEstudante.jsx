import { View, Text, Button } from "react-native";
import { estilos } from "../css/CSS";

const homeEstudante = (props) => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.cabecalho}>Estudante Home</Text>
      <View style={estilos.botao}>
        <Button
          title="Criar Estudante"
          onPress={() => props.navigation.navigate("criarEstudante")}
        />
      </View>
      <View style={estilos.botao}>
        <Button
          title="Listar Estudante"
          onPress={() => props.navigation.navigate("listarEstudante")}
        />
      </View>
    </View>
  );
};
export default homeEstudante;
