import React from "react";
import { Text } from "react-native";

import style from "./style";

const Separator = () => {
  return (
    <Text style={style.hr}>
      ----------------------------------------------------
    </Text>
  );
};

export default Separator;
