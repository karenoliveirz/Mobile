import { View, Text, Button } from "react-native";
import { estilos } from "../css/CSS";

const homeProfessor = (props) => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.cabecalho}>Professor Home</Text>
      <View style={estilos.botao}>
        <Button
          title="Criar Professor"
          onPress={() => props.navigation.navigate("criarProfessor")}
        />
      </View>
      <View style={estilos.botao}>
        <Button
          title="Listar Professor"
          onPress={() => props.navigation.navigate("listarProfessor")}
        />
      </View>
    </View>
  );
};
export default homeProfessor;
