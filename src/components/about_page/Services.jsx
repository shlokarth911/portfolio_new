import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Services.jsx
// React + Tailwind component that reproduces the "Services" section from your HTML/CSS
// - Includes 3 service cards
// - GSAP ScrollTrigger reveal for larger screens (similar to your original cardAnimation)
// Usage: make sure GSAP + ScrollTrigger are installed: `npm i gsap`

export default function Services({ className = "" }) {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // clear any previous refs
    const cards = cardRefs.current.filter(Boolean);

    function initCardAnimation() {
      // Kill previous triggers (safe to call repeatedly)
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(cards);

      // only animate on wide screens (desktop behaviour)
      if (window.innerWidth > 768 && cards.length) {
        gsap.from(cards, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "top 60%",
            // scroller: defaults to document — keep default for simplicity
            toggleActions: "play none none reverse",
          },
        });
      } else {
        // ensure cards are visible on smaller screens
        gsap.set(cards, { opacity: 1, y: 0 });
      }
    }

    initCardAnimation();

    // Re-init on resize (debounced)
    let rAF;
    function handleResize() {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(initCardAnimation);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(cards);
    };
  }, []);

  function addToRefs(el) {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  }

  const services = [
    {
      id: "01",
      title: "Design",
      desc: "I make web designs that engage your audience and create the user experience you want.",
    },
    {
      id: "02",
      title: "Development",
      desc: "Bringing visuals to life through developing highly functional web solutions.",
    },
    {
      id: "03",
      title: "The Full Package",
      desc: "Get the best of both worlds for your website—capture your brand identity and ship production-ready features.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className={` mx-auto px-6 md:px-12 lg:px-20 py-12 ${className}`}
      aria-label="Services"
    >
      <h2 className="text-3xl md:text-4xl lg:text-7xl font-light mb-12">
        I can help you with...
      </h2>

      <div className="cards grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <article
            key={s.id}
            ref={addToRefs}
            className="card bg-transparent border-none"
            role="article"
            aria-labelledby={`svc-${s.id}`}
          >
            <h5 className="text-sm md:text-base text-gray-400 border-b border-gray-600 pb-3 w-full">
              {s.id}
            </h5>
            <h3
              id={`svc-${s.id}`}
              className="text-2xl md:text-4xl font-semibold mt-4 mb-4"
            >
              {s.title}
            </h3>
            <p className="text-sm md:text-lg text-gray-300 max-w-prose">
              {s.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
