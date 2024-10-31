import React from "react";
import { useState } from 'react';


function AddTask({addTask}){
    const [taskText, setTaskText] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!taskText) {
            alert('Please add a task');
            return;
        }

        addTask({text: taskText, description: taskDescription});

        setTaskText('');
        setTaskDescription('');

    };

    return(
        <form onSubmit={onSubmit}>
            <input
            type = "text"
            placeholder = "Add new task"
            value = {taskText}
            onChange = {(e) => setTaskText(e.target.value)}
            />
            <input 
            type = "text"
            placeholder = "Add task description"
            value = {taskDescription}
            onChange = {(e) => setTaskDescription(e.target.value)}
            />
            <button type ="submit">Add Task</button>
        </form>
    );
}

export default AddTask;