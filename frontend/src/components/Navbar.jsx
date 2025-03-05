import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation(); // Get current route

  // Function to handle section clicks (for hash links)
  const handleSetActive = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  // Update active section when the route changes (for normal `/` links)
  useEffect(() => {
    if (location.hash) {
      setActiveSection(location.hash.substring(1)); // Remove '#' from hash
    } else {
      setActiveSection(location.pathname); // Track normal route changes
    }
  }, [location]);

  return (
    <div className='flex justify-between items-center text-sm py-4 mb-5'>
      {/* Company's logo */}
      <p>MediBridge.</p>

      {/* Navlinks */}
      <ul className='hidden md:flex gap-5 items-start font-medium'>
        {/* Normal Links */}
        <NavLink to='/' onClick={() => setActiveSection('/')}>
          <li className='py-1'>Home</li>
          <hr className={`border-none outline-none h-0.5 bg-blue-500 w-3/4 m-auto ${activeSection === "/" ? "block" : "hidden"}`} />
        </NavLink>

        <NavLink to='/about' onClick={() => setActiveSection('/about')}>
          <li className='py-1'>About Us</li>
          <hr className={`border-none outline-none h-0.5 bg-blue-500 w-3/4 m-auto ${activeSection === "/about" ? "block" : "hidden"}`} />
        </NavLink>

        <NavLink to='/contact' onClick={() => setActiveSection('/contact')}>
          <li className='py-1'>Contact Us</li>
          <hr className={`border-none outline-none h-0.5 bg-blue-500 w-3/4 m-auto ${activeSection === "/contact" ? "block" : "hidden"}`} />
        </NavLink>

        <NavLink to='/services' onClick={() => setActiveSection('/services')}>
          <li className='py-1'>Our Services</li>
          <hr className={`border-none outline-none h-0.5 bg-blue-500 w-3/4 m-auto ${activeSection === "/services" ? "block" : "hidden"}`} />
        </NavLink>

        {/* Hash Links (Manual Active State) */}
        <NavLink to='#Blog' onClick={() => handleSetActive("Blog")}>
          <li className='py-1'>Blog</li>
          <hr className={`border-none outline-none h-0.5 bg-blue-500 w-3/4 m-auto ${activeSection === "Blog" ? "block" : "hidden"}`} />
        </NavLink>

        <NavLink to='#FAQ' onClick={() => handleSetActive("FAQ")}>
          <li className='py-1'>FAQ</li>
          <hr className={`border-none outline-none h-0.5 bg-blue-500 w-3/4 m-auto ${activeSection === "FAQ" ? "block" : "hidden"}`} />
        </NavLink>

        <NavLink to='#Testimonials' onClick={() => handleSetActive("Testimonials")}>
          <li className='py-1'>Testimonials</li>
          <hr className={`border-none outline-none h-0.5 bg-blue-500 w-3/4 m-auto ${activeSection === "Testimonials" ? "block" : "hidden"}`} />
        </NavLink>
      </ul>

      {/* Create account button */}
      <div>
        <button>Create Account</button>
      </div>
    </div>
  );
};

export default Navbar;
