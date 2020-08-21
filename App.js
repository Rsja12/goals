import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddButton = (goalText) => {
    setAllGoals((prevState) => [
      ...prevState,
      { key: Math.random().toString(), text: goalText },
    ]);
  };

  const handleDelete = (id) => {
    setAllGoals((prevState) => {
      return prevState.filter((goal) => goal.key !== id);
    });
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />

      <Button title="Add A New Goal!" onPress={() => setIsModalVisible(true)} />
      <GoalInput isVisible={isModalVisible} handleAdd={handleAddButton} />
      <FlatList
        data={allGoals}
        renderItem={(itemData) => (
          <GoalItem item={itemData.item} handleDelete={handleDelete} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
