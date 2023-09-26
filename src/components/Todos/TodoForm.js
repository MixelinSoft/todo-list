import styles from "./TodoForm.module.css";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, changeText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (text !== "" && text !== " ") {
      addTodo(text);
      changeText("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className={styles.inputText}
        onChange={(e) => changeText(e.target.value)}
        placeholder="Введите текст"
        value={text}></input>
      <button className={styles.button}>Добавить задачу</button>
    </form>
  );
};

export default TodoForm;
