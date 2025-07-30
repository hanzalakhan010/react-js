import { useState } from "react";
import '../App.css'
const Stepper = () => {
    const steps = [1, 2, 3,4,5];
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function onNext() {
        if (currentStepIndex >= steps.length - 1) {
            return
        }
        setCurrentStepIndex(currentStepIndex + 1);
    }
    function onPrevious() {
        if (currentStepIndex <= 0) {
            return
        }
        setCurrentStepIndex(currentStepIndex - 1);

    }
    return (<div>
        <div className="stepper">

            {steps.map((step, index) => (<p
                className="step"
                key={index}
                style={{ backgroundColor: index <= currentStepIndex ? 'green' : 'red' }}
            >
                Step:{step}
                {index<=currentStepIndex && <span className="checkmark">✔️</span>}
            </p>))
            }
        </div>
        <button onClick={onNext}>Next</button>
        <button onClick={onPrevious}>Previous</button>
    </div >)
}

export default Stepper;