import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = ({ handleAdd, isVisible }) => {
  const [goal, setGoal] = useState("");

  const handleInput = (input) => {
    setGoal(input);
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal"
          style={styles.input}
          onChangeText={handleInput}
          value={goal}
        />
        <Button title="Add" onPress={() => handleAdd(goal)} />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
  },
  input: {
    width: "80%",
    alignSelf: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginTop: 50,
  },
});
