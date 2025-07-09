import React from 'react';
import CountUp from 'react-countup';

export default function Detail() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                
                {/* Clients */}
                <div>
                    <h2 className="text-[#E64E37] text-3xl font-bold">
                        <CountUp end={23000} suffix="K" duration={5} />
                    </h2>
                    <p className="text-sm font-medium text-[#002768] mt-1">We Have Worked With Clients</p>
                </div>

                {/* Visa Process Rate */}
                <div>
                    <h2 className="text-[#E64E37] text-3xl font-bold">
                        <CountUp end={99} suffix="%" duration={5} />
                    </h2>
                    <p className="text-sm font-medium text-[#002768] mt-1">Successful Visa Process Rate</p>
                </div>

                {/* Approval Time */}
                <div>
                    <h2 className="text-[#E64E37] text-3xl font-bold">
                        <CountUp end={42} suffix="hrs" duration={5} />
                    </h2>
                    <p className="text-sm font-medium text-[#002768] mt-1">Application Approval Time</p>
                </div>

                {/* Countries */}
                <div>
                    <h2 className="text-[#E64E37] text-3xl font-bold">
                        <CountUp end={50} suffix="+" duration={5} />
                    </h2>
                    <p className="text-sm font-medium text-[#002768] mt-1">Countries Operations</p>
                </div>

            </div>
        </div>
    );
}
