import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edita src/app/index.tsx Es la pagina principal.</Text>
      <Text className="text-2xl font-bold">Donjoe.</Text>
      <Text className="text-5xl font-bold text-neutral-400">Donjoe.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
