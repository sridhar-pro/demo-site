import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/ingo.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-14 sm:mt-14 lg:mt-14"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-8 sm:mt-12 md:mt-16 mb-10 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12 mb-8 lg:mb-0">
            <FadeIn className="w-full max-w-[33.75rem] lg:w-[40rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="w-full"
              />
            </FadeIn>
          </div>
          <List className="w-full lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Age Requirement">
              Applicants should ideally be under 35 years of age.
              Educational Qualifications: Hold a recognized academic or vocational qualification.
            </ListItem>
            <ListItem title="Professional Experience">
              At least three years of relevant work experience in your field.
            </ListItem>
            <ListItem title="Language Proficiency">
              Basic knowledge of German (A1 level) or strong English language skills.
            </ListItem>
            <ListItem title="Connection to Germany">
              Previous stays, family ties, or studies in Germany can enhance your eligibility.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
