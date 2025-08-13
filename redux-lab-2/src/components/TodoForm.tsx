
export default function TodoForm() {
  return (

    <form className="todo-form">
      <input className="todo-form__input" placeholder="Add todo..." />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}