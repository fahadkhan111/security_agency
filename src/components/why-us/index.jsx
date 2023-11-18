import { HiMiniArrowLongRight } from "react-icons/hi2";
const WhyUs = () => {
  const whyusData = [
    {
      id: 1,
      description: "Membership of Lahore Chamber of Commerce and Industry",
    },
    {
      id: 2,
      description:
        "Membership of All Pakistan Security Agencies Associations (APSAA)",
    },
    {
      id: 3,
      description: "Licensed to operate across Pakistan ",
    },
    {
      id: 4,
      description:
        "Tailored security solutions for the full range of risk profiles",
    },
    {
      id: 5,
      description:
        "Security cleared field staff comprising of hand picked and verified colour service SSG commandos ",
    },
    {
      id: 6,
      description:
        "Staff equipped with top-of-the-line gear to ensure the highest level of security. Our arsenal includes M4 rifles, pistols, Nvds, TI sights and bulletproof vests etc.",
    },
    {
      id: 7,
      description:
        "Our own state of the art training facility to build a team equipped with the latest knowledge and skills to take on day to challenges.",
    },
  ];

  return (
    <div className="w-full  flex justify-center  bg-bgLight text-white mx-auto px-8 xl:px-4 font-raleway py-20">
      <div className="max-w-screen-2xl w-full">
        <div className="flex justify-center flex-col gap-8  items-center text-secondary">
          <h1 className="text-3xl font-bold">Why Choose Us?</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyusData.map((data) => {
              return (
                <div key={data.id} className="border-2 border-gray-300 p-4 rounded-lg flex items-start  gap-3">
                  <div>
                  <HiMiniArrowLongRight className="text-3xl"/>
                  </div>
                  <p className="text-primary text-lg font-medium">
                    {data.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
