import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden min h-screen' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2 flex flex-col items-center text-center' >
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-6 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/mdzaid2005/' target='_blank'>Mohammed Zaid</a>, a 2026 BITS Pilani graduate🎓 specializing in Computer Science Engineering. My passion lies in Offensive Security and Ethical Hacking, which I view as the most vital component of digital defense. I specialize in leveraging a deep understanding of robust backend systems (Python, Java, C) not just to build, but to strategically test and proactively fortify them against sophisticated attacks. 
              <br />
              ✍️ My expertise is validated by comprehensive professional training, most notably the IBM Ethical Hacking Professional Certificate and zSecurity Red Team Certifications. I use this offensive mindset—complemented by core defensive and analytical credentials like the ISC2 CC, Google Cybersecurity, and Cloud Security certifications—to master the full security lifecycle. I am driven by the thrill of discovering vulnerabilities and providing actionable remediation for high-stakes environments. </p>

            <ButtonLink
              url='https://drive.google.com/file/d/1wCAhFXaksWJHgAo_blGPnCme7JUdYcxf/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-[-100px] flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;