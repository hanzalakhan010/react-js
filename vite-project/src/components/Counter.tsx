import { useEffect, useState } from "react"

const Counter = () => {
    const [counter, setCoutner] = useState(0)
    function handleIncrement() {
        setCoutner(counter + 1)
    }
    function handleDecrement() {
        setCoutner(counter - 1)
    }
    useEffect(()=>{
        console.log("Counter value changed:", counter)
    },[counter])
    return (
        <div>
            <p>Counter:{counter}</p>
            <button onClick={handleIncrement} className="border p1 cur">Increment</button>
            <button onClick={handleDecrement} className="border p1 cur" disabled ={!counter}>Decrement</button>
        </div>
    )


}

export default Counter;