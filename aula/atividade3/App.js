import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RoutesCrud from "./components/crud_firebase/RoutesCrud";

export default () => {
  return (
    <NavigationContainer>
      <RoutesCrud />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
