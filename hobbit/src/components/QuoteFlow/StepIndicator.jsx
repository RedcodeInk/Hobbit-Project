// A reusable component to show progress through the quote process
const StepIndicator = ({ currentStep, totalSteps }) => {
    const steps = [
        { name: 'Vehicle Details', number: 1 },
        { name: 'Driver Information', number: 2 },
        { name: 'Coverage Options', number: 3 },
        { name: 'Quote Summary', number: 4 },
    ];

    return (
        <nav aria-label="Progress">
            <ol role="list" className="flex items-center justify-between">
                {steps.map((step, index) => (
                    <li key={step.name} className={`relative ${index !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
                        <div className="flex items-center">
                            <div
                                className={`${step.number <= currentStep
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-500'
                                    } h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium`}
                                aria-current={step.number === currentStep ? 'step' : undefined}
                            >
                                <span>{step.number}</span>
                            </div>
                            <span
                                className={`ml-2 text-sm font-medium ${step.number <= currentStep ? 'text-blue-600' : 'text-gray-500'
                                    }`}
                            >
                                {step.name}
                            </span>
                        </div>
                        {index !== steps.length - 1 && (
                            <div
                                className={`hidden sm:block absolute top-4 right-0 h-0.5 w-full ${step.number < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                                    }`}
                            />
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default StepIndicator;
