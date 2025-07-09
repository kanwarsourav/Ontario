import React from 'react';
import aeroplane from '../assets/images/aeroplane.svg';

import canada from '../assets/images/canada.svg';
import belgium from '../assets/images/belgium.svg';
import denmark from '../assets/images/denmark.svg';
import australia from '../assets/images/australia.svg';
import france from '../assets/images/france.svg';
import germany from '../assets/images/germany.svg';
import greece from '../assets/images/greece.svg';
import hungary from '../assets/images/hungary.svg';
import iceland from '../assets/images/iceland.svg';
import ireland from '../assets/images/ireland.svg';
import italy from '../assets/images/italy.svg';
import luxembourg from '../assets/images/luxembourg.svg';

export default function CountryList() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-10">

            {/* Heading */}
            <div className="text-center mb-10">
                <h5 className="flex justify-center items-center gap-2 text-[#E64E37] text-sm font-medium">
                    <img src={aeroplane} alt="" className="w-4 h-4" />
                    Countries We Offer Support
                </h5>
                <h2 className="text-[#002768] font-bold text-[32px] md:text-[40px] mt-1">
                    Work Visa Services Following Countries
                </h2>
            </div>

            {/* Country Flags Section */}
            <div className="flex flex-col gap-6">
                {/* Row 1 */}
                <div className="flex justify-evenly flex-wrap gap-6">
                    <div className="flex items-center gap-2 min-w-[120px] transform transition-transform duration-300 hover:scale-105 ">
                        <img src={canada} alt="Canada" className="w-7  object-contain" />
                        <span className="text-[#002768] font-medium">Canada</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-[120px] transform transition-transform duration-300 hover:scale-105">
                        <img src={belgium} alt="Belgium" className="w-7 object-contain" />
                        <span className="text-[#002768] font-medium">Belgium</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-[120px] transform transition-transform duration-300 hover:scale-105">
                        <img src={denmark} alt="Denmark" className="w-7 object-contain" />
                        <span className="text-[#002768] font-medium">Denmark</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-[120px] transform transition-transform duration-300 hover:scale-105">
                        <img src={australia} alt="Australia" className="w-7 object-contain" />
                        <span className="text-[#002768] font-medium">Australia</span>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex justify-evenly flex-wrap gap-6">
                    <div className="flex items-center gap-2 min-w-[120px] transform transition-transform duration-300 hover:scale-105">
                        <img src={france} alt="France" className="w-7 object-contain" />
                        <span className="text-[#002768] font-medium">France</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-[120px] transform transition-transform duration-300 hover:scale-105">
                        <img src={germany} alt="Germany" className="w-7 object-contain" />
                        <span className="text-[#002768] font-medium">Germany</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-[120px] transform transition-transform duration-300 hover:scale-105">
                        <img src={greece} alt="Greece" className="w-7 object-contain" />
                        <span className="text-[#002768] font-medium">Greece</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-[120px] transform transition-transform duration-300 hover:scale-105">
                        <img src={hungary} alt="Hungary" className="w-7 object-contain" />
                        <span className="text-[#002768] font-medium">Hungary</span>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="flex justify-evenly flex-wrap gap-6">
                    <div className="flex items-center gap-2 min-w-[120px] transform transition-transform duration-300 hover:scale-105">
                        <img src={iceland} alt="Iceland" className="w-7 object-contain" />
                        <span className="text-[#002768] font-medium">Iceland</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-[120px] transform transition-transform duration-300 hover:scale-105">
                        <img src={ireland} alt="Ireland" className="w-7 object-contain" />
                        <span className="text-[#002768] font-medium">Ireland</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-[120px] transform transition-transform duration-300 hover:scale-105">
                        <img src={italy} alt="Italy" className="w-7 object-contain" />
                        <span className="text-[#002768] font-medium">Italy</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-[120px] transform transition-transform duration-300 hover:scale-105">
                        <img src={luxembourg} alt="Luxembourg" className="w-7 object-contain" />
                        <span className="text-[#002768] font-medium">Luxembourg</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
