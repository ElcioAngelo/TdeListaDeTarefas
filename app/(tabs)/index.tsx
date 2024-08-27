import React, { useState } from "react";
import {Text,View,StyleSheet, Alert, TextInput, FlatList, Button} from 'react-native';
import Task from "@/components/Task";
import styles from "@/constants/Styles";
interface TaskItem{
    id: string,
    title: string,
    description?: string,
    completed: boolean,
}


const index = ({taskArray}:any) => {
    const [tasks, setTasks] = useState<TaskItem[]>([]);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const addTask = () => {
        if(!title.trim()){
            Alert.alert('Erro', "O titulo é obrigatorio!");
            return;
        }

        const newTask: TaskItem = {
            id: Date.now().toString(),
            title,
            description,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setTitle('');
        setDescription('');
    }

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const finishTask = (id: string) => {
        setTasks(tasks.map(task => 
            task.id === id ? {...task, completed: !task.completed} : task
        ))
    };
    return (
    <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição (opcional)"
          value={description}
          onChangeText={setDescription}
        />
        <Button title="Adicionar Tarefa" onPress={addTask} />
  
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task
              task={item}
              onDelete={deleteTask}
              onToggleCompletion={finishTask}
            />
          )}
          keyExtractor={item => item.id}
          style={styles.list}
        />
    </View>
    )
}




export default index