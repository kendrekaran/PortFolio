import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-900 min-h-screen flex flex-col items-center justify-center  py-16">
      {/* Contact Content */}
      <div className="max-w-3xl text-center mb-16">
        <h2 className="text-5xl text-white font-semibold">Contact Us</h2>
        <p className="text-white text-lg mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem numquam id reprehenderit, sunt laudantium enim possimus
          repellat debitis et quis!
        </p>
      </div>

      {/* Container */}
      <div className="flex flex-wrap justify-center items-center gap-16">
        {/* Contact Info */}
        <div className="flex flex-col space-y-10 w-full md:w-1/2">
          {/* Address Box */}
          <div className="flex items-center">
            <div className="w-16 h-16 bg-white flex justify-center items-center text-3xl rounded-full transition duration-500 hover:bg-cyan-500 hover:text-white">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="ml-5 text-white">
              <h3 className="text-xl font-semibold text-cyan-500">Address</h3>
              <p>402671 Sugar Camp Road,<br />Owatonna, Minnesota,<br />55025</p>
            </div>
          </div>
          {/* Phone Box */}
          <div className="flex items-center">
            <div className="w-16 h-16 bg-white flex justify-center items-center text-3xl rounded-full transition duration-500 hover:bg-cyan-500 hover:text-white">
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <div className="ml-5 text-white">
              <h3 className="text-xl font-semibold text-cyan-500">Phone</h3>
              <p>000-000-0000</p>
            </div>
          </div>
          {/* Email Box */}
          <div className="flex items-center">
            <div className="w-16 h-16 bg-white flex justify-center items-center text-3xl rounded-full transition duration-500 hover:bg-cyan-500 hover:text-white">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="ml-5 text-white">
              <h3 className="text-xl font-semibold text-cyan-500">Email</h3>
              <p>wrub7d78i0e@temporary-mail</p>
            </div>
          </div>

          {/* Social Icons */}
          <h2 className="text-white text-xl mt-10 border-l-4 border-pink-500 pl-4">
            Connect with us
          </h2>
          <ul className="flex gap-6 mt-4">
            <li>
              <a href="#" className="text-white text-3xl transition hover:text-cyan-500">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-3xl transition hover:text-cyan-500">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-3xl transition hover:text-cyan-500">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-3xl transition hover:text-cyan-500">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-lg">
          <form>
            <h2 className="text-3xl text-gray-700 font-semibold">Send Message</h2>
            {/* Full Name */}
            <div className="relative mt-6">
              <input
                type="text"
                className="w-full border-b-2 border-gray-400 outline-none focus:border-pink-500 py-2"
                required
              />
              <label className="absolute left-0 top-0 text-gray-600 transition-all duration-300 -translate-y-7 text-sm pointer-events-none">
                Full Name
              </label>
            </div>
            {/* Email */}
            <div className="relative mt-6">
              <input
                type="email"
                className="w-full border-b-2 border-gray-400 outline-none focus:border-pink-500 py-2"
                required
              />
              <label className="absolute left-0 top-0 text-gray-600 transition-all duration-300 -translate-y-7 text-sm pointer-events-none">
                Email
              </label>
            </div>
            {/* Message */}
            <div className="relative mt-6">
              <textarea
                className="w-full border-b-2 border-gray-400 outline-none focus:border-pink-500 py-2"
                required
              />
              <label className="absolute left-0 top-0 text-gray-600 transition-all duration-300 -translate-y-7 text-sm pointer-events-none">
                Type your Message...
              </label>
            </div>
            {/* Submit Button */}
            <div className="mt-6">
              <input
                type="submit"
                value="Send"
                className="bg-cyan-500 text-white py-2 px-6 cursor-pointer hover:bg-cyan-600 transition rounded-md"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
