import React from "react";
import FadeIn from "./FadeIn";
import Offices from "./Offices";
import Border from "./Border";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

const ContactDetails = () => {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-300">
        Our office
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Prefer doing things in person? We don’t but we have to list our
        addresses here for legal reasons.
      </p>
      <Offices className="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2" />
      <Border className="mt-6 pt-6">
        <h2 className="font-display text-base font-semibold text-neutral-300">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ["Email", "admin@gmail.com"],
            ["Press", "admin@gmail.com"],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-300">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-300"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>
      <Border className="mt-2 pt-6">
        <h2 className="font-display text-base font-semibold text-neutral-300">
          Follow us
        </h2>
        <SocialMedia className="mt-4 mb-6" />
      </Border>
    </FadeIn>
  );
};

export default ContactDetails;
