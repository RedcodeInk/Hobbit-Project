import QuoteContainer from '../components/QuoteFlow/QuoteContainer';
import TextPressure from '../components/text_pressure';
import ShinyText from '../components/shiny_text';
import CardSwap, { Card } from '../components/card_stack.jsx';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-red-500 text-white py-8 md:py-12">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        {/* Text content - centered on mobile, left on desktop */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h1 className="text-4xl font-bold mb-4">
                                <TextPressure
                                    text="Redcode Motor Insurance"
                                    flex={true}
                                    alpha={false}
                                    stroke={false}
                                    width={true}
                                    weight={true}
                                    italic={true}
                                    textColor="#ffffff"
                                    strokeColor="#ff0000"
                                    minFontSize={36}
                                />
                            </h1>
                            <ShinyText
                                text="Simple, reliable car insurance quotes in minutes"
                                disabled={false}
                                speed={3}
                                className='custom-class'
                            />
                        </div>
                        {/* Cards - hidden on mobile, shown on desktop */}
                        <div className="hidden md:flex w-full md:w-1/2 md:justify-end">
                            <div className="relative">
                                <CardSwap
                                    cardDistance={30}
                                    verticalDistance={35}
                                    delay={5000}
                                    pauseOnHover={true}
                                    width={200}
                                    height={120}
                                >
                                    <Card>
                                        <div className="w-[200px] bg-white/90 backdrop-blur rounded-lg shadow-lg p-3 flex flex-col items-center gap-1">
                                            <h3 className="text-sm font-semibold text-red-500">Fast Quotes</h3>
                                            <p className="text-gray-700 text-xs text-center">Get quoted in under 5 minutes</p>
                                        </div>
                                    </Card>
                                    <Card>
                                        <div className="w-[200px] bg-white/90 backdrop-blur rounded-lg shadow-lg p-3 flex flex-col items-center gap-1">
                                            <h3 className="text-sm font-semibold text-red-500">Great Value</h3>
                                            <p className="text-gray-700 text-xs text-center">Competitive rates for all drivers</p>
                                        </div>
                                    </Card>
                                    <Card>
                                        <div className="w-[200px] bg-white/90 backdrop-blur rounded-lg shadow-lg p-3 flex flex-col items-center gap-1">
                                            <h3 className="text-sm font-semibold text-red-500">Easy Claims</h3>
                                            <p className="text-gray-700 text-xs text-center">Simple online claims process</p>
                                        </div>
                                    </Card>
                                </CardSwap>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote Section */}
            <div className="max-w-8xl mx-auto bg-gray-200">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 pt-4 mb-4">
                        Get Your Quote
                    </h2>
                    <p className="text-gray-600">
                        Fill out the form below for an instant quote
                    </p>
                </div>

                <QuoteContainer />
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