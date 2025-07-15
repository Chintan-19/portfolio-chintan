import React from 'react';
import '../App.css';
// import { services } from '../constants';
// import ButtonLink from './ButtonLink';
import Footer from './Footer';

// const ServiceCard = ({ service }) => (
//   <div className='sm:w-[250px] w-full'>
//     <div
//       className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
//       <div
//         className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//         style={{ background: '#151030' }}>
//         <img
//           src={service.icon}
//           alt='some_icon'
//           className='w-16 h-16 object-contain'
//         />
//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {service.title}
//         </h3>
//       </div>
//     </div>
//   </div>
// );

const About = () => {
  return (
    <div 
      className="area relative z-0 w-screen h-screen"
      style={{
        backgroundImage: "url('/assets/bg_intro.jpg')", // Replace with your image filename
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed' // Optional: creates parallax effect
      }}
    >
      {/* Optional overlay for better text readability */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay with 60% opacity
          zIndex: 1
        }}
      />

      <div 
        className='bg-transparent h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden relative z-10' 
        id='about'
      >
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Chintan Shah, a 2024 graduate🎓 with a passion for crafting robust full-stack systems and captivating web applications. As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/chintan-shah-33600820a/' target='_blank' rel="noreferrer">Software developer</a> I specialize in MERN stack🚀.
              <br />
              ✍️ Beyond coding, I am deeply interested in technical analysis within equity and financial markets. As the founder of Clever Chartist, a thriving WhatsApp community of over 300 members, I actively empower traders and investors by providing comprehensive financial toolkits and actionable insights.
              I love sharing my analysis and insights on stocks, financial markets and GenAI where I delve into the intricacies of development and technology trends.
              On a different note, I'm also into sports. It's not just a hobby; I see it as a way to live life🌟.</p>

            {/* <ButtonLink
             url='/assets/Chintan_Shah_Resume.pdf'
             text='View Resume →'
             padding='p-3'
           /> */}

          </div>
          {/* <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;