
import Navbarr from "../Navbar/Navbar"
import { useState } from 'react';
import Footer2 from '../Footer/Footer2';
const ContactForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      jobRole: '',
      companyDomain: '',
      goals: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data:', formData);
      // Handle form submission, e.g., send data to a server
    };
  
    return (

      <div className="bg-[#0F172A]">
        <Navbarr/>
        <div className="mt-[170px]"></div>
        <div className="container mx-auto  bg-[#1F2937] p-8 ">
        <h1 className="text-2xl font-semibold text-center mb-4 text-white">Contact Us</h1>
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Let s talk about your project</h2>
        <p className="text-center mb-8 text-white">Drop us a line through the form below and we ll get back to you</p>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-[#0F172A] p-8 rounded shadow-md text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name*"
              value={formData.firstName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name*"
              value={formData.lastName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email address*"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="jobRole"
              placeholder="Job role"
              value={formData.jobRole}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="companyDomain"
              placeholder="Company domain*"
              value={formData.companyDomain}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <textarea
            name="goals"
            placeholder="Please tell us a bit about your goals, what are you hoping to achieve?"
            value={formData.goals}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            rows="4"
          />
          <button
            type="submit"
            className="w-full p-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition duration-200"
          >
            Send
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          We will store and process your personal data on terms defined here.
        </p>
      </div>
      <Footer2/>
      </div>
    );
  };
  
  export default ContactForm;