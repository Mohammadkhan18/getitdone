


const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-[linear-gradient(90deg,_#0046c6_0%,_#29b4f2_100%)]" >
      <div className="absolute inset-0 bg-blue-900 opacity-70"></div> {/* Overlay */}
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Setup in UAE</h1>
          <p className="text-sm leading-relaxed">
          ALL business & banking Solutions in one place. we Best Value Management Consultancies are experts at helping both individual entrepreneurs and corporate entities with all their business setup in UAE. BVMC specializes in providing customized business establishment services in the UAE. Our team, comprised of Experienced and dedicated professionals, is committed  to guide you through every step in setting up your company in the UAE. We provide excellent business setup services tailored to your specific requirements, ensuring the cost of business setup is transparent and efficient. With our expertise and personalized approach We understand that setting up a business is just the beginning. Therefore, we extend our services beyond the initial establishment phase. BVMC assists in vital post-setup operations such as VAT and Cooperate Tax registration, Bank Account Opening, Pos Machine, Office Ste up, Ejari Registration, Visa, Medical, Emirates ID, Digital assistance, Business Cards and all other Printing Solutions. we ensure that your journey to success is smooth and efficient.
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-md mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6 text-white">Talk To Our Expert</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your name" className="w-full border border-gray-300 p-3 rounded-md text-white " />
            <input type="text" placeholder="Phone Number" className="w-full border border-gray-300 p-3 rounded-md text-white" />
            <input type="email" placeholder="Email address" className="w-full border border-gray-300 p-3 rounded-md text-white" />
            <input type="text" placeholder="Nationality" className="w-full border border-gray-300 p-3 rounded-md text-white" />
            <textarea placeholder="What type of business would you like to set up in UAE?" className="w-full border border-gray-300 p-3 rounded-md text-white" rows={3}></textarea>
            <button type="submit" className="w-full bg-[linear-gradient(90deg,_#0046c6_0%,_#29b4f2_100%)] hover:bg-[linear-gradient(90deg,_#29b4f2_0%,_#0046c6_100%)] text-white p-3 rounded-md font-semibold">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
