import type { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { addTodo, handleChangeTodo, handleEditSubmit } from "../features/todo/todoSlice";

export default function TodoForm() {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.todo.todoForm);
  const editting = useSelector((state: RootState) => state.todo.editting);

  function handleAdd(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (editting) {
      dispatch(handleEditSubmit());
    } else {
      dispatch(addTodo());
    }
  }

  return (
    <form className="todo-form" onSubmit={handleAdd}>
      <input
        className="todo-form__input"
        placeholder="Add todo..."
        value={value.text || ""}
        onChange={(e) => dispatch(handleChangeTodo({ text: e.target.value }))}
      />
      <button className="btn" type="submit">
        {editting ? "Update" : "Add"}
      </button>
    </form>
  );
}
