import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";

const Questao03 = () => {
  const [prox, setProx] = useState(1);
  const [values, setValues] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${prox}`)
      .then((res) => {
        return res.json();
      })
      .then((data_) => {
        setValues(data_.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [prox]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton} onPress={() => setProx(prox + 1)}>
          Prox
        </Text>
      </TouchableOpacity>
      <FlatList data={values} renderItem={renderItem} />
    </View>
  );
};

export default Questao03;
