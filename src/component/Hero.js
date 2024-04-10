import React from 'react';
import { FiYoutube, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';
import HeroImg from '../assests/logo-footer.png'; // Fixed typo in 'assets'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { MdLocalPhone,MdEditLocation,MdAlternateEmail } from "react-icons/md";

export default function Hero() {
  const config = {
    subtitle: "I'm a Java and Front-End developer",
    social: { 
      insta: 'https://www.instagram.com/vsbec_karur/',
      lin: 'https://www.linkedin.com/company/vsb-engineering-college/',
      Yt: 'https://www.youtube.com/@V.S.B.EngineeringCollegeKarur/videos', // You haven't provided a value for Yt and fb in your config object, please add them as needed.
      fb: 'https://www.facebook.com/VSBECKarur/'
    }
  };


  return (
    <section className="flex flex-col md:flex-row px-5 py-5 bg-primary justify-center">
      <h1 className='flex justify-center text-white md:text-white mt-1 px-10 flex'>Email-poornachandran6493@gmail.com</h1>
      <h1 className='flex justify-center text-white py-0 px-5 md:text-white mt-1 px-5 flex'> Contact - +91 90038 12130</h1> 
      

        <img className="md:w-1/3 px-20 py-5" src={HeroImg} />
      <div className="md:w-1/3 flex-col justify-center">
        <h1 className="text-white text-6xl font-naruto-font "> Hi,<br />
          <span className="text-black md:text-black px-4 m-3">This is</span>
          <p className="text-2xl md:text-2xl px-14 mt-3 hover:text-yellow">VSB ENGINEERING COLLEGE
          <span style={{ color: 'red' }}>
            <Cursor />
          </span>
          </p>
        </h1>
        
        <div className="flex py-10 px-12 ">
          <a href={config.social.insta} className="pr-5 hover:text-white"><FiInstagram size={30}/></a>
          <a href={config.social.lin} className="pr-5 hover:text-white"><FiLinkedin size={30}/></a>
          <a href={config.social.Yt} className="pr-5 hover:text-white"><FiYoutube size={30}/></a>
          <a href={config.social.fb} className="pr-5 hover:text-white"><FiFacebook size={30}/></a>
        </div>
      
      </div>
    
    </section>
  );
}
