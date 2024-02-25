import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-myPurple'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Rana, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I'm a fourth-year student at DePaul University. My roots are from Pakistan, but now I reside in Chicago.
                            I am passionate about crafting top-tier software that improves the lives of those around me.
                            With a blend of determination, creativity, and cultural insight,
                            I eagerly anticipate making a lasting difference in the world of software development.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
