import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/armstac_logo.png"

const Topbar = () => {
  return (
   <>
     <div className="w-full  flex justify-center  bg-primary py-2 text-white mx-auto md:px-8 xl:px-4 font-raleway">
      <div className="max-w-screen-2xl w-full">
        <div className="w-full flex flex-col md:flex-row justify-center gap-2 md:justify-between items-center">
          <h1>Opening Hours: 8.00AM - 9.00PM</h1>
          <div className="flex items-center gap-2">
            <h2>Follow Us:</h2>
            <div className="flex gap-4">
              <FaFacebookF  className="text-white hover:text-secondary cursor-pointer"/>
              <FaTwitter  className="text-white hover:text-secondary cursor-pointer"/>
              <FaLinkedinIn  className="text-white hover:text-secondary cursor-pointer"/>
              <FaInstagram  className="text-white hover:text-secondary cursor-pointer"/>
              <FaYoutube  className="text-white hover:text-secondary cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full  flex justify-center bg-white py-4 text-bgLight mx-auto md:px-8 xl:px-4">
    <div className="max-w-screen-2xl w-full">
      <div className="max-w-full flex  justify-center md:justify-between">
        {/* <h1 className="text-4xl font-semibold text-secondary max-w-full hidden md:flex items-center italic"> */}
          <img src={logo} alt="" className="w-20 md:w-24 md:block hidden"/>
        {/* </h1> */}

        <div className="max-w-full text-primary flex gap-5 font-roboto">
          <div className="max-w-full flex flex-col justify-center items-center gap-1">
            <h2 className=" text-md text-primary uppercase">Our Office</h2>
            <h3 className="text-gray-500 text-md font-light">123, Street, NY, USA</h3>
          </div>
          <div className="w-[1px] h-full bg-gray-300"></div>
          <div className="max-w-full flex flex-col justify-center items-center gap-1">
            <h2 className=" text-md text-primary uppercase">Email Us</h2>
            <h3 className="text-gray-500 text-md font-light">info@example.com</h3>
          </div>
          <div className="w-[1px] h-full bg-gray-300"></div>
          <div className="max-w-full flex flex-col justify-center items-center gap-1">
            <h2 className=" text-md text-primary uppercase">Call Us</h2>
            <h3 className="text-gray-500 text-md font-light">+012 345 6789</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
   </>
  );
};

export default Topbar;
