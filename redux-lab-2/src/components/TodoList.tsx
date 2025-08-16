import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import type { RootState } from "../app/store";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todo.todos)
  return (
    <ul className="todo-list">
      {/* Static examples — students will replace with mapped state */}
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}