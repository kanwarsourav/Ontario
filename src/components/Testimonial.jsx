import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import aeroplane from '../assets/images/aeroplane.svg'; 

// Testimonial data
const testimonials = [
  {
    name: 'Oliver Spaltn',
    role: 'CEO at D.B.A Pvt. Ltd',
    image: 'https://randomuser.me/api/portraits/women/44.jpg', // Replace with your actual image
    review:
      'Their team’s expertise and commitment to quality helped us improve efficiency across the board.',
    rating: 5,
  },
  {
    name: 'Sophia Hill',
    role: 'CTO at TechNova',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    review:
      'Excellent support and clear communication throughout the entire process.',
    rating: 5,
  },
  {
    name: 'James Watson',
    role: 'Manager at BuildIt Inc.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review: 'The process was smooth, and the team was very professional.',
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className=" flex flex-col justify-center items-center text-center mb-12">
          <h4 className="flex gap-1 text-[#E64E37] text-lg font-medium"> <div>
            <img src={aeroplane} alt="" />
            </div> Clients Testimonials</h4>
          <h2 className= " text-[36px] font-bold text-[#002768] lg:w-[35%]  leading-tight">
            What customers saying about The Ontario
          </h2>
        </div>

        {/* Arrows + Slider inside container */}
        <div className="flex justify-center items-center gap-4 px-14">
          {/* Left Arrow */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="text-black w-10 h-10 flex items-center justify-center "
            aria-label="Previous"
          >
            <FaArrowLeft size={18} />
          </button>

          {/* Slider */}
          <div className="w-full ">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((t, idx) => (
                <div key={idx} className="px-3 my-6">
                  <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6  transform transition-transform duration-300 hover:scale-105 h-full">
                    {/* Image */}
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full  object-cover mb-3"
                    />
                    {/* Name + Role */}
                    <h4 className="font-semibold text-[#002768] text-base">{t.name}</h4>
                    <p className="text-gray-500 text-sm mb-3">{t.role}</p>

                    {/* Stars */}
                    <div className="flex  mb-2">
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} className="text-[#FF5A1F] text-sm mr-1" />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-[#002768] text-sm leading-snug">{t.review}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="text-black w-10 h-10 flex items-center justify-center "
            aria-label="Next"
          >
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
