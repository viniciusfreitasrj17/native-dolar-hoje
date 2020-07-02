import React, { FC } from "react";
import SafeAreaView from "react-native-safe-area-view";

import CurrentDolar from "../../components/CurrentDolar";
import Converter from "../../components/Converter";

import styles from "./styles";

const Main: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CurrentDolar />

      <Converter />
    </SafeAreaView>
  );
};

export default Main;
