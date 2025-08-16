
import { useDispatch } from "react-redux";
import type { Todo } from "../features/todo/todoSlice";
import { toggleTodo, removeTodo, handleEditTodo } from "../features/todo/todoSlice";
interface Props {
  todo: Todo
}

function TodoItem(todoProp: Props) {
  const { todo } = todoProp
  const dispatch = useDispatch()
  function handleToggle() {
    dispatch(toggleTodo(todo.id))
  }
  function handleRemove() {
    dispatch(removeTodo(todo.id))
  }
  function handleEdit() {
    dispatch(handleEditTodo(todo))
  }
  return (
    <li className="todo-item">
      <input
        className="todo-item__checkbox"
        type="checkbox"
        checked={todo.completed}
        readOnly
        onClick={handleToggle}
      />
      <span
        className={`todo-item__text ${todo.completed ? "todo-item__text--done" : ""
          }`}
      >
        {todo.text}
      </span>
      <div className="todo-item__actions">
        <button className="btn btn--small" onClick={handleEdit}>Edit</button>
        <button className="btn btn--small btn--muted" onClick={handleRemove}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;