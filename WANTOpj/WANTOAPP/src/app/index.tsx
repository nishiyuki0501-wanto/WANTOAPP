import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Index = (): JSX.Element => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    const newTask = `Task ${tasks.length + 1}`;
    setTasks([...tasks, newTask]);
  };

  return (
    <View>
      <Button title="Add Task" onPress={addTask} />
      {tasks.map((task, index) => (
        <Text key={index}>{task}</Text>
      ))}
    </View>
  );
};

export default Index;
