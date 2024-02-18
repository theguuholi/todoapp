import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  title: {
    color: "blue",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  emptyList: {
    color: "white",
    textAlign: "center",
    marginTop: 16,
  },
  input: {
    backgroundColor: "#1f1e25",
    height: 56,
    flex: 1,
    borderRadius: 5,
    color: "#fdfcfe",
    padding: 16,
    borderColor: "blue",
    fontSize: 16,
    marginRight: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 24,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
});
