import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import style from "./style";

const Converter = () => {
  return (
    <View style={style.container}>
      <View>
        <TextInput
          style={style.input}
          placeholder="Real aqui, ex: 50 5.6 70.25"
        />
      </View>

      <View>
        <TouchableOpacity style={style.button}>
          <Text>Converter</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Convertido</Text>
      </View>
    </View>
  );
};

export default Converter;
