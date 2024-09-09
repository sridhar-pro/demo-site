import React from 'react'; // Import React
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

// Updated clients array with text instead of logos
const clients = [
  "Phobia",
  "Family Fund",
  "Unseal",
  "Mail Smirk",
  // "Home Work",
  // "Green Life",
  // "Bright Path",
  // "North Adventures",
];

const Clients = () => {
  return (
    <div className="mt-4 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-24">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We have worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-600" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 ml-80 flex items-center gap-x-4 lg:gap-x-8"
          >
            {clients.map((client, index) => (
              <React.Fragment key={client}>
                <li className="flex items-center justify-center">
                  <FadeIn>
                    <span className="text-white text-lg font-semibold">
                      {client}
                    </span>
                  </FadeIn>
                </li>
                {/* Add arrow between items, but not after the last item */}
                {index < clients.length - 1 && (
                  <li className="flex items-center justify-center text-white text-2xl">
                    <span>&rarr;</span> {/* Unicode right arrow symbol */}
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
