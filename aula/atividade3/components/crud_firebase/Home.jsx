import { View, Text, Button } from "react-native";
import { estilos } from "./css/CSS";

const Home = (props) => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.cabecalho}>Home</Text>
      <View style={estilos.botao}>
        <Button
          title="Estudante"
          onPress={() => props.navigation.navigate("HomeEstudante")}
        />
      </View>
      <View style={estilos.botao}>
        <Button
          title="Professor"
          onPress={() => props.navigation.navigate("HomeProfessor")}
        />
      </View>
    </View>
  );
};
export default Home;
