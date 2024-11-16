import { useEffect } from 'react';
import { gsap } from 'gsap';
import Particles from '@tsparticles/react';
import Typewriter from 'typewriter-effect';
import { Button } from "@material-tailwind/react";

const Home = () => {
  useEffect(() => {
    // GSAP animation for intro text
    gsap.from('.intro-text', { opacity: 0, y: 20, stagger: 0.2, duration: 1 });
  }, []);

  return (
    <section id="home" className="h-screen relative flex flex-col items-center justify-center p-6 md:p-20 xl:items-start ">
      {/* Particles background */}
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: { value: 100 },
            size: { value: 3 },
            color: { value: '#39ff14' },
            links: {
              enable: true,
              color: '#00f5ff',
              distance: 150,
              opacity: 0.5,
              width: 1,
            },
            move: { enable: true, speed: 2 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 lg:gap-24 mt-10 md:mt-0 xl:gap-72">
        {/* Text Section */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="intro-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#d7d5db]">
            Bringing Your <br /> <span className='text-purple-400'>Designs</span> to Life
          </h1>
          <p className="intro-text pt-6 text-gray-400 text-sm ">
            Expert frontend developers specializing in creating high-quality, responsive <br />
            websites from your designs. Fast, pixel-perfect, and fully functional.
          </p>

          {/* Typewriter Effect */}
          <div className="intro-text text-sm sm:text-lg mt-5 text-gray-200">
            <Typewriter
              options={{
                strings: [
                  'Figma, XD, PSD to <span class="text-purple-300">HTML, CSS, JS</span>',
                  'Figma, XD, PSD to <span class="text-purple-300">React and Tailwind</span>',
                ],
                autoStart: true,
                loop: true,
                delay: 1,
              }}
            />
          </div>

          {/* Call-to-Action Button */}
          <Button className="text-black bg-white rounded-full mt-8 hover:bg-purple-400 hover:text-white">
            Hire us
          </Button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://i.pinimg.com/736x/7b/20/d5/7b20d5c6cadab61670a2d915263a6b00.jpg"
            className="h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-2xl"
            alt="Design Example"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
