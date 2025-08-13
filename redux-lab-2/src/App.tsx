import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Todo App (Starter)</h1>
        <p className="app__subtitle">
          No Redux yet — students will add store, slice, and CRUD logic.
        </p>
      </header>

      <main className="app__main">
        <section className="card">
          <TodoForm />
          <TodoList />
        </section>
      </main>
    </div>
  );
}