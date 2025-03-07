import React, {useState, useEffect} from 'react'
import {NavLink, useNavigate, useLocation} from 'react-router-dom'
import profile from '../assets/Portrait.png'
import { IoMdArrowDropdown } from "react-icons/io"



const Navbar = () => {
  const [activeSection, setActiveSection] = useState('')
  const [token, setToken] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=>{
    setActiveSection(location.pathname)
  }, [location])
  return (
    <div className='flex items-center justify-between py-4 mb-4'>
      {/* Company's logo */}
      <p>DocOnCall</p>

      {/* NavLinks */}
      <ul className='hidden md:flex gap-5 items-start font-medium'>
        <NavLink to='/' onClick={()=>setActiveSection('/')}>
          <li>Home</li>
      <hr className={`w-3/4 m-auto border-none outline-none h-0.5 bg-primary ${activeSection ==='/' ?  'block' : 'hidden'}`} />
        </NavLink>

        <NavLink to='/about' onClick={()=>setActiveSection('/about')}>
          <li>About Us</li>
          <hr className={`w-3/4 m-auto border-none outline-none h-0.5 bg-primary ${activeSection ==='/about' ?  'block' : 'hidden'}`}/>
        </NavLink>

        <NavLink to='/service' onClick={()=>setActiveSection('/service')}>
          <li>Services</li>
          <hr className={`w-3/4 m-auto border-none outline-none h-0.5 bg-primary ${activeSection ==='/service' ?  'block' : 'hidden'}`}/>
        </NavLink>

        <NavLink to='/contact' onClick={()=>setActiveSection('/contact')}>
          <li>Contact us</li>
          <hr className={`w-3/4 m-auto border-none outline-none h-0.5 bg-primary ${activeSection ==='/contact' ?  'block' : 'hidden'}`}/>
        </NavLink>
      </ul>

      {/* Button */}
      <div className='flex items-center gap-4'>
        {
          token
          ? 
          <div className='flex items-center gap-1 group relative cursor-pointer'>
            <img src={profile} alt="profile pic" className='w-8 rounded-full '/>
            <IoMdArrowDropdown />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium hidden group-hover:block z-20'>
              <div className='min-w-48 bg-primary flex flex-col gap-4 text-white p-4'>
                <p className='hover:text-secondary' onClick={()=>navigate('/profile')}>My profile</p>
                <p className='hover:text-secondary' onClick={()=>navigate('/appointment')}>My Appointment</p>
                <p onClick={()=>setToken(false)} className='hover:text-secondary'>Logout</p>
              </div>
            </div>
          </div>
          :
          <button className='bg-primary px-5 py-3 text-white rounded-full hidden md:block hover:cursor-pointer'  onClick={()=>navigate('/login')}> Create an Account</button>
        }
        
      </div>
    </div>
  )
}

export default Navbar