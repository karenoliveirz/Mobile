import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

const greenColor = "rgb(34, 197, 94)";
const whiteColor = "rgb(255, 255, 255)";

const VoteCities = () => {
  const [qxd, setQxd] = useState(0);
  const [qxb, setQxb] = useState(0);
  const [jbe, setJbe] = useState(0);
  const [result, setResult] = useState("");
  const [textButtonResult, setTextButtonResult] = useState("RESULTADO");
  const [colorButton, setColorButton] = useState(greenColor);

  const [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  const qxdVote = () => {
    setQxd(qxd + 1);
  };

  const qxbVote = () => {
    setQxb(qxb + 1);
  };

  const jbeVote = () => {
    setJbe(jbe + 1);
  };

  const funResult = () => {
    if (textButtonResult === "RESULTADO") {
      setColorButton("gray");
      setTextButtonResult("Zerar");
      if (qxd == qxb && qxb == jbe) {
        setResult("Empate triplo!!");
      } else if (qxd > qxb && qxd == jbe) {
        setResult("Quixadá empatou com Jaguaribe na liderança!!");
      } else if (qxd > qxb && qxd > jbe) {
        setResult("Quixadá Venceu!!");
      } else if (qxb > jbe) {
        setResult("Quixeramobim Venceu!!");
      } else if (qxb < jbe) {
        setResult("Jaguaribe Venceu!!");
      } else {
        setResult("Quixeramobim empatou com Jaguaribe na liderança!!");
      }
    } else {
      setColorButton(greenColor);
      setTextButtonResult("RESULTADO");
      setResult("");
      setQxd(0);
      setQxb(0);
      setJbe(0);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <View style={styles.cities}>
          <View style={styles.cityContainer}>
            <Text style={styles.cityText}>Quixadá</Text>
            <Text style={styles.cityText}>{qxd}</Text>
          </View>

          <View style={[styles.cityContainer, { alignSelf: "flex-end" }]}>
            <Text style={styles.cityText}>Quixeramobim</Text>
            <Text style={styles.cityText}>{qxb}</Text>
          </View>

          <View style={styles.cityContainer}>
            <Text style={styles.cityText}>Jaguaribe</Text>
            <Text style={styles.cityText}>{jbe}</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={qxdVote}
            style={styles.cityButton}
            disabled={colorButton === "gray"}
          >
            <Text style={styles.cityTextButton}>Quixadá</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={qxbVote}
            style={styles.cityButton}
            disabled={colorButton === "gray"}
          >
            <Text style={styles.cityTextButton}>Quixeramobim</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={jbeVote}
            style={styles.cityButton}
            disabled={colorButton === "gray"}
          >
            <Text style={styles.cityTextButton}>Jaguaribe</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.winner}>
        <View>
          <Text style={styles.winnerText}>{result}</Text>
        </View>

        <TouchableOpacity
          onPress={funResult}
          style={[styles.winnerButton, { backgroundColor: colorButton }]}
        >
          <Text style={styles.winnerTextButton}>{textButtonResult}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  painel: {
    flex: 2,
    backgroundColor: greenColor,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cities: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cityContainer: {
    alignItems: "center",
  },
  cityText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 5,
    color: "#fff",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cityButton: {
    margin: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: whiteColor,
    padding: 15,
    width: "30%",
    alignItems: "center",
  },
  cityTextButton: {
    color: whiteColor,
  },
  winner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  winnerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 30,
  },
  winnerButton: {
    borderRadius: 5,
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
  winnerTextButton: {
    color: "#fff",
  },
});

export default VoteCities;