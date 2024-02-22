import React from "react";
import TodoItems from "./TodoItems";
import styles from "./style.module.css";
function Todo({todo, setTodo, todoList, setTodoList}) {
  const shortid = require('shortid');
  const onChangeset = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
    console.log(todo);
  }
  const onSubmitset = (e) => {
    e.preventDefault();
    //todoList.push(todo);
    setTodoList([...todoList, {name: todo, id: shortid.generate()}]);
    console.log(todoList);
    setTodo("");
  }
    return (
        <div className={styles.header}>
          <form onSubmit={onSubmitset}>
            <input type="text" className={styles.inp} value = {todo}
            onChange={onChangeset} placeholder="Enter your items here..."></input>
            <button type="submit" className={styles.button}>Add Item</button>
          </form>
          <h2>Your Wishlist Todos</h2>
          {todoList.map((val) => (
             <TodoItems todoItem={val} key={val.id} todoList={todoList} setTodoList={setTodoList}></TodoItems>
          ))}
         
        </div>
    )
}
export default Todo;