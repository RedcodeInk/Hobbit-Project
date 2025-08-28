import { useForm } from 'react-hook-form';

const DriverDetails = ({ onNext, onBack, initialData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: initialData,
    });

    const onSubmit = (data) => {
        onNext({ driver: data });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Driver Information</h2>

            {/* First Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                </label>
                <input
                    type="text"
                    {...register('firstName', { required: 'First name is required' })}
                    className="w-full max-w-sm px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.firstName && (
                    <p className="text-sm text-red-600 mt-1">{errors.firstName.message}</p>
                )}
            </div>

            {/* Last Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                </label>
                <input
                    type="text"
                    {...register('lastName', { required: 'Last name is required' })}
                    className="w-full max-w-sm px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.lastName && (
                    <p className="text-sm text-red-600 mt-1">{errors.lastName.message}</p>
                )}
            </div>

            {/* Date of Birth */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                </label>
                <input
                    type="date"
                    {...register('dateOfBirth', {
                        required: 'Date of birth is required',
                        validate: (value) => {
                            const age = new Date().getFullYear() - new Date(value).getFullYear();
                            return age >= 17 || 'Must be at least 17 years old';
                        }
                    })}
                    className="w-full max-w-sm px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.dateOfBirth && (
                    <p className="text-sm text-red-600 mt-1">{errors.dateOfBirth.message}</p>
                )}
            </div>

            {/* License Number */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    License Number
                </label>
                <input
                    type="text"
                    {...register('licenseNumber', { required: 'License number is required' })}
                    className="w-full max-w-sm px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.licenseNumber && (
                    <p className="text-sm text-red-600 mt-1">{errors.licenseNumber.message}</p>
                )}
            </div>

            {/* Experience */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience
                </label>
                <input
                    type="number"
                    min="0"
                    {...register('experience', { required: 'Experience is required' })}
                    className="w-full max-w-sm px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.experience && (
                    <p className="text-sm text-red-600 mt-1">{errors.experience.message}</p>
                )}
            </div>

            {/* Claims */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Claims in Last 5 Years
                </label>
                <input
                    type="number"
                    min="0"
                    {...register('claims', { required: 'Number of claims is required' })}
                    className="w-full max-w-sm px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.claims && (
                    <p className="text-sm text-red-600 mt-1">{errors.claims.message}</p>
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

export default DriverDetails;