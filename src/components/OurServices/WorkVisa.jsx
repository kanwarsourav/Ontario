import React, { useState } from 'react';
import aboutusbg from '../../assets/images/aboutusbg.svg';
import work from '../../assets/images/work.svg';
import tourist from '../../assets/images/tourist.svg';
import sideimg from '../../assets/images/sideimg.svg';
import tick from '../../assets/images/tick.svg';
import talking from '../../assets/images/talking.svg';
import wavingflag from '../../assets/images/wavingflag.svg';
import visastudent from '../../assets/images/visastudent.svg';
import businessvisa from '../../assets/images/businessvisa.svg';
import document from '../../assets/images/document.svg';
import phone from '../../assets/images/phone.svg';
import airport from '../../assets/images/airport.mp4';

export default function WorkVisa() {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqData = [
        {
            question: "Which Is The Prerequisites For Immigration?",
            answer: "Our business consulting programs help to break the performance of your business down into customers and product groups so you know exactly which customers or product groups are working."
        },
        {
            question: "What Are The Contact Address Of Immigway?",
            answer: "You can reach us at support@immigway.com or visit our office in New York, USA."
        },
        {
            question: "What IELTS Score Required For Canada?",
            answer: "Generally, a minimum of 6.0 in each band is required for immigration, but it may vary depending on the program."
        },
        {
            question: "How Much Time Needed For Visa Renewal?",
            answer: "Visa renewal typically takes between 2 to 4 weeks depending on the country and visa type."
        }
    ];

    return (
        <>
            {/* Top Banner */}
            <div
                className='bg-cover bg-center h-40 w-full bg-[#002768] flex flex-col justify-center items-center text-center'
                style={{ backgroundImage: `url(${aboutusbg})` }}
            >
                <h2 className='font-bold text-4xl md:text-5xl text-white'>Work visa Processing</h2>
                <h5 className='font-bold text-sm text-white'>HOME | Work Visa Processing</h5>
            </div>

            {/* Main Section */}
            <div>
               <div className='max-w-7xl px-4 md:px-14 py-10 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center md:items-start gap-6'>

                    {/* Sidebar */}
                    <div className='w-full  lg:w-[27%] flex flex-col   gap-4 items-center lg:items-start text-center md:text-left'>
                        <div className='flex flex-col gap-3 w-full md:w-[70%] lg:w-full'>
                            <h5 className='flex gap-2 items-center bg-[#EF5533] py-1 px-4 rounded-lg text-white shadow-lg justify-center lg:justify-start'>
                                <img src={work} alt="" />Work Visa Processing
                            </h5>
                            <h5 className='flex gap-2 items-center  py-1 px-4 rounded-lg text-[#002768] shadow-lg justify-center lg:justify-start'>
                                <img src={tourist} alt="" />Tourist Visa Processing
                            </h5>
                            <h5 className='flex gap-2 items-center py-1 px-4 rounded-lg text-[#002768] shadow-lg justify-center lg:justify-start'>
                                <img src={visastudent} alt="" />Student Visa Processing
                            </h5>
                            <h5 className='flex gap-2 items-center  py-1 px-4 rounded-lg  text-[#002768] shadow-lg justify-center lg:justify-start'>
                                <img src={businessvisa} alt="" />Business Visa Processing
                            </h5>
                        </div>

                        {/* Sidebar Image */}
                        <div
                            className="relative bg-cover bg-center w-full max-w-[320px] h-[450px] rounded-xl mx-auto"
                            style={{ backgroundImage: `url(${sideimg})` }}
                        >
                            {/* Visa Text */}
                            <p className="absolute top-[67%] md:top-[62%] lg:top-[67%] left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold">
                                Visa & Immigration
                            </p>

                            {/* Call Card */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white py-2 px-3 rounded-lg shadow-lg flex gap-3 items-center w-[60%] md:w-[77%] lg:w-[60%] max-w-[250px]">
                                <div className="bg-[#EF5533] p-1 rounded-full flex items-center justify-center -ml-8">
                                    <img src={phone} alt="Call" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs text-[#EF5533] font-medium">Need Help? Book Lab Visit</p>
                                    <p className="text-[#002768] text-base font-bold">+91 8699964265</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className='w-full lg:w-[67%] flex flex-col items-center md:items-start text-center md:text-left'>
                        <div>
                            <h2 className='font-bold text-[30px] md:text-[42px] text-[#002768]'>Business Visa Processing</h2>
                            <p className='text-[#002768] text-sm w-full md:w-[80%] mb-2'>
                                We guide our clients through difficult issues, bringing insight and judgment to each situation. Our
                                innovat ive approaches create original solutions to our clients' most complex domestic & multi
                                juristictional deal s and disputes. By thinking on behalf of our clients every day, we anticipate what
                                they want, provide what they need and build lasting relationships.
                            </p>
                            <h4 className='text-[#002768] font-medium text-lg'>
                                Over the last 35 Years we made an impact that is strong & we have long way to go.
                            </h4>
                            <p className='text-[#002768] w-full md:w-[80%]'>
                                These are the concepts that shape our distinctive culture & differentiate us from others. They true
                                the unique spirit of our Firm guide the behaviors that enable us to deliver the promises we make to
                                our clients and our people.
                            </p>
                        </div>

                        {/* Service Process */}
                        <div className='py-2 w-full'>
                            <h3 className='text-[#002768] font-semibold text-[28px] md:text-[32px] inline-block relative mb-2'>
                                Service Process
                                <span className='block absolute bottom-0 left-0 h-[3px] w-[25px] bg-[#EF5533] rounded'></span>
                            </h3>
                            <p className='text-[#002768] pb-2 '>At Immigway our culture comes to life through three core values:</p>
                            <ul className='flex flex-col gap-1 text-[#002768]'>
                                <li className='flex gap-2 text-sm md:text-lg'><img src={tick} alt="" />We seize opportunities to innovate and grow</li>
                                <li className='flex gap-2 text-sm md:text-lg'><img src={tick} alt="" />We are one firm with a shared sense of purpose</li>
                                <li className='flex gap-2 text-sm md:text-lg'><img src={tick} alt="" />We care about each other and the world around us</li>
                            </ul>

                            {/* Images */}
                            <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-between pt-6 w-full md:w-[90%] gap-4'>
                                <div className='w-[90%] md:w-[48%]'><img src={talking} alt="" /></div>
                                <div className='w-[90%] md:w-[48%]'><img src={wavingflag} alt="" /></div>
                            </div>

                            {/* Accordion */}
                            <div className='pt-10 w-full flex flex-col items-center md:items-start'>
                                {faqData.map((item, index) => (
                                    <div key={index} className='mb-2 rounded-lg overflow-hidden transition-all duration-300 w-full md:w-[90%]'>
                                        <div
                                            className={`flex justify-between items-center px-2 py-3 cursor-pointer text-[16px] font-base ${activeIndex === index ? 'bg-[#EF5533] text-white' : 'bg-white text-[#002768]'}`}
                                            onClick={() => setActiveIndex(index)}
                                        >
                                            <span>Q{index + 1}. {item.question}</span>
                                            <span className='text-xl'>{activeIndex === index ? '−' : '+'}</span>
                                        </div>
                                        {activeIndex === index && (
                                            <div className='px-4 py-3 text-sm text-[#002768] bg-[#fef2f2]'>
                                                {item.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Document Process Steps */}
                        <div className='py-2 w-full'>
                            <h3 className='text-[#002768] font-semibold text-[28px] md:text-[32px] inline-block relative mb-2'>
                                Service Process
                                <span className='block absolute bottom-0 left-0 h-[3px] w-[25px] bg-[#EF5533] rounded'></span>
                            </h3>
                            <div className='pt-3 w-full md:w-[90%]'>
                                <img src={document} alt="" />
                            </div>
                            <div className='flex flex-wrap md:flex-nowrap md:justify-between justify-center gap-2 pt-8'>
                                <div className='flex flex-col justify-center items-center md:items-start gap-2'>
                                    <div className='flex justify-center gap-4 w-[85%] lg:w-[70%] '>
                                        <div className='rounded-full shadow-md flex justify-center items-center w-25 h-10 bg-white text-[#EF5533] font-medium'>
                                            1
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <h4 className='text-[#002768] font-medium text-[16px]'>Documentation List</h4>
                                            <p className='text-[#002768] text-[14px] '>These are the concepts that shape our distinctive culture & differentiate us from others.</p>
                                        </div>
                                    </div>

                                    <div className='flex justify-center gap-4 w-[85%] lg:w-[70%]'>
                                        <div className='rounded-full shadow-md flex justify-center items-center w-25 h-10 bg-white text-[#EF5533] font-medium'>
                                            2
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <h4 className='text-[#002768] font-medium text-[16px]'>IELTS Score</h4>
                                            <p className='text-[#002768] text-[14px]'>These are the concepts that shape our distinctive culture & differentiate us from others.</p>
                                        </div>
                                    </div>

                                    <div className='flex justify-center gap-4 w-[85%] lg:w-[70%] '>
                                        <div className='rounded-full shadow-md flex justify-center items-center w-25 h-10 bg-white text-[#EF5533] font-medium'>
                                            3
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <h4 className='text-[#002768] font-medium text-[16px]'>NOC Collection</h4>
                                            <p className='text-[#002768] text-[14px]'>These are the concepts that shape our distinctive culture & differentiate us from others.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center md:items-start gap-2'>
                                    <div className='flex justify-center gap-4 w-[85%] lg:w-[70%]'>
                                        <div className='rounded-full shadow-md flex justify-center items-center w-25 h-10 bg-white text-[#EF5533] font-medium'>
                                            4
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <h4 className='text-[#002768] font-medium text-[16px]'>Offer Letters</h4>
                                            <p className='text-[#002768] text-[14px]'>These are the concepts that shape our distinctive culture & differentiate us from others.</p>
                                        </div>
                                    </div>

                                    <div className='flex justify-center gap-4 w-[85%] lg:w-[70%]'>
                                        <div className='rounded-full shadow-md flex justify-center items-center w-25 h-10 bg-white text-[#EF5533] font-medium'>
                                            5
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <h4 className='text-[#002768] font-medium text-[16px]'>CA report Submission</h4>
                                            <p className='text-[#002768] text-[14px]'>These are the concepts that shape our distinctive culture & differentiate us from others.</p>
                                        </div>
                                    </div>

                                    <div className='flex justify-center gap-4 w-[85%] lg:w-[70%]'>
                                        <div className='rounded-full shadow-md flex justify-center items-center w-25 h-10 bg-white text-[#EF5533] font-medium'>
                                            6
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <h4 className='text-[#002768] font-medium text-[16px]'>Study Permit</h4>
                                            <p className='text-[#002768] text-[14px]'>These are the concepts that shape our distinctive culture & differentiate us from others.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Client Testimonial Video */}
                        <div className='py-2 w-full'>
                            <h3 className='text-[#002768] font-semibold text-[28px] md:text-[32px] inline-block relative mb-2'>
                                Clients Testimonial
                                <span className='block absolute bottom-0 left-0 h-[3px] w-[25px] bg-[#EF5533] rounded'></span>
                            </h3>
                            <div className='w-full md:w-[90%]'>
                                <video src={airport} autoPlay muted loop playsInline className='rounded-2xl w-full h-auto'></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
