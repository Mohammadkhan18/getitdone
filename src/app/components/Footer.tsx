

import { FaPhoneAlt, FaHeadset, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Blue Section */}
      <div className="bg-[linear-gradient(90deg,_#0046c6_0%,_#29b4f2_100%)] flex flex-col md:flex-row justify-between items-center p-8 rounded-lg mx-4 -translate-y-10 relative z-10">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-blue-900 rounded-full p-4 mr-4">
            <FaHeadset size={40} className="text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">We’re Delivering the best customer Experience</h2>
        </div>
        <div>
          <button className="bg-white text-black font-bold px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition">
            +971 52 288 2376
          </button>
        </div>
      </div>

      {/* Bottom Dark Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <img src="/assets/images/logo.jpg" alt=" Logo" className="h-12 mb-4" />
          <p className="text-gray-400">
            BVMC has what you need for high-quality offerings in all your business and banking specialized solutions. Focusing on innovation and expertise, we are a reliable destination for all your corporate problems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Business Setup in UAE</li>
            <li>Company Formation</li>
            <li>Company Registration</li>
            <li>Mainland Company Formation in UAE</li>
            <li>Freezone Company Formation in UAE</li>
            <li>Offshore Company Formation in UAE</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Corporate Tax in UAE</li>
            <li>Pro Services in UAE</li>
            <li>Visa Services in UAE</li>
            <li>Compare Bank Account in UAE</li>
            <li>Business Setup Blogs</li>
            <li>How to Setup a business in Dubai</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="text-gray-400 space-y-4">
            <div>
              <h4 className="font-bold">UAE Office:</h4>
              <p className="flex items-start gap-2 mt-2">
                <FaMapMarkerAlt className="mt-1" />
                216, Bank Street Building Bank Street Road, Burjuman, Dubai, UAE
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaPhoneAlt />
                +971 52 288 2376
              </p>
            </div>
            {/* You can add India Office here similarly if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
