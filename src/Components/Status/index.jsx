import { useState } from "react";
import { Stepper, Step } from "@material-tailwind/react";


export default function Status({ Step1, Step2, Step3, Step4, valoresForms, setValoresForms }) {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);


    return (
        <>
            <div className="w-full ">
                <div className="md:w-5/12 mx-auto">
                    <Stepper
                        activeStep={activeStep}
                        isLastStep={(value) => setIsLastStep(value)}
                        isFirstStep={(value) => setIsFirstStep(value)}
                        lineClassName=""
                        activeLineClassName=""
                        
                    >
                        <Step
                            className="bg-gray-300 border "
                            activeClassName="bg-skyblue"
                            completedClassName="bg-darkblue-select"
                            onClick={() => setActiveStep(0)}

                        >
                        1
                        </Step>

                        <Step
                            className="bg-gray-300 border "
                            activeClassName="bg-skyblue"
                            completedClassName="bg-darkblue-select"
                            onClick={() => setActiveStep(1)}
                            
                        >
                            2
                        </Step>

                        <Step
                            className="bg-gray-300 border "
                            activeClassName="bg-skyblue"
                            completedClassName="bg-darkblue-select"
                            onClick={() => setActiveStep(2)}
                            
                        >
                            3
                        </Step>

                        <Step
                            className="bg-gray-300 border "
                            activeClassName="bg-skyblue"
                            completedClassName="bg-darkblue-select"
                            onClick={() => setActiveStep(3)}
                            
                        >
                            4
                        </Step>

                    </Stepper>


                </div>

            </div>

            <div>
                {activeStep === 0 && <Step1 valoresForms={valoresForms} setValoresForms={setValoresForms} setActiveStep={setActiveStep} />}
                {activeStep === 1 && <Step2 setActiveStep={setActiveStep} />}
                {activeStep === 2 && <Step3 setActiveStep={setActiveStep}/>}
                {activeStep === 3 && <Step4 valoresForms={valoresForms} setValoresForms={setValoresForms} setActiveStep={setActiveStep}/>}
            </div>
        </>
    );
}