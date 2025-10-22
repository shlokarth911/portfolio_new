import React from "react";
import AnimatedButton from "../ui/AnimatedButton";
import StringWave from "../ui/StringWave";

const Contact = () => {
  return (
    <div className="w-full flex justify-center p-4 mt-16 sm:mt-20 sm:p-8">
      <div className="w-[100%] py-1 sm:w-[80%]">
        <h1 className="text-6xl font-display font-extralight sm:text-8xl">
          Let's Connect...
        </h1>
        <div className="mt-3 sm:mt-0">
          {window.innerWidth > 768 ? <StringWave /> : null}
        </div>
        <div className="flex gap-3 ">
          <AnimatedButton
            text="Find me on LinkedIn"
            link="https://www.linkedin.com/in/shlok-arth-08494a2b9/"
          />
          <AnimatedButton text="Mail Me" link="mailto:shlokarth7@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
