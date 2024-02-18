import {
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import Dashboard from "../../components/Dashboard";
import { useState } from "react";
import Task from "../../components/Task";

type task = {
  description: string;
  completed: false;
};

export default function Home() {
  const [tasks, setTasks] = useState<task[]>([]);
  const [newTask, setNewTask] = useState<task>();

  function handleTaskAdd() {
    console.log(newTask);
    if (tasks.includes(newTask.description)) {
      return Alert.alert(
        "Participante Existe",
        "Ja existe alguem com esse nome!"
      );
    }
    setTasks((prevState) => [...prevState, newTask]);
    setNewTask("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elxpro</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          placeholderTextColor="#6b6b6b"
          onChangeText={setNewTask}
          value={newTask}
        />
        <Pressable style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.textButton}>+</Text>
        </Pressable>
      </View>

      <Dashboard />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Task key={item} name={item} />}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            You still do not have tasks for now. Create tasks to organize
            yourself
          </Text>
        )}
      ></FlatList>
    </View>
  );
}
