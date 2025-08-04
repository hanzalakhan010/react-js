import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import './index.css'
const TODO = () => {
    const [todoInput, setTodoInput] = useState('')
    const [todos, setTodos] = useState<string[]>([])
    const handleTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoInput(event.target.value)
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // console.log(todoInput)
        if (todoInput) {
            setTodos([...todos, todoInput])
            saveState()
            setTodoInput('')
        }
    }

    function saveState() {
        localStorage.setItem('todos', JSON.stringify(todos))
    }
    function loadState() {
        setTodos(JSON.parse(localStorage.getItem('todos') ?? '[]') ?? [])
    }
    useEffect(() => {
        loadState()
    }, [])
    return (
        <section className='todo-section'>
            <h2 className='todo-heading'>Add todo</h2>
            <form className='todo-form' onSubmit={handleSubmit} >
                <label htmlFor="todo">Todo</label>
                <input id='todo' type="text" value={todoInput} onChange={handleTodoChange} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {todos.map((todo) =>
                (<li>
                    <span>{todo}</span>
                    <button>Delete</button>
                </li>
                )
                )}
            </ul>
        </section>)
}

export default TODO