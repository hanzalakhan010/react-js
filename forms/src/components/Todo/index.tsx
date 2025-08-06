import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import './index.css'
interface Todo {
    id: string,
    text: string,
    status: 'todo' | 'done',
}
const TODO = () => {
    const [todoInput, setTodoInput] = useState('')
    const [todos, setTodos] = useState<Todo[]>([])
    // const [dones, setDones] = useState<string[]>([])
    const [editTodo, setEditTodoId] = useState<string | null>(null)
    const [tab, setTab] = useState('todo')
    const handleTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoInput(event.target.value)
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (todoInput.trim()) {
            saveState([...todos,
            { text: todoInput, id: crypto.randomUUID(), status: 'todo' }])
            setTodoInput('')
        }
    }

    function deleteTodo(id:string) {
        const newTodos = todos.filter((t) => t.id !== id)
        // setTodos(newTodos)
        // console.log('newTodos', newTodos)
        saveState(newTodos)
    }
    function saveState(todos: Todo[]) {
        localStorage.setItem('todos', JSON.stringify(todos))
        setTodos(todos)
    }
    function loadState() {
        setTodos(JSON.parse(localStorage.getItem('todos') ?? '[]') ?? [])
    } function editTodoHandler(id: string) {
        setEditTodoId(id)
        const todo = todos.find((t) => t.id === id)?.text ?? ''
        setTodoInput(todo)
    }
    function handleEditSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (editTodo && todoInput.trim()) {
            const newTodos = todos.map((t) => (t === editTodo ? todoInput : t))
            saveState(newTodos)
            setEditTodoId(null)
            setTodoInput('')
        }
    }
    // function handleDone(todo: string) {

    // }
    useEffect(() => {
        loadState()
    }, [])
    return (
        <>
            <div>
                <button onClick={() => setTab('todo')}>Todos</button>
                <button onClick={() => setTab('done')}>Dones</button>
            </div>
            {tab == 'todo' && (
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
                            <button onClick={() => editTodoHandler(todo)}>DONE</button>

                        </div >
                        )
                        )}
                    </ul>
                </section>
            )}
            {tab == 'done' && (
                <section className='todo-section'>
                    {/* <h2 className='todo-heading'>Add todo</h2> */}
                    {/* <form className='todo-form' onSubmit={editTodo ? handleEditSubmit : handleSubmit} >
                        <label htmlFor="todo">Todo</label>
                        <input id='todo' type="text" value={todoInput} onChange={handleTodoChange} />
                        <button type="submit">{editTodo ? 'Edit' : "Submit"}</button>
                    </form> */}
                    {/* {!dones.length && <p>No done todos</p>} */}
                    <ul>
                        {/* {dones.map((done, index) =>
                        (<div key={`${done}-${index}`}>
                            <span>{done}</span>
                        </div >
                        )
                        )} */}
                    </ul>
                </section>
            )}
        </>
    )
}

export default TODO