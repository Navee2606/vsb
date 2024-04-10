import React from 'react'
import { FiYoutube, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';
import { MdLocalPhone,MdEditLocation,MdAlternateEmail } from "react-icons/md";

export default function Final() {
    const config = {
        subtitle: "I'm a Java and Front-End developer",
        social: { 
          insta: 'https://www.instagram.com/vsbec_karur/',
          lin: 'https://www.linkedin.com/company/vsb-engineering-college/',
          Yt: 'https://www.youtube.com/@V.S.B.EngineeringCollegeKarur/videos', // You haven't provided a value for Yt and fb in your config object, please add them as needed.
          fb: 'https://www.facebook.com/VSBECKarur/'
        }
      };
    const course = {
        Ug: [
          { course: '.B.E. ECE',
            link:'https://www.vsbec.com/ece/'
        },
          { course: '>B.E. CSE',
            link: 'https://www.vsbec.com/computer-science-and-engineering/'
        },
          { course: '>B.Tech IT',
            link:'https://www.vsbec.com/it/'
        },
          { course: '>B.E. EEE' ,
            link:'https://www.vsbec.com/eee/'
        },
          { course: '>B.E. Civil',
            link:'https://www.vsbec.com/civil-engineering/'
        },
          { course: '>B.E. Mech',
            link:'https://www.vsbec.com/mech/'
        },
          { course: '>B.Tech Chemical',
            link:'https://www.vsbec.com/chemical-engineering/'
        },
       { course: '>B.Tech BioTechnology',
          link:'https://www.vsbec.com/bio-technology/'
        },
          { course: '>B.E. BioMedical' ,
           link:'https://www.vsbec.com/bio-medical/'
         },
          { course: '>B.E. CCE',
          link:'https://www.vsbec.com/ece/'
         },
          { course: '>B.E. CSBS',
        link:'https://www.vsbec.com/bio-technology/' },
          { course: '>B.E. Agri',
            link:'https://www.vsbec.com/bio-technology/'
        },
          { course: '>B.E. AIDS' ,
            link:'https://www.vsbec.com/bio-technology/'
         }
        ],
    }
    return (
        <section className='flex flex-col md:flex-row bg-grey px-5'>
        <div className='py-5 justify-center md:w-1/2 mt-10 justify-center'>
            <h1><MdEditLocation /> NH-67 Covai Road, Karudayampalayam post, Karur-639111.</h1>
            <h1><MdLocalPhone /> +91 90038 12130</h1>
            <h1><MdAlternateEmail />poornachandran6493@gmail.com </h1>
        </div>{/*
        <div className='flex flex-col items-center'>
        <h2 className='text-3xl  mb-3'>Courses</h2>
        {course.Ug.map((course, index) => (
          <div key={index} className=' mb-3'>
            <p className='text-center '><a href={course.link}>{course.course}</a></p>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center px-32'>
          <h1>Contact Us On</h1>
          <div className="flex py-10 px-15 ">
          <a href={config.social.insta} className="pr-5 hover:text-white"><FiInstagram size={30}/></a>
          <a href={config.social.lin} className="pr-5 hover:text-white"><FiLinkedin size={30}/></a>
          <a href={config.social.Yt} className="pr-5 hover:text-white"><FiYoutube size={30}/></a>
          <a href={config.social.fb} className="pr-5 hover:text-white"><FiFacebook size={30}/></a>
          </div>
      </div>*/}
      </section>
  )
}
