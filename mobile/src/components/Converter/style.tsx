import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    borderTopWidth: 1,
    paddingTop: 5,
    width: width - 70,
  },
  input: {
    height: 50,
    width: 200,
    borderWidth: 1,
    padding: 5,
    textAlign: "center",
    backgroundColor: "#eee",
  },
  button: {
    width: 90,
    height: 40,
    backgroundColor: "#ffaa00",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  convert: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default style;
