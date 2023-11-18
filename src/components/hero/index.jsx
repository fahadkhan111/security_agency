import carouselImg1 from "../../assets/images/carousel-1.jpg";
import carouselImg2 from "../../assets/images/hero-bg.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import {
  BiSolidChevronLeft,
  BiSolidChevronRight,
  // BiSupport,
} from "react-icons/bi";
// import { GiPoliceOfficerHead } from "react-icons/gi";
// import { FaHelmetSafety } from "react-icons/fa6";
// import {  } from "react-icons/bi";

import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  const sliderData = [
    {
      id: 1,
      imgUrl: carouselImg1,
      text: "HIGHLY TRAINED GUARDS",
    },
    {
      id: 2,
      imgUrl: carouselImg2,
      text: "BEST SECURITY SERVICE",
    },
  ];

  return (
    <div className=" max-w-full  bg-transparent  px-0 ">
      <div className="relative w-full h-full">
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          navigation={{
            clickable: true,
            prevEl: ".custom-prev-button",
            nextEl: ".custom-next-button",
          }}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          speed={1000}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {sliderData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="flex justify-center items-center flex-col ">
                  <div className="w-full max-h-screen relative">
                    <img
                      className="w-full h-full object-cover bg-blend-darken z-30 opacity-70"
                      src={item.imgUrl}
                      alt=""
                    />

                    <div className="absolute top-0 z-50 flex items-center justify-center w-full h-full">
                      <div className="flex flex-col items-center gap-2 lg:gap-3 text-center">
                        <h2 className="text-2xl lg:text-3xl uppercase text-secondary font-medium">
                          Your Safety, Our Efforts
                        </h2>
                        <h2 className="text-4xl lg:text-6xl uppercase text-white font-medium">
                          {item.text}
                        </h2>
                        <button className="bg-secondary px-9 py-3 text-white text-xl hover:bg-[#dc3535f0] duration-200">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="max-w-full flex justify-between absolute top-1/2 -translate-y-1/2 left-4 md:left-10 lg:left-20 custom-prev-button bg-secondary opacity-40 hover:opacity-100 transition-all duration-300 rounded-full z-50">
          <button className="custom-button-style text-white">
            <BiSolidChevronLeft className="text-4xl" />
          </button>
        </div>
        <div className="max-w-full flex justify-between absolute top-1/2 -translate-y-1/2 right-4 md:right-10 lg:right-20 custom-next-button bg-secondary opacity-40 hover:opacity-100 transition-all duration-300 rounded-full z-50">
          <button className="custom-button-style text-white">
            <BiSolidChevronRight className="text-4xl" />
          </button>
        </div>

        <div className="w-full h-full bg-black absolute top-0 left-0 "></div>
      </div>

      {/* <div className="w-full h-full flex flex-col lg:flex-row px-8 lg:px-0 py-16 lg:py-0">
        <div className="w-full flex items-center justify-center p-6 lg:p-10 xl:p-16   lg:border-r">
          <div className="flex gap-4 lg:gap-8 items-center">
            <div>
              <GiPoliceOfficerHead className="text-5xl lg:text-6xl   text-secondary" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-xl  uppercase text-primary ">
                Professional Staff
              </h1>
              <p className="text-lightGray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                suscipit orci velit id libero
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center p-6 lg:p-10 xl:p-16   lg:border-r">
          <div className="flex gap-4 lg:gap-8 items-center">
            <div>
              <FaHelmetSafety className="text-5xl lg:text-6xl  text-secondary" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-xl  uppercase text-primary ">
                Professional Staff
              </h1>
              <p className="text-lightGray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                suscipit orci velit id libero
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center p-6 lg:p-10 xl:p-16 ">
          <div className="flex gap-4 lg:gap-8 items-center">
            <div>
              <BiSupport className="text-5xl lg:text-6xl   text-secondary" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-xl  uppercase text-primary ">
                Professional Staff
              </h1>
              <p className="text-lightGray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                suscipit orci velit id libero
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
