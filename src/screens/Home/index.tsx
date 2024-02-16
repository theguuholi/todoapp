import { View, Text, Pressable, TextInput } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elxpro</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          placeholderTextColor="#6b6b6b"
        />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>

      <View>
        <View>
          <Text>Created</Text>
          <Text>0</Text>
        </View>
        <View>
          <Text>Completed</Text>
          <Text>0</Text>
        </View>
      </View>
    </View>
  );
}
