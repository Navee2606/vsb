import React from 'react';

export default function Courses() {
  const course = {
    Ug: [
      { course: 'B.E. ECE' },
      { course: 'B.E. CSE' },
      { course: 'B.Tech IT' },
      { course: 'B.E. EEE' },
      { course: 'B.E. Civil' },
      { course: 'B.E. Mech' },
      { course: 'B.Tech Chemical' },
      { course: 'B.Tech BioTechnology' },
      { course: 'B.E. BioMedical' },
      { course: 'B.E. CCE' },
      { course: 'B.E. CSBS' },
      { course: 'B.E. Agri' },
      { course: 'B.E. AIDS' }
    ],
    Pg: [
      { course: 'M.E. Applied Electronics' },
      { course: 'M.E. CSE' },
      { course: 'M.E. Power Systems' }
    ]
  };

  return (
    <section id='courses' className='flex flex-col items-center bg-primary2 py-10'>
      <div className='mb-10'>
        <h1 className='text-4xl text-white mb-5 font-bold'>Our Courses</h1>
        <p className='text-3xl text-primary'>Check out the new releases of our courses</p>
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='text-3xl text-white mb-3'>Ug Courses</h2>
        {course.Ug.map((course, index) => (
          <div key={index} className='btn mb-3'>
            <p className='text-center text-white'>{course.course}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='text-3xl text-white mb-3'>Pg Courses</h2>
        {course.Pg.map((course, index) => (
          <div key={index} className='btn mb-3'>
            <p className='text-center text-white'>{course.course}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
