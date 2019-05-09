import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  header: {
    flex: 1,
    backgroundColor: "#bdf9ed",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "#f2f9bd",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  footer: {
    flex: 1,
    backgroundColor: "#bdf9c4",
    alignItems: "center",
    justifyContent: "center"
  },
  circulo: {
    width: 100,
    height: 100,
    backgroundColor: "#f47f61",
    borderRadius: 50
  }
});

const Circulo = props => <View style={styles.circulo} />;

export default function Flex() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Circulo />
      </View>
      <View style={styles.content}>
        <Circulo />
        <Circulo />
        <Circulo />
      </View>
      <View style={styles.footer}>
        <Circulo />
      </View>
    </View>
  );
}