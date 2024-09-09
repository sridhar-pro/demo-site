import PageIntro from "@/components/PageIntro";
import React from "react";
import logoLight from '../../images/preview.png';
import logo from '../../images/preview-2.png';
import log from '../../images/preview-3.svg';
import Image from "next/image";

const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients.
        </p>
      </PageIntro>
     <div className="flex bg-gradient-to-r from-gray-800 via-gray-700 to-black p-14 rounded-md ml-32 mr-32 mt-10">
      <div className="flex flex-col mt-10 mb-10">
        <div className="text-2.5xl font-bold flex justify-center items-center h-full text-white">SERVICES</div>
        <div className="text-lg font-bold text-center leading-14 capitalize text-white mt-4">Digital Marketing Services - WEBOIN</div>
        <div  className="text-xm leading-6 text-white text-center mt-3 ml-32 mr-32" >Digital Marketing is any action carried out by the use of numerous digital tactics and channels to connect with customers which in turn helps towards the promotion of your goods and services.</div>
        <div className="flex mt-10">
  <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 opacity-90 p-14 rounded-md  transform transition-transform hover:scale-105">
  
  <span className="font-bold ml-24 leading-14 capitalize text-white">
  <Image src={logoLight} alt="Logo" className="w-6 h-6 text-white mb-2" />
  SEO experts
  </span><br/>
  Drive greater traffic to your website with our proven result oriented SEO strategies even for highly competitive keywords India.
  </div>
  <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 opacity-90 p-14 rounded-md transform transition-transform hover:scale-105">
  <span className="font-bold ml-20 leading-14 capitalize text-white">
  <Image src={logo} alt="Logo" className="w-6 h-6 text-white mb-2" />
  Great Rankings</span><br/>
  Make your business to be on top of search engine by outranking your competitors and get first-page ranking.
  </div>
  <div className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 opacity-90 p-14 rounded-md transform transition-transform hover:scale-105">
  <span className="font-bold ml-24 leading-14 capitalize text-white">
  <Image src={log} alt="Logo" className="w-6 h-6 text-white mb-2" />
  Brand Visibility</span><br/>
  Your brand identity needs to reflect the vision of your organization and connect with potential customers globally Chennai Company.
  </div>
</div>
      </div>
      </div> 
    
    </>
  );
};

export default WorkPage;
