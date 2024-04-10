import React from 'react'
import VSB from '../assests/newVSb-removebg-preview.png'
export default function About() {
  const config = {
    line1: 'V.S.B. Educational Trust, established in 2000 by Mr. V.S. Balsamy, aims to promote and manage educational institutions while maintaining high academic standards and discipline.',
    line2: 'V.S.B. Engineering College in Karur was founded in 2002, followed by V.S.B. College of Engineering Technical Campus in Coimbatore in 2012, both dedicated to providing quality education and fostering academic excellence.',
    line3: 'The Trust extends its mission beyond establishing institutions, engaging in various educational activities to contribute to regional development. Through initiatives, it seeks to make a meaningful impact in education.'
};

  return (
    <section id ='about' className='flex flex-col md:flex-row bg-primary2 px-5'>
     <div className='py-5 md:w-1/2'>
        <img className='w-[500px]' src={VSB} />
     </div>
     <div className='md:w-1/2 flex justify-center ' >
            <div className='flex flex-col text-primary justify-center'>
        
            <h1 className='text-4xl  border-b-4 border-white mb-5 w-[170px] font-bold'>About Us</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
            
            </div>
            
        </div>
    </section>
  )
}
