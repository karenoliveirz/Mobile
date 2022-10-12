import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";

const Questao05 = () => {
  const [prox, setProx] = useState("africa");
  const [values, setValues] = useState([]);
  const [resp, setResp] = useState();

  const calculater = (data_) => {
    let pais;
    let value;
    if (prox == "asia" || prox == "africa") {
      pais = data_[0];
      value = data_[0].population;
      for (let i = 0; i < data_.length; i++) {
        if (value < data_[i].population) {
          value = data_[i].population;
          pais = data_[i];
        }
      }
    } else {
      pais = data_[0];
      value = data_[0].population;
      for (let i = 0; i < data_.length; i++) {
        if (value > data_[i].population) {
          value = data_[i].population;
          pais = data_[i];
        }
      }
    }
    setResp(pais.name);
  };

  const americas = () => {
    setProx("americas");
  };

  const asia = () => {
    setProx("asia");
  };

  const result = () => {
    if (prox == "asia" || prox == "africa") {
      return (
        <View>
          <Text style={styles.title}>O maior país:{" " + resp}</Text>
        </View>
      );
    }
    return (
      <View>
        <Text style={styles.title}>O menor país:{" " + resp}</Text>
      </View>
    );
  };

  useEffect(() => {
    fetch(`https://restcountries.com/v2/region/${prox}?fields=name,population`)
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
  }, [prox]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.population}>{item.population}</Text>
    </View>
  );

  return (
    <View>
      {result()}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton} onPress={americas}>
          América
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton} onPress={asia}>
          Asía
        </Text>
      </TouchableOpacity>
      <FlatList data={values} renderItem={renderItem} />
    </View>
  );
};

export default Questao05;
