import React from 'react';
import ServiceCard from './ServiceCard';
import image1 from '../assets/images/services/work-order.png';
import image2 from '../assets/images/services/work-sync.png';
import image3 from '../assets/images/services/integration.png';
import image4 from '../assets/images/services/speak.png';
function Header() {
    return (
        <div
            className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6"
        >
            <div
                className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4"
            >
                {/* <!-- Badge --> */}
                <div
                    className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs"
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="1"
                            y="1"
                            width="4"
                            height="4"
                            stroke="#37322F"
                            strokeWidth="1"
                            fill="none"
                        />
                        <rect
                            x="7"
                            y="1"
                            width="4"
                            height="4"
                            stroke="#37322F"
                            strokeWidth="1"
                            fill="none"
                        />
                        <rect
                            x="1"
                            y="7"
                            width="4"
                            height="4"
                            stroke="#37322F"
                            strokeWidth="1"
                            fill="none"
                        />
                        <rect
                            x="7"
                            y="7"
                            width="4"
                            height="4"
                            stroke="#37322F"
                            strokeWidth="1"
                            fill="none"
                        />
                    </svg>
                    <div
                        className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3"
                    >
                        Services
                    </div>
                </div>
                <div
                    className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] tracking-tight"
                >
                    Built for absolute clarity and
                    focused work
                </div>
                <div
                    className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7"
                >
                    Stay focused with tools that
                    organize, connect<br />
                    and turn information into confident
                    decisions.
                </div>
            </div>
        </div>)
}
function LeftPattern() {
    return (
        // < !--Left Pattern-- >
        <div
            className="w-12 self-stretch relative overflow-hidden hidden md:block"
        >
            <div
                className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start"
            >
                <template id="pattern-template-3">
                    <div
                        className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                    ></div>
                </template>
            </div>
        </div>
    );
}
function RightPattern() {
    return (
        // < !--Right Pattern-- >
        <div
            className="w-12 self-stretch relative overflow-hidden hidden md:block"
        >
            <div
                className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start"
            >
                <template id="pattern-template-4">
                    <div
                        className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                    ></div>
                </template>
            </div>
        </div>
    );
}
const ServiceSection = () => {
    const services = [
        {
            id: 1,
            title: "Smart. Simple. Brilliant.",
            description: "Your data is beautifully organized so you see everything clearly without the clutter.",
            image: image1
        },
        {
            id: 2,
            title: "Your work, in sync",
            description: "Every update flows instantly across your team and keeps collaboration effortless and fast.",
            image: image2
        },
        {
            id: 3,
            title: "Effortless integration",
            description: "Connect all your tools seamlessly and work smarter, not harder.",
            image: image3
        },
        {
            id: 4,
            title: "Advanced analytics",
            description: "Gain deep insights with our powerful analytics tools and make data-driven decisions with confidence.",
            image: image4
        }
    ];

    return (
        <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
            <Header />
            <div className = "self-stretch flex justify-center items-start">
                <LeftPattern />
                <div
                    className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]"
                >
                    {services.map(service => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                        />
                    ))}
                </div>
                <RightPattern />
            </div>

        </div>
    );
};

export default ServiceSection;