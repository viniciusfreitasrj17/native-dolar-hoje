import React, { FC } from "react";
import { Text, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import styles from "./styles";

const Main: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hellooo World !!!</Text>
    </SafeAreaView>
  );
};

export default Main;
