import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = ({ handleAdd, isVisible }) => {
  const [goal, setGoal] = useState("");

  const handleInput = (input) => {
    setGoal(input);
  };

  return (
    <Modal visible={isVisible} animationType='slide'>
      <View style={styles.inputContainer} on>
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
});
