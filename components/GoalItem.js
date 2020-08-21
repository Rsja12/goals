import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({ item, handleDelete}) => {
  return (
    <TouchableOpacity onPress={() => handleDelete(item.key)}>
      <View style={styles.listItem}>
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
