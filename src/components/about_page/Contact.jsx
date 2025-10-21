import React from "react";
import AnimatedButton from "../ui/AnimatedButton";

const Contact = () => {
  return (
    <div className=" mx-auto px-6 md:px-12 lg:px-20 py-12 mt-24 ">
      <h1 className="text-8xl font-light ">Get in Touch</h1>

      <div className="w-full h-[1px] bg-neutral-50/50 my-20"></div>

      <div className="flex gap-3 mt-7">
        <AnimatedButton text={"Mail Me"} link={""} />
        <AnimatedButton text={"Find me on Linked In"} link={""} />
      </div>
    </div>
  );
};

export default Contact;
