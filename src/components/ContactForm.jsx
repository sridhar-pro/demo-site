import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  return (
    <FadeIn>
      <form>
        <h2 className="font-display text-lg font-semibold text-neutral-300">
          Work inquiries
        </h2>
        <div className="isolate mt-4 -space-y-px rounded-2xl bg-white">
          <TextInput 
            label="Name" 
            name="name" 
            autoComplete="name" 
            className="py-1 px-2 text-sm"
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            className="py-1 px-2 text-sm"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            className="py-1 px-2 text-sm"
          />
          <TextInput 
            label="Phone" 
            type="tel" 
            name="phone" 
            autoComplete="tel" 
            className="py-1 px-2 text-sm"
          />
          <TextInput 
            label="Message" 
            name="message" 
            className="py-1 px-2 text-sm"
          />
          {/* <div className="border border-neutral-300 px-4 py-6 rounded-b-2xl">
            <fieldset>
              <legend className="text-sm text-neutral-500">Budget</legend>
            </fieldset>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <RadioInput label="25K – 50K" name="budget" value="25" />
              <RadioInput label="50K – 100K" name="budget" value="50" />
              <RadioInput label="100K – 150K" name="budget" value="100" />
              <RadioInput label="More than 150K" name="budget" value="150" />
            </div>
          </div> */}
        </div>
        <Button type="submit" className="mt-4">
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
