import QuoteContainer from '../components/QuoteFlow/QuoteContainer';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-red-500 text-white py-16">
                {/* <div className="max-w-4xl mx-auto px-6 text-center"> */}
                <h1 className="text-4xl font-bold mb-4">
                    Redcode Motor Insurance
                </h1>
                <p className="text-xl text-blue-100">
                    Simple, reliable car insurance quotes in minutes
                </p>
                {/* </div> */}
            </div>

            {/* Quote Section */}
            <div className="py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Get Your Quote
                        </h2>
                        <p className="text-gray-600">
                            Fill out the form below for an instant quote
                        </p>
                    </div>

                    <QuoteContainer />
                </div>
            </div>

            {/* Simple Benefits */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <h3 className="font-medium text-gray-900 mb-2">Fast Quotes</h3>
                            <p className="text-gray-600">Get quoted in under 5 minutes</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900 mb-2">Great Value</h3>
                            <p className="text-gray-600">Competitive rates for all drivers</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900 mb-2">Easy Claims</h3>
                            <p className="text-gray-600">Simple online claims process</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;