import React from 'react';
import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import AddItem from './components/AddItem';

function App() {
  const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

  return (
    <div className="App">
      <Header />
      <AddItem tasks={tasks} setTasks={setTasks}/>
      <ToDoList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
