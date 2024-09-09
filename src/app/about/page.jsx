"use client"

import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";
import CountUp from 'react-countup';

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          We are a young and energetic team of enthusiastic professionals who believe in innovative strategies and out-of-the-box solution. 
          We believe in leading this digital marketing world with our endless desires and addiction for the work. 
          </p>
          <p>
            At WEBOIN, we’re more than just colleagues — we’re a family. This
            means we pay very little and expect people to work late. We want our
            employees to bring their whole selves to work. In return, we just
            ask that they keep themselves there until at least 6:30pm.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        {/* <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList> */}
        <div className="mt-20 flex flex-row border-2 border-solid rounded-lg overflow-hidden bg-gradient-to-r from-gray-500 via-gray-900 to-black opacity-70 font-bold">
        <div className='ml-24 mr-3 text-base relative p-5 rounded-lg transition-transform duration-300 ease-in-out'>
            <CountUp start={0} end={10} duration={5} />+
            <br/>Years of experience
            </div>
            
            <div className='ml-40 mr-3 text-base relative p-5 rounded-lg transition-transform duration-300 ease-in-out'> 
            <CountUp start={0} end={250} duration={5} />+
            <br/>Satisfied customers
            </div>

            <div className='ml-40 mr-3 text-base relative p-5 rounded-lg transition-transform duration-300 ease-in-out'>
            <CountUp start={0} end={650} duration={5} />+
            <br/> Finished Projects
            </div>
            </div>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
