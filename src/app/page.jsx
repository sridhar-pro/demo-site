import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import FadeRight from "@/components/FadeRight"
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import StylizedImage from "@/components/StylizedImage";
import imageLaptop from "@/images/flag-2.png";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";
import Requirements from "@/components/Requirements";
import Space from "@/components/Space";


export default function Home() {
  return (
      <main className="text-white">
         <div className="bg-neutral-50 shadow-md py-1 px-20 flex items-center justify-between w-full">
      {/* Left side: Text and Logo */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          
          {/* Logo */}
          <Image 
            src="/logo-1.png" // Replace with your logo path
            alt="Logo"
            width={80} // Adjust width for a smaller logo
            height={30} // Adjust height for a smaller logo
            className="object-contain"
          />
          <Image 
            src="/first.png" // Replace with your logo path
            alt="Logo"
            width={130} // Adjust width for a smaller logo
            height={40} // Adjust height for a smaller logo
            className="object-contain"
          />
         
        </div>
      </div>
      
      {/* Right side: Contact Us Link */}
      <div className="flex items-center bg-black py-2 px-4 rounded-3xl mt-2">
        <a href="#contact-us" className="text-neutral- font-semibold hover:bg-clip-text hover:text-fill-transparent hover:bg-gradient-text">
          Contact Us
        </a>
      </div>
    </div>
        <Container className="mt-4 sm:mt-2 flex flex-col lg:flex-row items-center mb-2">
          <div className="flex flex-col lg:flex-row items-center">
            <FadeRight>
              <div className="">
                <h1 className="font-display items-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 [text-wrap:balance] sm:text-7xl">
                  <span className="tracking-wider">Germany</span> Opportunity Card!
                </h1>
            <div className="mt-3">
              <span className="lg:inline hidden tracking-tight text-5xl font-normal text-neutral-100">Unlock Your Future in Germany</span>
            </div>
              <p className="mt-6 tracking-tight text-sm font-semibold text-neutral-500">
              The Germany Opportunity Card is a newly introduced visa scheme by the German government, 
              designed to attract the skilled professionals from non-EU countries.
              <span className="font-bold text-neutral-400">
              This points-based system will allows qualified individuals to live and work in Germany without prior job offer. </span>
              The Opportunity Card is part of Germany strategy to address its skilled labor shortage and provide opportunities for global talent.
              </p>
            </div>
        </FadeRight>
       
        <FadeIn className="w-[33.75rem] flex-none lg:w-[33.75rem]">
          
          <Image
            src={imageLaptop}
            sizes="(min-width: 1024px) 41rem, 31rem"
            className="justify-center lg:justify-end w-full max-w-[60rem] mt-4 ml-16"
          />
        </FadeIn>
        
      </div>
    
  </Container>
  <Testimonials
          className="mt-24 sm:mt-32 lg:mt-40"
          client={{ name: "Phobia", logo: logoPhobiaDark }}
        >
          The team at <span className="ml-2 mr-2 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 "> [VJC Overeas] </span>  exceeded all expectations during our application process. 
          Their proactive approach made the entire experience smooth and stress-free, setting a new standard for client service in the industry.
        </Testimonials>
        {/* <Requirements/> */}


        <Clients />

        
        <Testimonials 
         className="mt-24 sm:mt-32 lg:mt-40"
         client={{ name: "Phobia", logo: logoPhobiaDark }}>
          Undergoing Styling and Content Part
        </Testimonials>
        
        <Services />
        
        
        
        
        {/* <ContactSection /> */}
        
        <Testimonials 
         className="mt-24 sm:mt-32 lg:mt-40"
         client={{ name: "Phobia", logo: logoPhobiaDark }}>
          Undergoing Styling and Content Part
        </Testimonials>
        {/* <Space/> */}
        
        <Container className="mt-16 sm:mt-32 lg:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <ContactDetails />
            <ContactForm />
          </div>
        </Container>
      
      </main>
    );
  }
