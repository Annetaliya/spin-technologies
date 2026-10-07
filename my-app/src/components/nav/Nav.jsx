import React from 'react'

const Nav = () => {
  return (
    <nav className="flex justify-between pb-2 mb-4">
        <div className='font-medium text-white'>Logo</div>

        <ul className='md:flex flex-row gap-6 text-base font-Roboto'>
            <li className='hover:text-amber-600 text-white font-medium'>Home</li>
            <li className='hover:text-amber-600 text-white font-medium' >About us</li>
            <li className='hover:text-amber-600 text-white font-medium'>Contact Us</li>
        </ul>
        <p className='font-medium text-white'>Book a call</p>
        <div className='md:hidden'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="text-amber-600" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
          </div>
        
    </nav>
  )
}

export default Nav