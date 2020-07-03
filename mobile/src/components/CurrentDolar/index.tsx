import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import api from "../../services/api";
import style from "./style";

const CurrentDolar = () => {
  const [dolar, setDolar] = useState(0 as number);
  const [text, setText] = useState("");
  const [spinnerIsVisible, setSpinnerIsVisible] = useState(false);

  async function loadDolar() {
    setSpinnerIsVisible(true);
    try {
      const { data } = await api.get("/");
      if (data) {
        setTimeout(() => {
          setSpinnerIsVisible(false);
          setDolar(data);
          convert(data);
        }, 1000);
      }
    } catch (err) {
      setSpinnerIsVisible(false);
      setText("Houve um erro na API, tente depois..");
      console.log({ error: err.message });
    }
  }

  function convert(arg: number) {
    const dolarString = arg.toFixed(2).toString(); // to string with 2 fix
    const dolarWithoutComma = dolarString.split(".").join(","); // convert . to ,
    setText(`R$ ${dolarWithoutComma}`); // add dolar string to text
  }

  useEffect(() => {
    loadDolar();
  }, []);

  return (
    <View style={style.container}>
      <Spinner
        visible={spinnerIsVisible}
        textContent={"Loading..."}
        textStyle={{ color: "#FFF" }}
        overlayColor="rgba(0, 0, 0, 0.7)"
      />

      <Text>Dolar Atualmente</Text>

      <Text style={style.dolar}> {text} </Text>

      <TouchableOpacity style={style.button} onPress={loadDolar}>
        <Text>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CurrentDolar;
