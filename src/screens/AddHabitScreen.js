import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddHabitScreen({ navigation }) {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');

  const handleAdd = () => {
    // In the future: save to context or backend
    console.log('Habit Added:', { name, time });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Habit Name</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />

      <Text style={styles.label}>Time of Day</Text>
      <TextInput value={time} onChangeText={setTime} style={styles.input} placeholder="Morning / Afternoon / Night" />

      <Button title="Save Habit" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { marginBottom: 4 },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20
  }
});
