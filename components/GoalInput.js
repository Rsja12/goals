import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = ({ handleAdd, handleCancel, isVisible }) => {
  const [goal, setGoal] = useState("");

  const onInput = (input) => {
    setGoal(input);
  };

  const onAddBtnPress = () => {
    handleAdd(goal);
    setGoal("");
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal"
          style={styles.input}
          onChangeText={onInput}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add" onPress={onAddBtnPress} />
          <Button title="Cancel" color="red" onPress={handleCancel} />
        </View>
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
    marginTop: "40%",
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-evenly"
  }
});
