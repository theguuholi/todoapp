import React from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
type Props = {
  name: string;
};
const Task = ({ name }: Props) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Task;
