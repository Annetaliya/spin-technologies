import React from 'react'
import './home.css'
import Nav from '../nav/Nav'
import Hero from '../Hero'
const Home = () => {
  return (
    
    <div>
      {/* <Nav /> */}
      <Hero />
      <div className='mt-24 ml-4'>
        <div className='flex gap-4 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-amber-600 font-bold" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
          <h1 className='font-Roboto font-semibold text-3xl pb-4'>Who we are</h1>
        </div>
        <p className='font-Roboto font-medium text-5xl  pb-4'>We build websites tailored for your business domain</p>
        <p className='font-Roboto font-medium text-5xl tracking-wide pb-4 text-gray-400'>emphasizing on brand dominance</p>
        <p className='font-Roboto font-medium text-5xl tracking-wide pb-4 text-gray-500'>and SEO Optimization</p>
      </div>
    </div>
  )
}
export default Home;
