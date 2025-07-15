
import React from "react";
import martrix from '../assets/martrix.png'
import crawler from '../assets/crawler.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {/* {title=='Martrix - One Stop KPI Portal' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={martrix} alt="" />
            </a>}
            {title=='Martekeedo - Crawler' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={crawler} alt="" />
            </a>} */}
              <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={image} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
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
                {/* <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a> */}
            </div>
        </div>
    );
};

const Projects = () => {
    return (

        <div className="pt-20 z-0 bg-black w-screen ">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12 pt-9">
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
        title:'Crawling utility for web scraping',
        description:'Martekeedo is a dynamic web crawler I crafted using React, Node JS and Cheerio library. This project is a modern and engaging platform that allows users to find the 404 error pages linked on their website, the number of documents uploaded on website and spell errors in the html of their pages.',
        image: crawler,
        technologies:['ReactJS' , 'NodeJS', 'Cheerio']
    },
    {
        title:'Martrix - One Stop KPI Portal',
        description:'Martrix is a stunning portal that I exclusively designed using MERN.This Project serves as one stop portal for all KPIs, highlighting their performances and services.',
        image: martrix,
        technologies:[ 'React JS', 'tailwind CSS', 'MongoDB', 'Express JS', 'Node JS', 'mySQL']
    }
]

export default Projects