import React, { FC, useState, useEffect, RefObject, createRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import InputNumber from "../InputNumber";
import style from "./style";

interface State {
  getDataApi(): any;
}

type Props = State;

const Converter: FC<Props> = ({ getDataApi }) => {
  const [real, setReal] = useState(0);
  const [resultado, setResultado] = useState("Convertido");
  const [emptyInput, setEmptyInput] = useState({});
  const refInput: RefObject<HTMLInputElement> = createRef();

  const Calculator = async () => {
    if (real) {
      const data = await getDataApi();

      const convert = (real * data).toFixed(2).split(".").join(",").toString();
      // console.log(convert);
      setResultado(`R$ ${convert.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`);
    } else {
      const color = { borderColor: "#F00" };
      refInput.current?.focus();
      setEmptyInput(color);

      alert("Preencha o campo");
    }

    return;
  };

  useEffect(() => {
    refInput.current?.focus();
  }, [resultado]);

  useEffect(() => {
    emptyInput && real ? setEmptyInput({}) : null;
  }, [real]);

  return (
    <View style={style.container}>
      <View>
        <View>
          <Text style={style.convert}> Dolar para Real </Text>
        </View>

        <InputNumber
          placeholder="Dolar aqui, ex: 50 5.6 70.25"
          style={[style.input, emptyInput]}
          onValueChange={(value: number) => setReal(value)}
          value={real}
          refI={refInput}
        />
      </View>

      <View>
        <TouchableOpacity style={style.button} onPress={Calculator}>
          <Text>Converter</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={style.convert}> {resultado} </Text>
      </View>
    </View>
  );
};

export default Converter;
