import { React, useState, useEffect } from "react";
import logo from "../../public/assets/icons/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavFixed, setIsNavFixed] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      if (window.scrollY > fixedNav) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full flex items-center absolute top-0 left-0 z-10 ${
        isNavFixed ? "navbar-fixed" : ""
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg py-6 flex items-center"
            >
              <img src={logo} alt="logo" width={48} className="mr-1" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-primary">
                RAFFOOD
              </span>
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              type="button"
              className={`block absolute right-4 lg:hidden hamburger ${
                isOpen ? "open" : ""
              }`}
              onClick={toggleMenu}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            <nav
              className={`menu absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full origin-top transition duration-150 ease-in-out lg:scale-100 lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${
                isOpen ? "open" : ""
              }`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition duration-300 ease-in-out"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition duration-300 ease-in-out"
                  >
                    About
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#menu"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition duration-300 ease-in-out"
                  >
                    Menu
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#service"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition duration-300 ease-in-out"
                  >
                    Service
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition duration-300 ease-in-out"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
