import React from 'react';
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

    return (
        <div
            className="bg-cover bg-center h-full w-full bg-[#002768]"
            style={{ backgroundImage: `url(${teambg})` }}
        >
            <div className="max-w-7xl m-auto px-4 md:px-12 py-18 mb-5">
                <div className="flex flex-col justify-center items-center gap-3">
                    <h5 className="flex text-white font-medium gap-2 items-center">
                        <img src={aeroplane2} alt="plane" /> Our Team
                    </h5>
                    <h2 className="text-[40px] font-bold text-white leading-none flex justify-center items-center text-center md:w-[40%]">
                        Get Your Required Services from Our Team
                    </h2>
                </div>

                {/* Team Members */}
                <div className="flex justify-center md:justify-between pt-10 flex-wrap gap-4 md:gap-0">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="relative md:w-[24%] cursor-pointer group  rounded-lg overflow-hidden"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-auto object-cover"
                            />

                            {/* Gradient Overlay: bottom 50%, top-to-bottom gradient */}
                            <div
                                className="absolute bottom-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white"
                                style={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(216, 28, 0, 0.2) 100%)'
                                }}
                            >
                                <div className='flex gap-3 justify-center items-center py-2'>
                                    <div>
                                        <img src={orangefb} alt="" className='transform transition-transform duration-300 hover:scale-110' />
                                    </div>
                                    <div>
                                        <img src={orangeinsta} alt="" className='transform transition-transform duration-300 hover:scale-110' />
                                    </div>
                                    <div>
                                        <img src={orangein} alt="" className='transform transition-transform duration-300 hover:scale-110' />
                                    </div>
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
