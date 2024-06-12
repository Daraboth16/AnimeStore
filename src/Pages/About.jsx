// src/About.jsx
import React from 'react';
import Navbarr from "../Navbar/Navbar"
import Footer2 from '../Footer/Footer2';
const About = () => {
  return (
    <div className='bg-[#0F172A]'>
      <Navbarr/>
      <div className="font-sans p-8 space-y-16 text-white">
      {/* About Us Section */}
      <div>
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Studio Marani, communication agency based in Milan, has been created in 2011 from Maurizio Marani after his long term experience with the uberfamous McCann Erickson. Many of his clients, like L’Espresso Group and Radio Deejay, will follow him in this new adventure and many others such as Radio Capital.
        </p>
        <p className="text-lg">
          After a fortunate encounter with the copywriter and content manager Anna Scardovelli, Studio Marani gains another fundamental member of his creative team. Anna, at that time, was already collaborating with big international brands like Barilla, Volkswagen, Campari, Vodafone, Philips, Kraft, Intesa San Paolo and Fila, she is a TV / ADV / Theatre author and founder of the firm “ScrittoMisto” in 2000. Valentina De Franco, Project Manager, completes Studio Marani creative team.
        </p>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold mb-4">The Team</h2>
        <p className="text-lg mb-8">
          All art is quite useless. one can never consent to creep when one feels an impulse to soar. words do not express thoughts very well. they always become a little different immediately after they are expressed, a little distorted, a little foolish.
        </p>
        <div className="flex space-x-8">
          <div className="text-center">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://i.pinimg.com/736x/cc/81/79/cc817988c76d3e0d698cc96a26fff812.jpg" alt="Team Member" />
            <p className="mt-4">Member Name</p>
          </div>
          <div className="text-center">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://miro.medium.com/v2/resize:fit:736/1*GHQ2nQfaZyF81STYtlmAyA.jpeg" alt="Team Member" />
            <p className="mt-4">Member Name</p>
          </div>
          <div className="text-center">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://preview.redd.it/satoru-gojo-reference-fanart-v0-e3zaq33rfn791.jpg?width=1080&crop=smart&auto=webp&s=3bdd2fbf44ed69231cdb671f2d43a8fa305a5a4a" alt="Team Member" />
            <p className="mt-4">Member Name</p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="text-center">
        <blockquote className="text-2xl italic mb-4">
          Our work does make sense only if it is a faithful witness of his time.
        </blockquote>
        <footer className="text-lg">— Jean-Philippe Nuel, Director</footer>
      </div>

      {/* Stats Section */}
      <div className="flex space-x-8 justify-around">
        <div className="text-center">
          <p className="text-4xl font-bold">600</p>
          <span className="block text-lg mt-2">million sq ft of sustainable work</span>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold">700</p>
          <span className="block text-lg mt-2">billion gallons of water saved annually</span>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold">1.2</p>
          <span className="block text-lg mt-2">million sq ft of LEED certified projects</span>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold">110</p>
          <span className="block text-lg mt-2">USGBC certified projects</span>
        </div>
      </div>
    </div>
    <Footer2/>
    </div>
  );
};

export default About;
