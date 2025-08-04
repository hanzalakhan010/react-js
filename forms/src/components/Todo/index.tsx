import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import './index.css'
const TODO = () => {
    const [todoInput, setTodoInput] = useState('')
    const [todos, setTodos] = useState<string[]>([])
    const [editTodo, setEditTodo] = useState<string | null>(null)
    const handleTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoInput(event.target.value)
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (todoInput.trim()) {
            saveState([...todos, todoInput])
            setTodoInput('')
        }
    }

    function deleteTodo(todo: string) {
        const newTodos = todos.filter((t) => t !== todo)
        // setTodos(newTodos)
        console.log('newTodos', newTodos)
        saveState(newTodos)
    }
    function saveState(todos: string[]) {
        localStorage.setItem('todos', JSON.stringify(todos))
        setTodos(todos)
    }
    function loadState() {
        setTodos(JSON.parse(localStorage.getItem('todos') ?? '[]') ?? [])
    } function editTodoHandler(todo: string) {
        setEditTodo(todo)
        setTodoInput(todo)
    }
    function handleEditSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (editTodo && todoInput.trim()) {
            const newTodos = todos.map((t) => (t === editTodo ? todoInput : t))
            saveState(newTodos)
            setEditTodo(null)
            setTodoInput('')
        }
    }
    useEffect(() => {
        loadState()
    }, [])
    return (
        <section className='todo-section'>
            <h2 className='todo-heading'>Add todo</h2>
            <form className='todo-form' onSubmit={editTodo ? handleEditSubmit : handleSubmit} >
                <label htmlFor="todo">Todo</label>
                <input id='todo' type="text" value={todoInput} onChange={handleTodoChange} />
                <button type="submit">{editTodo ? 'Edit' : "Submit"}</button>
            </form>
            {!todos.length && <p>No todos</p>}
            <ul>
                {todos.map((todo, index) =>
                (<div key={`${todo}-${index}`} onDoubleClick={() => deleteTodo(todo)}>
                    <span>{todo}</span>
                    <button onClick={() => editTodoHandler(todo)}>EDIT</button>
                </div >
                )
                )}
            </ul>
        </section>)
}

export default TODO