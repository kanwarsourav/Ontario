import React, { useState } from 'react';
import aeroplane2 from '../../assets/images/aeroplane2.svg';
import teambg from '../../assets/images/teambg.svg';
import memberone from '../../assets/images/memberone.svg';
import membertwo from '../../assets/images/membertwo.svg';
import memberthree from '../../assets/images/memberthree.svg';
import memberfour from '../../assets/images/memberfour.svg';
import orangefb from '../../assets/images/orangefb.svg';
import orangeinsta from '../../assets/images/orangeinsta.svg';
import orangein from '../../assets/images/orangein.svg';

export default function OurTeam() {
    const teamMembers = [
        { img: memberone, name: 'Jackson Miller', title: 'Consultant' },
        { img: membertwo, name: 'John Carter', title: 'Advisor' },
        { img: memberthree, name: 'Sophie Tan', title: 'Specialist' },
        { img: memberfour, name: 'David Smith', title: 'Analyst' }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleCardClick = (index) => {
        // Toggle overlay for mobile/tablet
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div
            className="bg-cover bg-center h-full w-full bg-[#002768]"
            style={{ backgroundImage: `url(${teambg})` }}
        >
            <div className="max-w-7xl m-auto px-4 md:px-12 pt-16 pb-24  mb-5">
                <div className="flex flex-col justify-center items-center gap-3">
                    <h5 className="flex text-white font-medium gap-2 items-center">
                        <img src={aeroplane2} alt="plane" /> Our Team
                    </h5>
                    <h2 className="text-[40px] font-bold text-white leading-none flex justify-center items-center text-center md:w-[40%]">
                        Get Your Required Services from Our Team
                    </h2>
                </div>

                {/* Team Members */}
                <div className="flex justify-center  md:justify-between pt-10 flex-wrap  gap-4 lg:gap-0   ">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="relative    md:mx-0 cursor-pointer group rounded-lg overflow-hidden"
                            onClick={() => handleCardClick(index)}
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-auto object-cover"
                            />

                            {/* Gradient Overlay */}
                            <div
                                className={`
                                    absolute bottom-0 left-0 w-full h-full 
                                    flex flex-col justify-end p-4 text-white
                                    transition-opacity duration-300
                                    bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(216,28,0,0.2)]
                                    ${activeIndex === index ? 'opacity-100' : 'opacity-0'} 
                                    md:group-hover:opacity-100
                                `}
                            >
                                <div className='flex gap-3 justify-center items-center py-2'>
                                    <img src={orangefb} alt="Facebook" className='hover:scale-110 transition-transform' />
                                    <img src={orangeinsta} alt="Instagram" className='hover:scale-110 transition-transform' />
                                    <img src={orangein} alt="LinkedIn" className='hover:scale-110 transition-transform' />
                                </div>
                                <hr />
                                <h3 className="text-[24px] text-center font-semibold leading-none pt-2">
                                    {member.name}
                                </h3>
                                <p className="text-[18px] text-center">{member.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
