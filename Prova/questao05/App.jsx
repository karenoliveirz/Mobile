import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Questao05 from "./src/Components/Questao05";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.question}>Questao 5</Text>
        </View>
        <Questao05 />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  title: {
    marginBottom: 20,
    alignItems: "center",
    textAlign: "center",
  },
  question: {
    fontWeight: "bold",
  }
});
