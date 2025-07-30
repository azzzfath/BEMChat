import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (id) => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
    setIsOpen(false);
  };

  return (
    <nav className="fixed md:fixed top-0 left-0 w-screen z-50">
      <div className="mt-6 md:mt-4 mx-auto px-4 mx-10 md:mx-20 md:px-12 py-4 flex justify-between items-center bg-white/10 backdrop-blur-2xl border border-white/20 text-white rounded-3xl">
        <div className="text-xl font-bold">
          <a href="#">BEM Chat!</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-10 font-medium text-sm md:text-lg">
          <li>
            <button onClick={() => handleSmoothScroll("about")} className="hover:text-secondary">
              About
            </button>
          </li>
          <li>
            <button onClick={() => handleSmoothScroll("features")} className="hover:text-secondary">
              Features
            </button>
          </li>
          <li>
            <button onClick={() => handleSmoothScroll("contact")} className="hover:text-secondary">
              Contact
            </button>
          </li>
        </ul>

        <div className="hidden md:block">
          <button
            onClick={() => window.location.href = "/messages"}
            className="bg-primary font-bold px-6 py-2 border text-md border-red-400 rounded-3xl"
          >
            Chat!
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-xl rounded-b-3xl px-6 py-4 text-white">
          <ul className="space-y-4 font-medium text-md">
            <li>
              <button onClick={() => handleSmoothScroll("about")} className="block hover:text-secondary">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleSmoothScroll("features")} className="block hover:text-secondary">
                Features
              </button>
            </li>
            <li>
              <button onClick={() => handleSmoothScroll("contact")} className="block hover:text-secondary">
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  window.location.href = "/messages";
                  setIsOpen(false);
                }}
                className="w-full mt-2 bg-primary font-bold px-6 py-2 border text-md border-red-400 rounded-3xl"
              >
                Chat!
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
