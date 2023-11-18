// import { LiaAwardSolid } from "react-icons/lia";
// import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import aboutImg from "../../assets/images/about-bg.jpeg";
const About = () => {
  return (
    <div className="w-full  flex justify-center  bg-bgLight text-white mx-auto px-8 xl:px-4 font-raleway pt-10 lg:py-20">
      <div className="max-w-screen-2xl w-full flex flex-col lg:flex-row ">
        <div className="w-full lg:w-[45%] rounded-xl">
          <img src={aboutImg} alt="" className="w-full h-full rounded-xl" />
        </div>{" "}
        <div className="px-4 lg:px-12 w-full lg:w-[55%] h-full flex justify-center py-10 ">
          <div className="w-full h-full flex flex-col gap-4">
            <h2 className="text-secondary text-3xl uppercase font-semibold text-center pb-2 border-b-2 border-secondary">
              Who We Are
            </h2>
            {/* <h1 className="text-4xl font-medium text-primary">
              15 YEARS EXPERIENCE
            </h1> */}
            <p className="text-lightGray">
              ARMSTAC Security (Pvt.) Ltd. was founded in 2007. We are providing
              full and comprehensive security services with unwavering
              commitment to excellence and focus on safeguarding lives and
              assets of clients domestic and international. Our management
              having been in the industry for the last 20 years has made the
              company grow rapidly with sheer hard work, commitment, and
              integrity.
            </p>
            <p className="text-lightGray">
              Our management also has the privilege of providing manpower,
              security, logistics & precious cargo coverage to a gold mining
              project in Congo (DRC) from 2003 till 2007.
            </p>
            <div className="flex flex-col md:flex-row gap-8 w-full mt-10">
              <div className="w-full flex flex-col gap-2">
                {/* <HiOutlineClipboardDocumentCheck className="text-7xl text-secondary font-light" /> */}
                <h3 className="uppercase text-2xl font-bold text-secondary">
                  Our Aim
                </h3>
                <p className="text-lightGray text-justify">
                  Primary objective of ARMSTAC Security (Pvt.) Ltd. is to be a
                  stable and evolving company in the area of security services
                  with growing satisfaction rate of our clients with our
                  services. We always want to offer broader and most reliable
                  services and to improve the value of the name ARMSTAC Security
                  (Pvt.) Ltd. as well as the names of all our clients.
                </p>
              </div>
              <div className="w-full flex flex-col gap-2">
                {/* <LiaAwardSolid className="text-7xl text-secondary font-light" /> */}

                <h3 className="uppercase text-2xl font-bold text-secondary">
                  Our Mission
                </h3>
                <p className="text-lightGray  text-justify">
                  We strive to set new standards in the security services sector
                  by employing highly trained professionals and utilizing
                  cutting-edge technologies to ensure the safety and security of
                  individuals, businesses assets and events our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
