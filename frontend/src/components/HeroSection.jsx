import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Doc from '../assets/Doc1.png'

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/* The left side */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 m-auto md:py-[10vw] md:mb-[-30px]'>
            <div className='flex justify-center flex-row gap-2 items-start  px-4 min-w-48 '>
                <hr  className='h-0.5 m-auto bg-secondary w-1/4 border-none outline-none '/>
                <p className='text-base text-secondary font-medium'>Why choose us </p>
            </div>
            <p className='text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight  '>
                Comprehensive Healthcare, <br />Just a Click Away.
            </p>
            <p>Book doctor appointments, access lab services, <br /> get expert dental care, and consult with top nutritionists<br />—all in one place.</p>
            <div>
                <button>Book appointment <FaArrowRight /> </button>
            </div>
        </div>

        {/* The right side */}
        <div className='md:w-1/2 relative'>
            <img src={Doc} alt="" className='w-full md:absolute bottom-0 h-auto' />
        </div>
    </div>
  )
}

export default HeroSection