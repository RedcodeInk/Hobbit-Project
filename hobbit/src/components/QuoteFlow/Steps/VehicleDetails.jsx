import { useForm } from 'react-hook-form';

const VehicleDetails = ({ onNext, initialData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: initialData,
    });

    const onSubmit = (data) => {
        onNext({ vehicle: data });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Vehicle Details</h2>

            {/* Vehicle Make */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Make
                </label>
                <input
                    type="text" name="vehicle-make" id="vehicle-make"
                    {...register('make', { required: 'Vehicle make is required' })}
                    className="w-full max-w-sm px-3 py-2 border-0 border-b-2 text-sm border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.make && (
                    <p className="text-sm text-red-600 mt-1">{errors.make.message}</p>
                )}
            </div>

            {/* Vehicle Model */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Model
                </label>
                <input
                    type="text"
                    {...register('model', { required: 'Vehicle model is required' })}
                    className="w-full max-w-sm px-3 py-2 border-0 border-b-2 text-sm border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.model && (
                    <p className="text-sm text-red-600 mt-1">{errors.model.message}</p>
                )}
            </div>

            {/* Manufacturing Year */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year
                </label>
                <input
                    type="number"
                    {...register('year', {
                        required: 'Year is required',
                        min: { value: 1990, message: 'Year must be 1990 or later' },
                        max: { value: new Date().getFullYear(), message: 'Invalid year' }
                    })}
                    className="w-full max-w-sm px-3 py-2 border-0 border-b-2 text-sm border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.year && (
                    <p className="text-sm text-red-600 mt-1">{errors.year.message}</p>
                )}
            </div>

            {/* Registration Number */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Registration Number
                </label>
                <input
                    type="text"
                    placeholder="AB12 CDE"
                    {...register('registration', { required: 'Registration is required' })}
                    className="w-full max-w-sm px-3 py-2 border-0 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.registration && (
                    <p className="text-sm text-red-600 mt-1">{errors.registration.message}</p>
                )}
            </div>

            {/* Vehicle Usage */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Usage
                </label>
                <select
                    {...register('usage', { required: 'Please select usage' })}
                    className="w-full max-w-sm px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                    <option value="">Select usage</option>
                    <option value="personal">Personal</option>
                    <option value="commercial">Commercial</option>
                </select>
                {errors.usage && (
                    <p className="text-sm text-red-600 mt-1">{errors.usage.message}</p>
                )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
                <button
                    type="submit"
                    className="hover:bg-gray-800 hover:text-white rounded-xl text-gray-800 border border-gray-800 px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Next
                </button>
            </div>
        </form>
    );
};

export default VehicleDetails;