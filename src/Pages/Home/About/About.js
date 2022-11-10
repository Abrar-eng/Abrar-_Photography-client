import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    
                </div>
                <div className='w-1/2'>
                    <p className="text-2xl font-bold text-sky-500">About Us</p>
                    <h1 className="my-5 text-5xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in this field</h1>
                    <p className="py-6">Photography is the art of capturing light with a camera, usually via a digital sensor or film, to create an image. With the right camera equipment, you can even photograph wavelengths of light invisible to the human eye, including UV, infrared, and radio. </p>
                    <p >We have many experiencefull employees. </p>
                    
                </div>
            </div>
        </div>
    );
};

export default About;