const steps = [1, 2, 3, 4, 5];
import '../App.css'
import useStepper from "../hooks/useStepper";
const Stepper = () => {
    const { currentStepIndex, onPrevious, onNext } = useStepper(steps);
    return (
        <div>
            <div className="stepper">
                {steps.map((step, index) => (<p
                    className="step"
                    key={index}
                    style={{ backgroundColor: index <= currentStepIndex ? 'green' : 'red' }}
                >
                    Step:{step}
                    {index <= currentStepIndex && <span className="checkmark">✔️</span>}
                </p>))
                }
            </div>
            <button onClick={onPrevious}>Previous</button>
            <button onClick={onNext}>Next</button>
        </div >
    )
}

export default Stepper;