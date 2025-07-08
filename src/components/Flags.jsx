import React from 'react'
import aeroplane from '../assets/images/aeroplane.svg';
import flag1 from '../assets/images/flag1.svg';
import flag2 from '../assets/images/flag2.svg';
import flag3 from '../assets/images/flag3.svg';

export default function Flags() {
    return (
        <>
            <div>
                <div class="max-w-7xl m-auto px-4 md:px-12 py-18">
                    <div class="flex flex-col justify-center items-center gap-4">
                        <div className="flex justify-center items-center gap-2">
                            <img src={aeroplane} alt="Aeroplane" />
                            <h4 className="text-[#E64E37] text-lg font-medium">Countries We Offer Support</h4>
                        </div>
                        <h2 class="text-[40px] font-bold text-[#002768] leading-none">Work Visa Services Following Countries</h2>
                    </div>

                    <div class="flex flex-col gap-4 mt-10">
                        <div>
                            <img src={flag1} alt="" />
                        </div>
                        <div>
                            <img src={flag2} alt="" />
                        </div>
                        <div>
                            <img src={flag3} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
