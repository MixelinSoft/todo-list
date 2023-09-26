import { RiTodoFill } from "react-icons/ri";
import styles from "./Todo.module.css";

const Todo = ({ todo, deleteTodo, index }) => {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.todoIcon} />
      <p>{todo}</p>
    </div>
  );
};

export default Todo;
