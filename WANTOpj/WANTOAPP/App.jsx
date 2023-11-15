import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet, CheckBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// タスクの詳細画面
function TaskDetailScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text>タスクの詳細: {route.params.taskName}</Text>
    </View>
  );
}

// ホーム画面
function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'タスク1', completed: false },
    // 他のタスクもここに追加
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    }))
  }

  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('TaskDetail', { taskName: item.title })}
        >
          <CheckBox
            value={item.completed}
            onValueChange={() => toggleTask(item.id)}
          />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  title: {
    marginLeft: 10
  }
})
