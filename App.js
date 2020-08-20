import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [allGoals, setAllGoals] = useState([]);

  const handleInput = (input) => {
    setGoal(input);
  };

  const handleAddButton = () => {
    setAllGoals((preveState) => [...preveState, goal]);
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal"
          style={styles.input}
          onChangeText={handleInput}
          value={goal}
        />
        <Button title="Add" onPress={handleAddButton} />
      </View>

      <FlatList
        data={allGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
