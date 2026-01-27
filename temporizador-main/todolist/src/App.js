import React, { useState } from "react";
import TodoList from "./TodoList";
import './App.css';

//Componente primcipal
export default function App() {
  //Variável de estado que armazenará todas as atividades
  const [todos, setTodos] = useState([]); // [] indica um array

  //Variaveis de Estado relativo a tarefa
  const [newTask, setNewTask] = useState("");

  //Variável de estado relativo a Data
  const [datadia, setDatadia] = useState("");

  //Variável de estado relativo a Hora
  const [hora, setHora] = useState("");

  //Função adiciona uma tarefa na lista
  const addTask = () => {
    if (newTask.trim() === "") return;

  //Crio um objeto que representa a tarefa
  const newTodo = {
    id: Date.now (),//Crio um id único baseado na hora e data atual.
    text: newTask,
    date: datadia,
    hora: hora,
  }
  setTodos([...todos, newTodo]);

  //Limpar as variáveis de estado
  setNewTask("");
  setDatadia("");
  setHora("");
};

  //Function que remove as task pelo id
  const removeTask = (id) => {
    setTodos(todos.filter ((todo) => todo.id !== id));
  }

  return(
    <div className="app-container">
  <h1>Minha ToDoList</h1>

  <div className="input-container">
    <input
      type="text"
      placeholder="Digite uma nova tarefa"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
    />
    <button onClick={addTask}>Adicionar</button>
  </div>

  <div className="todo-list">
    <TodoList todos={todos} removeTask={removeTask} />
  </div>
</div>

  );



}

