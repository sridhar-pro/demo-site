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
         <div className="bg-neutral-50 shadow-md py-3 px-4 sm:px-10 flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/logo-1.png" // Replace with your logo path
                alt="Logo"
                width={60} // Adjust width for smaller screens
                height={25} // Adjust height for smaller screens
                className="object-contain"
              />
              <Image 
                src="/first.png" // Replace with your logo path
                alt="Logo"
                width={110} // Adjust width for smaller screens
                height={35} // Adjust height for smaller screens
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="flex items-center bg-black py-1 px-2 rounded-full mt-2">
            <a href="#contact-us" className="text-neutral- font-semibold text-sm hover:bg-clip-text hover:text-fill-transparent hover:bg-gradient-text">
              Contact Us
            </a>
          </div>
        </div>

        <Container className="mt-12 sm:mt-16 lg:mt-40 flex flex-col lg:flex-row items-center custom-container-height">
      <div className="flex flex-col lg:flex-row items-center text-center lg:text-left">
        <FadeRight>
          <div className="px-4 sm:px-6 lg:px-0">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 [text-wrap:balance]">
              <span className="tracking-wider">Germany</span> Opportunity Card!
            </h1>
            <div className="mt-4 sm:mt-5">
              <span className="block lg:hidden tracking-tight text-3xl font-normal text-neutral-100">Unlock Your Future in Germany</span>
              <span className="hidden lg:block tracking-tight text-5xl font-normal text-neutral-100">Unlock Your Future in Germany</span>
            </div>
            <p className="mt-4 sm:mt-6 tracking-tight text-base sm:text-sm font-semibold text-neutral-500 break-words">
              The Germany Opportunity Card is a newly introduced visa scheme by the German government,
              designed to attract skilled professionals from non-EU countries.
              <span className="font-bold text-neutral-400">
                This points-based system allows qualified individuals to live and work in Germany without a prior job offer. 
              </span>
              The Opportunity Card is part of Germany's strategy to address its skilled labor shortage and provide opportunities for global talent.
            </p>
          </div>
        </FadeRight>
        
        <FadeIn className="hidden lg:flex w-[33.75rem] flex-none lg:w-[33.75rem]">
          <Image
            src={imageLaptop}
            sizes="(min-width: 1024px) 41rem, 31rem"
            className="w-full max-w-[60rem] mt-4 ml-16"
            alt="Laptop Image" // Always include an alt text for accessibility
          />
        </FadeIn>
      </div>
    </Container>


          <Testimonials
      className="mt-12 sm:mt-20 md:mt-24 lg:mt-40 px-4 sm:px-6 lg:px-8"
      client={{ name: "Phobia", logo: logoPhobiaDark }}
    >
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-neutral-950">
        The team at 
        <span className="ml-1 sm:ml-2 mr-1 sm:mr-2 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
          [VJC Overseas]
        </span> 
        exceeded all expectations during our application process. 
        Their proactive approach made the entire experience smooth and stress-free, setting a new standard for client service in the industry.
      </p>
    </Testimonials>
          
        {/* <Requirements/> */}


        <Clients />

        
        <Testimonials
      className="mt-12 sm:mt-20 md:mt-24 lg:mt-40 px-4 sm:px-6 lg:px-8"
      client={{ name: "Phobia", logo: logoPhobiaDark }}
    >
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-neutral-950">
      Undergoing Styling and Content Part
        </p>
    </Testimonials>
        
        <Services />
        
        
        
        
        {/* <ContactSection /> */}
        
        {/* <Testimonials 
         className="mt-24 sm:mt-32 lg:mt-40"
         client={{ name: "Phobia", logo: logoPhobiaDark }}>
          Undergoing Styling and Content Part
        </Testimonials> */}
        <Testimonials
      className="mt-12 sm:mt-20 md:mt-24 lg:mt-40 px-4 sm:px-6 lg:px-8"
      client={{ name: "Phobia", logo: logoPhobiaDark }}
    >
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-neutral-950">
      Undergoing Styling and Content Part
        </p>
    </Testimonials>
        {/* <Space/> */}
        
        <Container className="mt-16 sm:mt-32 lg:mt-20 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-y-12 sm:gap-y-16 lg:grid-cols-2 lg:gap-x-8">
        <ContactDetails />
        <ContactForm />
      </div>
    </Container>
      
      </main>
    );
  }
