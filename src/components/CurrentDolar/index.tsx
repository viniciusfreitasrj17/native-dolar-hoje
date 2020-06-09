import React from "react";
import { View, Text } from "react-native";

import style from "./style";

const CurrentDolar = () => {
  return (
    <View style={style.container}>
      <Text>Dolar Atualmente</Text>
      <Text style={style.dolar}>R$ 0,00</Text>
    </View>
  );
};

export default CurrentDolar;
