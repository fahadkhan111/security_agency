import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/armstac_logo.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleToggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <div className="absolute z-20 hidden md:flex bg-transparent items-center justify-center w-full ">
        <div className="max-w-full   py-8 px-4 md:px-8 lg:px-0">
          <div className="flex gap-8 ">
            <p className="text-md cursor-pointer text-white hover:text-secondary">
              Home
            </p>
            <p className="text-md cursor-pointer text-white hover:text-secondary">
              About
            </p>
            <p className="text-md cursor-pointer text-white hover:text-secondary">
              Services
            </p>
            <p className="text-md cursor-pointer text-white hover:text-secondary">
              Packages
            </p>
            <p className="text-md cursor-pointer text-white hover:text-secondary">
              Contact
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-full block bg-primary  md:hidden py-1 px-4 md:px-8 lg:px-0">
        <div className="w-full flex items-center justify-between">
          <img src={logo} alt="" className="w-20 md:w-24" />

          <button
            className="border border-gray-600 px-3 py-1"
            onClick={handleToggleNavbar}
          >
            <RxHamburgerMenu className="text-3xl text-gray-500 " />
          </button>
        </div>
        <div
          className={`${showNavbar ? "flex" : "hidden"} flex-col gap-4 py-6   `}
        >
          <p className="text-md cursor-pointer text-white hover:text-secondary">
            Home
          </p>
          <p className="text-md cursor-pointer text-white hover:text-secondary">
            About
          </p>
          <p className="text-md cursor-pointer text-white hover:text-secondary">
            Services
          </p>
          <p className="text-md cursor-pointer text-white hover:text-secondary">
            Packages
          </p>
          <p className="text-md cursor-pointer text-white hover:text-secondary">
            Contact
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
