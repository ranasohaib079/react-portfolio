import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-myPurple'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Rana
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Computer Science Student.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm fueled by a passion for expanding my knowledge and expertise in full-stack development and diverse areas of technology.
          I aspire to contribute meaningfully to the ever-evolving landscape of computer science and innovation.
        </p>
        <div >
          <Link to="work" smooth={true} duration={500} className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-myPurple hover:border-myPurple'
            style={{ width: 'fit-content' }}>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
