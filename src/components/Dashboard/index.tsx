import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import Report from "./Report";

const Dashboard = () => {
  return (
    <View style={styles.dash}>
      <Report name="Created" amount={0} />
      <Report name="Completed" amount={0} />
    </View>
  );
};

export default Dashboard;
