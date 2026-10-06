import React from 'react'

const Nav = () => {
  return (
    <nav className="flex justify-between pb-2 mb-4">
        <div className='font-medium text-white'>Logo</div>
        <ul className='flex flex-row gap-6 text-base font-Roboto'>
            <li className='hover:text-amber-600 text-white font-medium'>Home</li>
            <li className='hover:text-amber-600 text-white font-medium' >About us</li>
            <li className='hover:text-amber-600 text-white font-medium'>Contact Us</li>
        </ul>
        <p className='font-medium text-white'>Book a call</p>
        
    </nav>
  )
}

export default Nav