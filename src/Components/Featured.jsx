import React from 'react';
import FeatureCard from './FeatureCard';
import picture1 from '../assets/images/services/plan-your-schedules.jpeg';
import picture2 from '../assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg';
import picture3 from '../assets/images/services/data-visualization-dashboard-with-interactive-char.jpg';

function LeftPattern() {
    return (
        <>
            {/* <!-- Left Pattern --> */}
            <div 
                className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden"
            >
                <div
                    className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start"
                >
                    <template id="pattern-template">
                        <div
                            className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        ></div>
                    </template>
                </div>
            </div>
        </>
    );
}

function RightPattern() {
    return (
        <>
            {/* <!-- Right Pattern --> */}
            <div 
                className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden"
            >
                <div
                    className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start"
                >
                    <template id="pattern-template-2">
                        <div
                            className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        ></div>
                    </template>
                </div>
            </div>
        </>
    );
}


const Featured = () => {
    const features = [
        {
            id: 1,
            title: 'Plan your schedules',
            description: 'Streamline customer subscriptions and billing with automated scheduling tools.',
            image: picture1
        },
        {
            id: 2,
            title: 'Analytics & insights',
            description: 'Transform your business data into actionable insights with real-time analytics.',
            image: picture2
        },
        {
            id: 3,
            title: 'Collaborate seamlessly',
            description: 'Keep your team aligned with shared dashboards and collaborative workflows.',
            image: picture3
        }
    ];

    return (
        <div className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start mt-60">
            <LeftPattern />
            {/* // < !--Feature Cards-- > */}
            <div
                className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0"
            >
                {features.map(feature => (
                    <FeatureCard
                        key={feature.id}
                        title={feature.title}
                        description={feature.description}
                        image={feature.image}
                    />
                ))}
            </div>
            <RightPattern />
        </div>
    );
};

export default Featured;