import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import api from "../../services/api";
import style from "./style";

const CurrentDolar = () => {
  const [dolar, setDolar] = useState(0 as number);
  const [text, setText] = useState("");

  async function loadDolar() {
    const { data } = await api.get("/");

    setDolar(data);
  }

  function convert() {
    const dolarString = dolar.toFixed(2).toString(); // to string with 2 fix
    const dolarWithoutComma = dolarString.split(".").join(","); // convert . to ,
    setText(dolarWithoutComma); // add dolar string to text
  }

  useEffect(() => {
    loadDolar();
  }, []);

  useEffect(() => {
    convert();
  }, [dolar]);

  return (
    <View style={style.container}>
      <Text>Dolar Atualmente</Text>

      <Text style={style.dolar}>{`R$ ${text}`}</Text>

      <TouchableOpacity style={style.button} onPress={loadDolar}>
        <Text>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CurrentDolar;
