import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  amount: number;
};
const Report = ({ name, amount }: Props) => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
};
export default Report;
