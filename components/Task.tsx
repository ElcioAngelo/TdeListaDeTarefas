import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TaskProps {
  task: {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
  };
  onDelete: (id: string) => void;
  onToggleCompletion: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onDelete, onToggleCompletion }) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => onToggleCompletion(task.id)}>
        <Text style={[styles.title, task.completed && styles.completed]}>
          {task.title}
        </Text>
        {task.description && <Text style={styles.description}>{task.description}</Text>}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text style={styles.delete}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    padding: 15,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray'
  },
  description: {
    fontSize: 14,
    color: 'gray'
  },
  delete: {
    color: 'red',
    fontWeight: 'bold'
  }
});

export default Task;
