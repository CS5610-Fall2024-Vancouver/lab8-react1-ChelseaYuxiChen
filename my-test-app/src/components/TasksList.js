import React from "react";
import { FaTrash } from "react-icons/fa";

function TasksList({ tasks, deleteTask }){
    return (
        <ul>
        {tasks.map(task => (
          <li key = {task.id}>
            <span>{task.text}</span>
            <FaTrash
            style = {{cursor:'pointer', color:'red'}}
            onClick={()=>deleteTask(task.id)}
            />
            </li>
        ))
        }
      </ul>
    )
}

export default TasksList;