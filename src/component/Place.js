import React from 'react';
import Jiraya from '../assests/placement offers.jpg'; // Corrected import path

export default function Place() {
  const config = {
    line1: 'Placement Cell interacts with the reputed organizations all over the country for arranging campus interviews for the final year students. We make efforts to organize technical seminars, workshops and corporate expectation sessions.',
    line2: 'Industry personnel are invited periodically to enrich the knowledge of our student community with the latest technological innovations and industry practices.',
    line3: 'We produce graduates who are well equipped to handle the working norms of the industry and commerce in the public and private sectors and helping every student to define his/her career interest through individual counseling through experts.',
    projects: [
      {
        No: '1304',
        Offer: 'PLACEMENT OFFERS IN 2021'
      },
      {
        No: '1631',
        Offer: 'PLACEMENT OFFERS IN 2022'
      },
      {
        No: '1941',
        Offer: 'PLACEMENT OFFERS IN 2023'
      },
      {
        No: '1088',
        Offer: 'PLACEMENT OFFERS IN 2023'
      },
    ]
  };

  return (
    <section id="place" className="flex flex-col md:flex-row bg-primary px-5">
      <div className="py-5 md:w-1/2 justify-center">
        <img className="w-[500px]" src={Jiraya} alt="Placement Offers" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col text-primary2 justify-center">
          <h1 className="text-4xl border-b-4 border-white mb-5 w-[170px] font-bold">CAREER PROSPECTS</h1>
          <h1 className='text-3xl'> More than 56 companies have arrived here...</h1>
          <br></br>
          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
          <p className="pb-5">{config.line3}</p>
        </div>
      </div>
      
    </section>
  );
}
