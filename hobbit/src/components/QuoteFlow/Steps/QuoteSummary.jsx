const QuoteSummary = ({ quoteData, onBack }) => {
    // Calculate mock premium based on coverage and add-ons
    const calculatePremium = () => {
        let basePremium = 500; // Base premium

        // Adjust for coverage type
        switch (quoteData.coverage.coverageType) {
            case 'comprehensive':
                basePremium *= 1.5;
                break;
            case 'thirdPartyFireAndTheft':
                basePremium *= 1.2;
                break;
            default:
                break;
        }

        // Add-ons
        if (quoteData.coverage.addons) {
            if (quoteData.coverage.addons.breakdown) basePremium += 50;
            if (quoteData.coverage.addons.windscreen) basePremium += 30;
            if (quoteData.coverage.addons.courtesyCar) basePremium += 40;
        }

        // Adjust for claims history
        const claimsLoading = quoteData.driver.claims * 100;
        basePremium += claimsLoading;

        return basePremium.toFixed(2);
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Quote Summary</h2>

                {/* Vehicle Information */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Vehicle Details</h3>
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Make & Model</dt>
                            <dd className="mt-1 text-sm text-gray-900">{quoteData.vehicle.make} {quoteData.vehicle.model}</dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Year</dt>
                            <dd className="mt-1 text-sm text-gray-900">{quoteData.vehicle.year}</dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Registration</dt>
                            <dd className="mt-1 text-sm text-gray-900">{quoteData.vehicle.registration}</dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Usage</dt>
                            <dd className="mt-1 text-sm text-gray-900 capitalize">{quoteData.vehicle.usage}</dd>
                        </div>
                    </dl>
                </div>

                {/* Driver Information */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Driver Details</h3>
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Name</dt>
                            <dd className="mt-1 text-sm text-gray-900">{quoteData.driver.firstName} {quoteData.driver.lastName}</dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
                            <dd className="mt-1 text-sm text-gray-900">{new Date(quoteData.driver.dateOfBirth).toLocaleDateString()}</dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500">License Number</dt>
                            <dd className="mt-1 text-sm text-gray-900">{quoteData.driver.licenseNumber}</dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Driving Experience</dt>
                            <dd className="mt-1 text-sm text-gray-900">{quoteData.driver.experience} years</dd>
                        </div>
                    </dl>
                </div>

                {/* Coverage Information */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Coverage Details</h3>
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-4">
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Coverage Type</dt>
                            <dd className="mt-1 text-sm text-gray-900 capitalize">
                                {quoteData.coverage.coverageType.replace(/([A-Z])/g, ' $1').trim()}
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Add-ons</dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                <ul className="list-disc list-inside">
                                    {quoteData.coverage.addons?.breakdown && <li>Breakdown Cover</li>}
                                    {quoteData.coverage.addons?.windscreen && <li>Windscreen Cover</li>}
                                    {quoteData.coverage.addons?.courtesyCar && <li>Courtesy Car</li>}
                                </ul>
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Voluntary Excess</dt>
                            <dd className="mt-1 text-sm text-gray-900">K{quoteData.coverage.excess}</dd>
                        </div>
                    </dl>
                </div>

                {/* Premium Information */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="text-lg font-medium text-blue-900 mb-3">Premium</h3>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-blue-700">Annual Premium</p>
                            <p className="text-2xl font-bold text-blue-900">K{calculatePremium()}</p>
                        </div>
                        <p className="text-sm text-blue-600">or K{(calculatePremium() / 12).toFixed(2)} monthly</p>
                    </div>
                </div>
            </div>

            {/* Navigation and Actions */}
            <div className="flex justify-between space-x-4 pt-4 border-t">
                <button
                    type="button"
                    onClick={onBack}
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Back
                </button>
                <button
                    type="button"
                    onClick={() => alert('Thank you for your interest! A representative will contact you shortly.')}
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Purchase Quote
                </button>
            </div>
        </div>
    );
};

export default QuoteSummary;
