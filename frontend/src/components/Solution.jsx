import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";

const Solution = () => {
  return (
    <div className='mt-10 md:mt-16 flex flex-col items-center justify-center gap-2'>
        <p className='text-center text-secondary font-medium text-base'>Fastest Solution</p>
        <p className='text-2xl md:text-3xl'>4 easy steps to get you solution</p>

        <div className='p-6 flex flex-col md:flex-row items-center justify-center gap-8 text-center'>
                <div className='flex flex-col gap-2  items-center justify-center p-6 cursor-pointer hover:scale-105 transition-all'>
                    <FaUserDoctor className='text-3xl text-pink-300'/>
                    <p className='text-gray-800 font-semibold'>Search Doctors</p>
                    <p className=' text-gray-500'>We're here to help whenever you feel ill, but keeping you healthyis our better priority </p>
                </div>
                <div className='flex flex-col gap-2  items-center justify-center p-6 cursor-pointer hover:scale-105 transition-all'>
                    <FaUserDoctor className='text-3xl text-orange-300'/>
                    <p className='text-gray-800 font-semibold' >Check doctor profile</p>
                    <p className=' text-gray-500'>We're here to help whenever you feel ill, but keeping you healthyis our better priority </p>
                </div>
                <div className='flex flex-col gap-2  items-center justify-center p-6 cursor-pointer hover:scale-105 transition-all'>
                    <FaUserDoctor className='text-3xl text-blue-300' />
                    <p className='text-gray-800 font-semibold'>Schedule Appointment</p>
                    <p className=' text-gray-500'>We're here to help whenever you feel ill, but keeping you healthyis our better priority </p>
                </div>
                <div className='flex flex-col gap-2  items-center justify-center p-6  cursor-pointer hover:scale-105 transition-all'>
                    <FaUserDoctor className='text-3xl text-red-300'/>
                    <p className='text-gray-800 font-semibold'>Get Your Solution</p>
                    <p className=' text-gray-500'>We're here to help whenever you feel ill, but keeping you healthyis our better priority </p>
                </div>

                
                
            
        </div>
    </div>
  )
}

export default Solution