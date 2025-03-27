import React from "react";

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-600 to-green-800 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Farmer Contact"
          className="w-1/2 md:w-1/3 rounded-lg shadow-lg"
        />
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h2>
          <p className="mb-4">
            Have questions or need assistance? Reach out to us!
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
