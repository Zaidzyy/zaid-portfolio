
import React from "react";
import vpn from '../assets/web_image.jpg'
import copeople from '../assets/demo_image.jpg'
import port from '../assets/port_image.jpg'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Domestic AI Driven IDS' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={vpn} alt="" />
            </a>}
            {title=='ML Email Threat Classifier' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={copeople} alt="" />
            </a>}
            {title=='Zaid Portfolio' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={port} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500 mb-3">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <div className="flex flex-wrap gap-7 justify-center items-center flex-grow">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'ML Email Threat Classifier',
        description:'This project builds a machine learning-based system to detect phishing emails. It uses Natural Language Processing (NLP) for text vectorization and a Random Forest classifier to classify emails as phishing or legitimate.',
        image: {vpn},
        git:'https://github.com/Zaidzyy/ml-email-threat-classifier',
        technologies:['ML & AI' ,'Python' , 'HTML' , 'Scikit-learn' , 'Pandas']
    },
    {
        title:'Domestic AI Driven IDS',
        description:'This project is a lightweight, AI-enhanced Intrusion Detection System (IDS) designed to monitor network traffic on your home Wi-Fi network. It uses machine learning to flag unusual or potentially malicious activity in real time, with a modern dashboard and optional threat intelligence and auto-blocking features.',
        image: {copeople},
        git:"https://github.com/zaidzyy/domestic-ai-driven-intrusion-detection-system",
        technologies:['ML & AI' ,'Python' , 'Scapy' , 'Scikit-learn' , 'Pandas' , 'Threat Intelligence API']
    },
    {
        title:'Zaid Portfolio',
        description:'This project is a stunning portfolio that I exclusively designed for myself using React JS and tailwind CSS.This Project serves as a representation of a my work, highlighting everuthing about me and my intrests, projects, experiences.',
        image: {port},
        git:"https://github.com/zaidzyy/zaid-portfolio",
        technologies:[ 'React JS', 'tailwind CSS', 'HTML']
    }
]

export default Projects