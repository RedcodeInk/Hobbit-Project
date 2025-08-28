import { useForm } from 'react-hook-form';

const CoverageOptions = ({ onNext, onBack, initialData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: initialData,
    });

    const onSubmit = (data) => {
        onNext({ coverage: data });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Coverage Options</h2>

            {/* Coverage Type */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                    Coverage Type
                </label>
                <div className="space-y-3">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="comprehensive"
                            value="comprehensive"
                            {...register('coverageType', { required: 'Please select coverage type' })}
                            className="mr-3"
                        />
                        <label htmlFor="comprehensive" className="text-sm">
                            <span className="font-medium">Comprehensive</span>
                            <span className="block text-gray-500">Full coverage including your vehicle</span>
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="thirdParty"
                            value="thirdParty"
                            {...register('coverageType')}
                            className="mr-3"
                        />
                        <label htmlFor="thirdParty" className="text-sm">
                            <span className="font-medium">Third Party</span>
                            <span className="block text-gray-500">Covers other vehicles only</span>
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="thirdPartyPlus"
                            value="thirdPartyPlus"
                            {...register('coverageType')}
                            className="mr-3"
                        />
                        <label htmlFor="thirdPartyPlus" className="text-sm">
                            <span className="font-medium">Third Party Plus</span>
                            <span className="block text-gray-500">Includes fire and theft protection</span>
                        </label>
                    </div>
                </div>
                {errors.coverageType && (
                    <p className="text-sm text-red-600 mt-2">{errors.coverageType.message}</p>
                )}
            </div>

            {/* Add-ons */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                    Optional Add-ons
                </label>
                <div className="space-y-3">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="breakdown"
                            {...register('addons.breakdown')}
                            className="mr-3"
                        />
                        <label htmlFor="breakdown" className="text-sm">
                            <span className="font-medium">Breakdown Cover</span>
                            <span className="block text-gray-500">24/7 roadside assistance</span>
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="windscreen"
                            {...register('addons.windscreen')}
                            className="mr-3"
                        />
                        <label htmlFor="windscreen" className="text-sm">
                            <span className="font-medium">Windscreen Cover</span>
                            <span className="block text-gray-500">Windscreen repair/replacement</span>
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="courtesy"
                            {...register('addons.courtesyCar')}
                            className="mr-3"
                        />
                        <label htmlFor="courtesy" className="text-sm">
                            <span className="font-medium">Courtesy Car</span>
                            <span className="block text-gray-500">Replacement vehicle during repairs</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Excess */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Voluntary Excess
                </label>
                <select
                    {...register('excess', { required: 'Please select excess amount' })}
                    className="w-full max-w-sm px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                    <option value="">Select excess</option>
                    <option value="0">K0</option>
                    <option value="100">K100</option>
                    <option value="250">K250</option>
                    <option value="500">K500</option>
                </select>
                {errors.excess && (
                    <p className="text-sm text-red-600 mt-1">{errors.excess.message}</p>
                )}
            </div>

            {/* Navigation */}
            <div className="flex gap-4 pt-6">
                <button
                    type="button"
                    onClick={onBack}
                    className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Back
                </button>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Next
                </button>
            </div>
        </form>
    );
};

export default CoverageOptions;