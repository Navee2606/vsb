import React from 'react'
import IMG from '../assests/our_recruters-removebg-preview.png'
export default function Recruiter() {
  return (
    <section className='flex flex-col md:flex-row bg-primary2 px-5'>
    
    <div className='md:w-1/2 flex justify-center ' >
           <div className='flex flex-col  justify-center'>
       
           <h1 className='text-3xl  border-b-4 text-primary border-white mb-5 w-[170px]  font-bold'>PLACEMENT SUPPORT</h1>
           <h1 className='text-4xl font-hinata-font mb-5 w-[170px] font-bold'>Our Recruiters</h1>
           
           
           </div>
           
       </div>
       <div className='py-5 md:w-1/2'>
       <img className='w-[600px]' src={IMG} />
    </div>
   </section>
  )
}
