import { useState } from 'react';
import VehicleDetails from './Steps/VehicleDetails';
import DriverDetails from './Steps/DriverDetails';
import CoverageOptions from './Steps/CoverageOptions';
import QuoteSummary from './Steps/QuoteSummary';

const QuoteContainer = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [quoteData, setQuoteData] = useState({
        vehicle: {},
        driver: {},
        coverage: {},
    });

    const handleNext = (stepData) => {
        setQuoteData(prev => ({ ...prev, ...stepData }));
        setCurrentStep(prev => Math.min(prev + 1, 4));
    };

    const handleBack = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const steps = [
        { id: 1, name: 'Vehicle', component: VehicleDetails },
        { id: 2, name: 'Driver', component: DriverDetails },
        { id: 3, name: 'Coverage', component: CoverageOptions },
        { id: 4, name: 'Quote', component: QuoteSummary }
    ];

    const CurrentStepComponent = steps[currentStep - 1].component;

    return (
        <div className="max-w-2xl mx-auto">
            {/* Simple step indicator */}
            <div className="flex justify-center mb-8">
                <div className="text-sm text-gray-500">
                    Step {currentStep} of 4: {steps[currentStep - 1].name}
                </div>
            </div>

            {/* Form content */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                {currentStep === 1 && (
                    <VehicleDetails onNext={handleNext} initialData={quoteData.vehicle} />
                )}
                {currentStep === 2 && (
                    <DriverDetails onNext={handleNext} onBack={handleBack} initialData={quoteData.driver} />
                )}
                {currentStep === 3 && (
                    <CoverageOptions onNext={handleNext} onBack={handleBack} initialData={quoteData.coverage} />
                )}
                {currentStep === 4 && (
                    <QuoteSummary quoteData={quoteData} onBack={handleBack} />
                )}
            </div>
        </div>
    );
};

export default QuoteContainer;