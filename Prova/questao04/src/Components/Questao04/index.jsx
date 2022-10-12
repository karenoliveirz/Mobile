import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";

const Questao04 = () => {
  const [values, setValues] = useState([]);
  const [resp, setResp] = useState();

  const calculater = (data_) => {
    let pais = data_[0];
    let value = data_[0].population;
    for (let i = 0; i < data_.length; i++) {
      if (value < data_[i].population) {
        value = data_[i].population;
        pais = data_[i];
      }
    }
    setResp(pais.name);
  };

  const result = () => {
    return (
      <View>
        <Text style={styles.title}>O maior país: {resp}</Text>
      </View>
    );
  };

  useEffect(() => {
    fetch("https://restcountries.com/v2/region/africa?fields=name,population")
      .then((res) => {
        return res.json();
      })
      .then((data_) => {
        setValues(data_);
        calculater(data_);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.population}>{item.population}</Text>
    </View>
  );

  return (
    <View>
      {result()}
      <FlatList data={values} renderItem={renderItem} />
    </View>
  );
};

export default Questao04;
