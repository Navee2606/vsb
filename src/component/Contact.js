import React from 'react'
import ConIma from '../assests/vector-contact-us-background-removebg-preview.png'

export default function Contact() {
  return (
    
      <section id='contact' className="flex flex-col md:flex-row py-10 bg-primary2">
        <div className="py-5  md:w-1/2  flex justify-center md:justify-end">
          <img className='w-[300px]'src={ConIma} alt="Contact" /> {/* Adjust image width */}
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="flex flex-col justify-center items-center"> {/* Center align content */}
            <h1 className="text-4xl border-b-4 border-primary mb-5  font-hinata-font">For more details, fill out the form</h1> {/* Adjust width */}
            <a className="btn" href="https://docs.google.com/forms/d/e/1FAIpQLSeLopqvhn7laDGHNq22HrSvvK5TJxUsucSdIFarOWyPF3WctA/viewform">Fill this form</a>
             <h1 className='flex flex-center py-5'>Or</h1>
            
             <h1 className="text-4xl border-b-4 border-primary mb-5  font-hinata-font"> Call us by</h1>
             <h1 className='text-2xl border-b-4 mb-5'>+91 9003812130 </h1>
             <h1 className='text-2xl border-b-4 mb-5'>+91 8667709239</h1>

          </div>
        </div>
      </section>
    
    
  )
}
