import React from 'react'
import Nav from './nav/Nav'

const Hero = () => {
  return (
    <div className='bg-[url(./assets/techbg.jpg)] h-max p-4 rounded-lg'>
        <Nav />
        <div className='ml-24 mt-24'>
            <p className='text-white text-sm/6'>Spin Technologies</p>
            <p className='text-6xl text-white font-medium font-Roboto pb-2 pt-4'>Spin Technologies</p>
            <p className='text-5xl text-white font-medium font-Roboto pb-2'>Design Agency</p>
            <p className='text-5xl text-white font-medium font-Roboto'>For growing Brands</p>
            <div className='flex justify-end'>
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