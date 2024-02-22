import React, { useState } from "react";
import { ReactDOM } from "react";
import Todo from "./components/Todo";
import styles from "./components/style.module.css";
function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
    <h1 className={styles.titlebar}>Todo App</h1>
    <Todo todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
