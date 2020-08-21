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

import GoalItem from './components/GoalItem';
import GoalInput from "./components/GoalInput";

export default function App() {
  const [allGoals, setAllGoals] = useState([]);

  const handleAddButton = (goalText) => {
    setAllGoals((prevState) => [
      ...prevState,
     { key: Math.random().toString(), text: goalText },
    ]);
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />

      <GoalInput handleAdd={handleAddButton} />
      <FlatList
        data={allGoals}
        renderItem={(itemData) => (
          <GoalItem item={itemData.item.text} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
});

// test