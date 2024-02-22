import React from "react";
import styles from "./style.module.css";
function TodoItems({todoItem, todoList, setTodoList}){
    const onClickDelete = () => {
        setTodoList(todoList.filter((item) => item.id !== todoItem.id));
    };
    return(
      <div>
        <div className={styles.todoitem}>
            <h3>{todoItem.name}</h3>
            <button className={styles.todobutton} onClick={onClickDelete}>Delete Item</button>
        </div>
      </div>
    )
}
export default TodoItems;