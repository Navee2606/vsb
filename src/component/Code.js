import React from 'react';

export default function Code() {
  return (
    <section className='flex flex-col md:flex-row bg-primary px-5'>
      <div className='py-5 md:flex md:justify-center md:space-x-10'>
        <div className='flex flex-col items-center'>
          <h1 className='text-primary2'>Karur</h1>
          <h2 className='text-primary2'>Counselling Code: 1234</h2>
        </div>
        <div className='flex flex-col items-center mt-5 md:mt-0'>
          <h1 className='text-primary2'>Coimbatore</h1>
          <h2 className='text-primary2'>Counselling Code: 1234</h2>
        </div>
      </div>
    </section>
  );
}
