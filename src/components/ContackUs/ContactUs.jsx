import React from 'react'
import contactUs from '../../assets/contactUs.svg'

function ContactUs() {
  return (
    <div className="w-[90%] max-w-6xl mx-auto bg-white flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 my-16 md:my-52 p-6 md:p-12 shadow-lg border rounded-lg">
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={contactUs}
      alt="Contact"
      className="w-[80%] md:w-full max-w-sm md:max-w-md object-cover"
    />
  </div>

  <div className="w-full md:w-1/2 flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left text-gray-800">
      Contact Me
    </h2>
    <form className="space-y-6">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
      />
      <textarea
        placeholder="Your Message"
        className="w-full p-4 border rounded-lg h-40 resize-none focus:outline-none focus:ring-4 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</div>




  )
}

export default ContactUs