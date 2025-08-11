import { useReducer } from "react"
interface State { count: number }
const Counter = () => {
    const [state, dispatch] = useReducer((state: State, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 }
            case 'decrement':
                return { count: state.count - 1 }
            default:
                throw new Error()
        }
    }, { count: 0 })

    const { count } = state
    function handleIncrement() {
        dispatch({ type: 'increment' })
    }
    function handleDecrement() {
        dispatch({ type: 'decrement' })
    }
    // const [counter, setCoutner] = useState(0)
    // function handleIncrement() {
    //     setCoutner(counter + 1)
    // }
    // function handleDecrement() {
    //     setCoutner(counter - 1)
    // }
    // useEffect(() => {
    //     console.log("Counter value changed:", count)
    // }, [count])
    return (
        <div>
            <p>Counter:{count}</p>
            <button onClick={handleIncrement} className="border p1 cur">Increment</button>
            <button onClick={handleDecrement} className="border p1 cur" disabled={!count}>Decrement</button>
        </div>
    )


}

export default Counter;