import React from 'react'
import Nav from './nav/Nav'

const Hero = () => {
  return (
    <div className='bg-[url(./assets/techbg.jpg)] h-max p-4 rounded-lg'>
        <Nav />
        <div className='ml-24 mt-32
        '>
            <p className='text-white text-sm/6'><span className='text-amber-600'>Spin</span> Technologies</p>
            <p className='md:text-6xl text-white font-medium font-Roboto pb-2 pt-4'>Spin Technologies</p>
            <p className='text-5xl text-white font-medium font-Roboto pb-2'>Design Agency</p>
            <p className='text-5xl text-white font-medium font-Roboto'>For growing Brands</p>
            <p className='text-white pt-6'>High Performance Web Development, Brand Systems and Bespoke Logo Designs</p>
            <p className='text-white'>Tailored for small businesses, schools and Hospitals</p>
            <div className='flex gap-4 pt-6'>
                <button className='bg-blue-600 text-white p-4 rounded-sm font-medium'>Explore Our works</button>
                <button className='bg-white text-blue-600 p-4 rounded-sm font-medium'>Start a project</button>
            </div>
            <div className='sm:flex justify-end'>
                <div className='flex flex-col pt-4'>
                    <p className='text-white font-medium font-Roboto pb-2'>Web design</p>
                    <p className='text-white'>Branding and logo design</p>
                    <p className='text-white'>For small and medium Enterprices</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Hero