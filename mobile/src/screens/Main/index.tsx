import React, { FC } from "react";
import SafeAreaView from "react-native-safe-area-view";

import CurrentDolar from "../../components/CurrentDolar";
import Converter from "../../components/Converter";
import api from "../../services/api";

import styles from "./styles";

const Main: FC = () => {
  const getDataApi = async () => {
    const { data } = await api.get("/");
    console.log(data);
    return data;
  };

  return (
    <SafeAreaView style={styles.container}>
      <CurrentDolar getDataApi={getDataApi} />

      <Converter getDataApi={getDataApi} />
    </SafeAreaView>
  );
};

export default Main;
