import React from "react";
import cert1 from "../assets/cloud_image.jpg"; // replace with your actual cert thumbnails
import cert2 from "../assets/Micro_image.jpg";
import cert3 from "../assets/ISC.jpg";
import cert4 from "../assets/google_image.jpg";
import cert5 from "../assets/meta.jpg";
import cert6 from "../assets/ibm.jpg";
import cert7 from "../assets/uol.jpg";
import cert8 from "../assets/zr.png";
import Footer from "./Footer";

const CertificateCard = ({ image, title, description, link }) => {
  return (
    <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full rounded-t-lg h-auto object-cover hover:opacity-80 transition duration-300"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-4 sm:p-6">
        <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500 mb-3">
          {title}
        </h5>
        <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="m-4 flex justify-end">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 border border-gray-200 rounded-lg shadow px-3 py-2 hover:text-green-400 duration-300"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col pt-24">
      <div className="flex flex-wrap gap-7 justify-center items-center flex-grow">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            image={cert.image}
            title={cert.title}
            description={cert.description}
            link={cert.link}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export const certificates = [
  {
    title: "Google Cloud Cybersecurity Professional Certificate",
    description: "Mastered cloud security fundamentals, threat detection, and defense strategies using Google Cloud tools.",
    image: cert1,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/Y4BLAZ6O2SSL",
  },
  {
    title: "Microsoft CyberSecurity Analyst Professional Certificate",
    description: "Trained in penetration testing, threat analysis, and securing cloud infrastructures using Microsoft Azure tools and services.",
    image: cert2,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/O95SP9KS853M?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
  },
  {
    title: "Certified in Cybersecurity (CC) by ISC2",
    description: "Validated essential cybersecurity knowledge across access control, network security, and incident response.",
    image: cert3,
    link: "https://www.coursera.org/account/accomplishments/specialization/TADHAVBPUHQX",
  },
  {
    title: "Google Cybersecurity Professional Certificate ",
    description: "Developed hands-on expertise in securing networks, managing firewalls, and monitoring intrusion activities.",
    image: cert4,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/Q3LSATCCTA4C?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
  },
  {
    title: "Python Programming by Meta",
    description: "Gained proficiency in Python programming for automation, data processing, and backend development.",
    image: cert5,
    link: "https://www.coursera.org/account/accomplishments/verify/SHLD65NNP4R1",
  },
  {
    title: "IBM Ethical Hacking Professional Certificate",
    description: "Learned advanced penetration testing, vulnerability assessment, and secure web app deployment.",
    image: cert6,
    link: "https://www.coursera.org/account/accomplishments/specialization/9QG5IPBF0N7B",
  },
  {
    title: "Cybersecurity Specialization by University of London",
    description: "Explored AI-driven security methods and machine learning applications for proactive threat detection.",
    image: cert7,
    link: "https://www.coursera.org/account/accomplishments/specialization/V15TMJM2RGOP",
  },
  {
    title: "zSecurity Red Team Ethical Hacking Certifications",
    description: "Specialized in offensive security techniques, network exploitation, and packet-level attack simulations.",
    image: cert8,
    link: "https://zsecurity.org/",
  },
];

export default Certifications;
