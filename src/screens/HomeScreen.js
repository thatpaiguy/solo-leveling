import React, { useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [habits, setHabits] = useState([
    { id: '1', name: 'Drink Water', time: 'Morning', completed: false },
    { id: '2', name: 'Workout', time: 'Afternoon', completed: false },
  ]);

  const toggleHabit = (id) => {
    setHabits(prev =>
      prev.map(habit =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleHabit(item.id)} style={styles.habit}>
            <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>
              {item.name} ({item.time})
            </Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Add Habit" onPress={() => navigation.navigate('AddHabit')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  habit: {
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
  }
});
