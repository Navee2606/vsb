import React from 'react';
import ReactPlayer from 'react-player';

export default function Testimonials() {
  return (
    <section className='flex flex-col md:flex-row bg-primary px-5'>
     {/* <div className='py-5 md:w-1/2'>
        <div className='player-wrapper'>
          <ReactPlayer className='react-player' controls url='https://youtu.be/Y87eBJfz2wg?si=Xi5YEUcJolAWUBn-' />
        </div>
      </div> */}
      <div> 
        <h1 className='flex text-4xl text-white border-b-4 border-primary2 mb-5 w-[170px] font-hinata-font'>Testimonials</h1>
        <h1 className='text-3xl font-hinata-font border-b-4  mb-5 w-[170px] text-primary2 font-bold'>Campus Tour </h1>
        <p className='text-white'>Experience the vibrant campus life of V.S.B Engineering College, Karur, through our comprehensive campus tours. Explore state-of-the-art facilities, interact with renowned faculty, and immerse yourself in the innovative learning environment. Discover your potential at V.S.B Engineering College today..!</p>
      </div>
      <div className='flex justify-center py-3 md:flex justify-center justify-end py-20 m1-5 w-20 '>
        
        <a className="nave" href="https://www.youtube.com/watch?v=Y87eBJfz2wg">To view</a>
        
      </div>
    </section>
  );
}
