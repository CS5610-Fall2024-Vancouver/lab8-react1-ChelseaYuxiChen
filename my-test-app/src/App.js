import './App.css';
import Header from './components/Header';
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';
import { useState } from 'react';


function App() {

  const initialTasks = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Do homework" },
    { id: 3, text: "Cook dinner" },
  ];

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = { id, ...task};
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="App">
      <Header onToggleForm={toggleForm} showForm={showForm} />
      {showForm && <AddTask addTask = {addTask} />}
      {tasks.length > 0 ?(
        <ul>
          <TasksList tasks={tasks} deleteTask={deleteTask}/>
        </ul>
      ) : (
        <p>No tasks left</p>
      )
      }
    </div>
  );
}

export default App;
