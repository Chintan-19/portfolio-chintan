import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import Footer from './Footer';

const Home = () => {

	const ref = useRef(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current < name.length) {
				ref.current++;
				setText(() => text + name[ref.current - 1]);
			}
		}, 500);
		return () => clearInterval(interval);
	}, [text]);

	return (
		<div className='area relative z-0 bg-black w-screen h-screen overflow-hidden'>
			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			
			<div className='hero relative h-screen flex flex-col justify-center items-center text-white px-4' id='hero'>
				{/* Main content container */}
				<div className='max-w-6xl mx-auto text-center space-y-8'>
					{/* Greeting with animated underline */}
					<div className='relative'>
						<h2 className='text-2xl md:text-3xl font-light text-gray-300 mb-4 tracking-wide'>
							Welcome to my digital space
						</h2>
						<div className='w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto rounded-full'></div>
					</div>
					
					{/* Main name section */}
					<div className='relative'>
						<h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>Hi, I'm&nbsp;<span className='text-yellow-200 font-extrabold'>{text}</span></h1>
						
						{/* Decorative elements */}
						<div className='absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-yellow-400 opacity-60'></div>
						<div className='absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-400 opacity-60'></div>
					</div>
					
					{/* Description with improved styling */}
					<div className='relative max-w-4xl mx-auto'>
						<p className='text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light'>
							I am a{' '}
							<span className='text-yellow-400 font-semibold'>results-driven software developer</span>
							{' '}with a strong command of{' '}
							<span className='text-yellow-400 font-semibold'>full stack web development</span>
							, passionate about leveraging{' '}
							<span className='text-yellow-400 font-semibold'>GenAI solutions</span>
							{' '}and pioneering emerging software technologies.
						</p>
						
						<p className='mt-4 text-lg md:text-xl text-gray-400 leading-relaxed font-light'>
							As a keen advocate for bridging{' '}
							<span className='text-yellow-400 font-semibold'>business logic</span>
							{' '}with{' '}
							<span className='text-yellow-400 font-semibold'>technical innovation</span>
							, I’m always up for a technical chat over coffee,{' '}
							<span className='text-yellow-400 font-semibold'>looking for opportunities to connect business objectives</span>
							{' '}with innovative technical solutions.
						</p>
					</div>
				</div>
			</div>
			
			{/* Footer component would go here */}
			<div className='absolute bottom-0 w-full'>
				<Footer/>
			</div>
		</div>
	);
}

export default Home;