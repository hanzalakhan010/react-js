import { useState } from "react";

const useStepper = (steps:any[])=>{

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
    return {currentStepIndex, onNext, onPrevious};
}

export default useStepper;