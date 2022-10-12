import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Questao02 from "./src/Components/Questao02";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.question}>Questao 2</Text>
        </View>
        <Questao02 />
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
    backgroundColor: "#dccce5",
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
