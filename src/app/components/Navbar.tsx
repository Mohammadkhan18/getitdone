const Navbar = () => {
    return (
        
      <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-12" src="/assets/images/logo.jpg" alt="Logo" />
            </div>
  
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#" className="text-white hover:text-blue-600 font-medium">Company Formation</a>
  
              {/* Banking Services */}
              <div className="relative group">
                <button className="flex items-center text-white hover:text-blue-600 font-medium">
                  Banking Services
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-48 z-20">
                  <ul className="py-2">
                    <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-100">Link 1</a></li>
                    <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-100">Link 2</a></li>
                    <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-100">Link 3</a></li>
                  </ul>
                </div>
              </div>
  
              {/* Other Services */}
              <div className="relative group">
                <button className="flex items-center text-white hover:text-blue-600 font-medium">
                  Other Services
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-48 z-20">
                  <ul className="py-2">
                    <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-100">Link 1</a></li>
                    <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-100">Link 2</a></li>
                    <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-100">Link 3</a></li>
                  </ul>
                </div>
              </div>
  
              {/* About Us */}
              <div className="relative group">
                <button className="flex items-center text-white hover:text-blue-600 font-medium">
                  About Us
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-48 z-20">
                  <ul className="py-2">
                    <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-100">Link 1</a></li>
                    <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-100">Link 2</a></li>
                    <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-100">Link 3</a></li>
                  </ul>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  