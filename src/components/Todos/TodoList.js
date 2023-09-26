import styles from "./TodoList.module.css";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className={styles.listContainer}>
      {todos.length === 0 && <h2>Дел нет</h2>}
      {todos.map((todo, index) => (
        <Todo index={index} todo={todo} key={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
