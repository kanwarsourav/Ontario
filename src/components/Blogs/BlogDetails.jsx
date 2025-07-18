import React from 'react';
import HeaderBlogDetails from './HeaderBlogDetails';
import smiling from '../../assets/images/smiling.svg';
import user from '../../assets/images/user.svg';
import calender from '../../assets/images/calender.svg';
import tick from '../../assets/images/tick.svg';
import thumbsup from '../../assets/images/thumbsup.svg';
import meeting from '../../assets/images/meeting.svg';
import searchIcon from '../../assets/images/searchicon.svg';
import doe from '../../assets/images/doe.svg';
import recentpost from '../../assets/images/recentpost.svg';

export default function BlogDetails() {
    return (
        <>
            <HeaderBlogDetails />

            <div>
                <div className='max-w-7xl mx-auto px-4 md:px-12 py-10 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-6'>
                    {/* LEFT CONTENT */}
                    <div className='w-full lg:w-[67%] flex flex-col items-center md:items-start'>
                        <div>
                            <img src={smiling} alt="" />
                        </div>
                        <div className='flex gap-4 pt-4'>
                            <h6 className='flex text-[#E64E37] gap-2'><img src={user} alt="" />By Admin</h6>
                            <h6 className='flex text-[#E64E37] gap-2'><img src={calender} alt="" />July 11, 2025</h6>
                        </div>
                        <div>
                            <h2 className='font-bold text-[28px] md:text-[38px] w-full md:w-[90%] leading-none pt-4 text-[#002768] text-center md:text-left'>
                                How to be selected in the top ranked university fro all over United Kingdom
                            </h2>
                            <div className='flex flex-col gap-3 pt-4 text-sm text-[#002768] text-center md:text-left'>
                                <p>
                                    Our business consulting programs helps to break the performance of your business down into customers
                                    and product groups so you know exactly which customers or product groups are working and which ones aren’t
                                    you can make the changes needed to get the best results out of your business.
                                </p>
                                <p>
                                    Our business consulting programs helps to break the performance of your business
                                    down into customers and product groups so you know exactly which customers or product groups
                                    are working and which ones aren’t you can make the changes needed to get the best results out
                                    of your business.
                                </p>
                                <p>
                                    These are the concepts that shape our distinctive culture & differentiate us from
                                    others. They ture the unique spirit of our Firm guide the behaviors that enable us to deliver the
                                    promises we make to our clients and our people.
                                </p>
                            </div>

                            <div>
                                <h3 className='font-semibold text-[26px] md:text-[34px] text-[#002768] pt-5 text-center md:text-left'>The Ontario Values</h3>
                                <p className='text-[#002768] text-sm text-center md:text-left'>At The Ontario our culture comes to life through three core values:</p>
                                <ul className='flex flex-col gap-2 pt-3 text-[#002768] text-sm'>
                                    <li className='flex gap-2'><img src={tick} alt="" />We seize opportunities to innovate and grow</li>
                                    <li className='flex gap-2'><img src={tick} alt="" />We are one firm with a shared sense of purpose</li>
                                    <li className='flex gap-2'><img src={tick} alt="" />We care about each other and the world around us</li>
                                </ul>
                            </div>
                        </div>

                        <div className='flex pt-5 flex-col md:flex-row gap-4'>
                            <div><img src={thumbsup} alt="" className='w-full md:w-[90%]' /></div>
                            <div><img src={meeting} alt="" className='w-full md:w-[90%]' /></div>
                        </div>

                        <div className='pt-4 text-[#002768] text-sm w-full md:w-[90%] flex flex-col gap-2 text-center md:text-left'>
                            <p>
                                We guide our clients through difficult issues, bringing our insight and judgment to each situation.
                                Our innovative approaches create original solutions to our clients' most complex domestic
                                & multi jurisdictional deals and disputes.
                            </p>
                            <p>
                                By thinking on behalf of our clients every day, we anticipate what they want,
                                provide what they need & build lasting relationships. These are the concept that
                                shape our distinctive culture and differentiate us from others.
                            </p>
                        </div>

                        <div className='flex gap-2 pt-5 text-[#002768] flex-wrap justify-center md:justify-start'>
                            <h5>Share</h5>
                            <span>:</span>
                            <h5 className='border px-2 rounded-xl'>Facebook</h5>
                            <h5 className='border px-2 rounded-xl'>Twitter</h5>
                            <h5 className='border px-2 rounded-xl'>Pinterest</h5>
                            <h5 className='border px-2 rounded-xl'>Instagram</h5>
                            <h5 className='border px-2 rounded-xl'>Linkedin</h5>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className='w-full md:w-[70%] lg:w-[27%] flex flex-col gap-8 items-center md:items-start'>
                        {/* SEARCH BAR */}
                        <div className='relative w-full'>
                            <input
                                type='text'
                                placeholder='Search'
                                className='w-full border border-[#002768] rounded-full py-2 pl-5 pr-12 text-[#002768] placeholder:text-[#002768] focus:outline-none'
                            />
                            <button className='absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#E64E37] rounded-full w-9 h-9 flex items-center justify-center'>
                                <img src={searchIcon} alt="Search" className='w-4 h-4' />
                            </button>
                        </div>

                        {/* COMMENT SECTION */}
                        <div className='bg-white rounded-xl shadow p-4 w-full'>
                            <h3 className='text-[#002768] font-bold text-xl mb-4 text-center'>Make A Comments</h3>
                            <form className='flex flex-col gap-3'>
                                <div className='flex flex-col sm:flex-row gap-3'>
                                    <input
                                        type="text"
                                        placeholder="Name*"
                                        className="w-full sm:w-1/2 px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        className="w-full sm:w-1/2 px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
                                    />
                                </div>
                                <textarea
                                    placeholder="Comments*"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg h-28 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#E64E37] text-white rounded-full py-2 font-semibold hover:bg-[#c63d2c]"
                                >
                                    Make Comment
                                </button>
                            </form>

                            {/* Comments List */}
                            <div className='mt-5 max-h-52 overflow-y-auto flex flex-col gap-3 pr-1'>
                                {/* Comment 1 */}
                                <div className='flex items-start gap-3 p-3 rounded-xl bg-[#FFEDEC]'>
                                    <img
                                        src={doe}
                                        alt="User"
                                        className="rounded-full w-10 h-10"
                                    />
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <h4 className="text-[#002768] font-semibold">Mellisa Doe</h4>
                                            <span className="text-sm text-[#E64E37]">June 29, 2025</span>
                                        </div>
                                        <p className="text-[#002768] text-sm leading-snug">
                                            Lorem ipsum dolor sit amet, consectetur. Ut enim ad minima veniam quis nostrum.
                                        </p>
                                    </div>
                                </div>

                                {/* Comment 2 */}
                                <div className='flex items-start gap-3 p-3 rounded-xl bg-[#E7F1FF]'>
                                    <img
                                        src={doe}
                                        alt="User"
                                        className="rounded-full w-10 h-10"
                                    />
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <h4 className="text-[#002768] font-semibold">Mellisa Doe</h4>
                                            <span className="text-sm text-[#E64E37]">June 29, 2025</span>
                                        </div>
                                        <p className="text-[#002768] text-sm leading-snug">
                                            Lorem ipsum dolor sit amet, consectetur. Ut enim ad minima veniam quis nostrum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RECENT POST SECTION */}
                        <div className="bg-white rounded-xl shadow p-4 w-full">
                            <h3 className="text-[#002768] font-bold text-xl mb-4">Recent Post</h3>
                            <div className="flex flex-col gap-4">

                                {/* Post 1 */}
                                <div className="flex gap-3 items-start border-b pb-3">
                                    <img
                                        src={recentpost} // Replace with actual thumbnail
                                        alt="Post Thumbnail"
                                        className="w-20 h-16 object-cover rounded-md"
                                    />
                                    <div className="flex flex-col justify-center text-sm text-[#002768]">
                                        <p className="font-semibold leading-snug">
                                            How consultation in business is affecting new ventures
                                        </p>
                                        <span className="text-[#E64E37] text-xs pt-1">January 11, 2023</span>
                                    </div>
                                </div>

                                {/* Post 2 */}
                                <div className="flex gap-3 items-start border-b pb-3">
                                    <img
                                        src={recentpost}
                                        alt="Post Thumbnail"
                                        className="w-20 h-16 object-cover rounded-md"
                                    />
                                    <div className="flex flex-col justify-center text-sm text-[#002768]">
                                        <p className="font-semibold leading-snug">
                                            How consultation in business is affecting new ventures
                                        </p>
                                        <span className="text-[#E64E37] text-xs pt-1">January 11, 2023</span>
                                    </div>
                                </div>

                                {/* Post 3 */}
                                <div className="flex gap-3 items-start pb-3">
                                    <img
                                        src={recentpost}
                                        alt="Post Thumbnail"
                                        className="w-20 h-16 object-cover rounded-md"
                                    />
                                    <div className="flex flex-col justify-center text-sm text-[#002768]">
                                        <p className="font-semibold leading-snug">
                                            How consultation in business is affecting new ventures
                                        </p>
                                        <span className="text-[#E64E37] text-xs pt-1">January 11, 2023</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
