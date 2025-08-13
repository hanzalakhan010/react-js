import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <ul className="todo-list">
      {/* Static examples — students will replace with mapped state */}
      <TodoItem text="Learn Redux basics" completed={false} />
      <TodoItem text="Write unit tests" completed={true} />
    </ul>
  );
}