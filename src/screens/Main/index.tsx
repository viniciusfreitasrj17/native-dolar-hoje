import React, { FC } from "react";
import SafeAreaView from "react-native-safe-area-view";

import CurrentDolar from "../../components/CurrentDolar";
import Separator from "../../components/Separator";
import Converter from "../../components/Converter";

import styles from "./styles";

const Main: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CurrentDolar />

      <Separator />

      <Converter />
    </SafeAreaView>
  );
};

export default Main;
