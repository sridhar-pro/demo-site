import React from "react";
import GridPattern from "./GridPattern";
import clsx from "clsx";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Image from "next/image";

// const Testimonials = ({ children, client, className }) => {
//   return (
//     <>
     
//       <Container>
//         <FadeIn>
//           <div className="text-black">
//           Why Apply for the Germany Opportunity Card?
//           </div>
//         </FadeIn>
//       </Container>
//       </>
//   );
// };

// export default Testimonials;
import React from 'react'

const sample = () => {
  return (
    <>
    <GridPattern
    className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
    yOffset={-256}
  />
    <div>sample</div>
    </>
  )
}

export default sample
