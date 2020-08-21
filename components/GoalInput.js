import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = ({ handleAdd }) => {
  const [goal, setGoal] = useState("");

  const handleInput = (input) => {
    setGoal(input);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your goal"
        style={styles.input}
        onChangeText={handleInput}
        value={goal}
      />
      <Button title="Add" onPress={() => handleAdd(goal)} />
    </View>
  );
};



export default GoalInput;

const styles = StyleSheet.create({
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
  }
});
