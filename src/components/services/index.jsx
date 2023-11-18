import Card from "../service-card";
import staticSecurityGuards from "../../assets/images/staticSecurityGuards.jpg";
import vvipSecurity from "../../assets/images/vvipSecurity.jpg";
import industrialSecurity from "../../assets/images/industrialSecurity.jpg";
import miningProjectSecurity from "../../assets/images/miningProjectSecurity.jpg";
import transitSecurity from "../../assets/images/transitSecurity.jpg";
import remoteSiteSecurity from "../../assets/images/remoteSiteSecurity.jpg";
import eventManagementProtection from "../../assets/images/eventManagementProtection.jpg";
import surveyInspection from "../../assets/images/surveyInspection.jpg";
import monitoring from "../../assets/images/monitoring.jpg";
import Surveillance from "../../assets/images/Surveillance.jpg";
import lowProfile from "../../assets/images/lowProfile.jpg";

export default function Services() {
  const cardData = [
    {
      imageURL: staticSecurityGuards,
      title: "Static Security Guards",
      description:
        "Our guards are extensively trained to safeguard premises, assets, and personnel through their formidable presence, effectively deterring and preventing any unlawful or inappropriate activities.",
    },
    {
      imageURL: vvipSecurity,
      title: "VVIP Security",
      description:
        "Our exceptionally trained security personnel offer discreet and professional protection services tailored to high-profile individuals.",
    },
    {
      imageURL: industrialSecurity,
      title: "Industrial Security",
      description:
        "We specialize in tailoring customized security solutions specifically designed for factories, warehouses, and various industrial sites.",
    },
    {
      imageURL: miningProjectSecurity,
      title: "Mining Project Security",
      description:
        "We provide specialized security services tailored for mining projects, encompassing comprehensive risk assessments, crisis management, and supply chain security solutions.",
    },
    {
      imageURL: transitSecurity,
      title: "Transit Security",
      description:
        "Our dedicated teams ensure the vigilant safety of our clients while traveling on the road, shielding them from potential threats.",
    },
    {
      imageURL: remoteSiteSecurity,
      title: "Remote Site Security",
      description:
        "Our team delivers security solutions designed for sites situated in remote or isolated areas.",
    },
    {
      imageURL: eventManagementProtection,
      title: "Event Management & Protection",
      description:
        "We offer comprehensive security solutions for a wide range of events, from large concerts to private gatherings.",
    },
    {
      imageURL: surveyInspection,
      title: "Survey Inspection Security",
      description:
        "We conduct risk and vulnerability assessments, as well as premises inspections, to identify and address any potential weaknesses that may be exploited.",
    },
    {
      imageURL: monitoring,
      title: "Monitoring & Theft Control Security",
      description:
        "We develop comprehensive and strategically aligned safety plans by coordinating resources, personnel, and information.",
    },
    {
      imageURL: Surveillance,
      title: "Surveillance Services Security",
      description:
        "We secure premises, property, and visitors using state-of-the-art tools, all under the supervision of highly trained professionals.",
    },
    {
      imageURL: lowProfile,
      title: "Low Profile High End Security",
      description:
        "We provide discreet and highly effective security services to clients who necessitate a low-profile, virtually undetectable yet robust security presence.",
    },
  ];

  return (
    <div className="my-20">
      <div className="mb-10  flex justify-center items-center flex-col text-center">
        <h2 className="font-bold text-2xl text-secondary">OUR SERVICES</h2>
        <h4 className="pt-4 font-bold text-4xl text-primary">
          PREMIUM SECURITY SERVICES
        </h4>
      </div>
      <div className="px-10 lg:px-20 flex justify-center">
        <div className="max-w-screen-lg grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row gap-6">
          {cardData.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
