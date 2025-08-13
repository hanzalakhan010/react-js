import type { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/counter/counterSlice";


export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter.value);
    return (
        <section className="counter">
            <h2 className="counter__title">Counter</h2>

            <div className="counter__display" aria-live="polite">
                {count}
            </div>

            <div className="counter__controls">
                <button className="btn" type="button" aria-label="Decrement"
                disabled={count <= 0}
                    onClick={() => dispatch(decrement())}
                >
                    −
                </button>
                <button className="btn" type="button" aria-label="Increment"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <button className="btn btn--muted" type="button" aria-label="Reset"
                    onClick={() => dispatch(reset())}
                >
                    Reset
                </button>
            </div>
        </section>
    );
}