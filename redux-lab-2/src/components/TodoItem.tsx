interface Props {
  text: string;
  completed?: boolean;
}

function TodoItem({ text, completed = false }: Props) {
  return (
    <li className="todo-item">
      <input
        className="todo-item__checkbox"
        type="checkbox"
        checked={completed}
        readOnly
      />
      <span
        className={`todo-item__text ${
          completed ? "todo-item__text--done" : ""
        }`}
      >
        {text}
      </span>
      <div className="todo-item__actions">
        <button className="btn btn--small">Edit</button>
        <button className="btn btn--small btn--muted">Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;