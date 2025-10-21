import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Interactive IntroParas component with GSAP-driven 3D tilt + WORD-BY-WORD reveal for paragraphs
export default function IntroParasGSAP() {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const wrapRef = useRef(null);
  const shadowRef = useRef(null);
  const leftParaRef = useRef(null);
  const rightParaRef = useRef(null);

  useEffect(() => {
    // --- Word-by-word reveal (keeps original layout/design) ---
    function splitWords(el) {
      if (!el) return [];
      const text = el.textContent.trim();
      const words = text.split(/(\s+)/); // keep spaces so we can rebuild
      el.innerHTML = "";
      const wordNodes = [];
      words.forEach((w) => {
        if (w.match(/\s+/)) {
          // preserve spacing as a text node
          el.appendChild(document.createTextNode(w));
        } else {
          const span = document.createElement("span");
          span.textContent = w;
          span.className =
            "inline-block opacity-0 translate-y-1 will-change-transform mr-1";
          span.setAttribute("aria-hidden", "true");
          el.appendChild(span);
          wordNodes.push(span);
        }
      });
      return wordNodes;
    }

    const leftWords = splitWords(leftParaRef.current);
    const rightWords = splitWords(rightParaRef.current);

    // timeline: reveal words one-by-one, with small stagger and slight pop
    const t = gsap.timeline({ defaults: { ease: "power2.out" } });
    t.to(
      leftWords,
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: { each: 0.06, from: "start" },
      },
      0.2
    );

    // start right paragraph slightly after left begins (overlap a bit for rhythm)
    t.to(
      rightWords,
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: { each: 0.06, from: "start" },
      },
      "<0.6"
    );

    // small caret blink on left paragraph (subtle)
    const caret = document.createElement("span");
    caret.className = "ml-1 inline-block w-1 h-5 align-middle  opacity-0";
    caret.setAttribute("aria-hidden", "true");
    leftParaRef.current.appendChild(caret);
    gsap.to(caret, {
      opacity: 1,
      repeat: -1,
      yoyo: true,
      duration: 0.7,
      ease: "power1.inOut",
    });

    // --- 3D interactive card ---
    const card = cardRef.current;
    const img = imgRef.current;
    const wrap = wrapRef.current;
    const shadow = shadowRef.current;
    if (!card || !img || !wrap) return;

    let rafId = null;

    function onPointerMove(e) {
      const rect = wrap.getBoundingClientRect();
      const px = (e.clientX ?? (e.touches && e.touches[0].clientX)) - rect.left;
      const py = (e.clientY ?? (e.touches && e.touches[0].clientY)) - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const nx = (px - cx) / cx;
      const ny = (py - cy) / cy;
      const rotateY = nx * 12;
      const rotateX = -ny * 10;
      const transX = nx * 8;
      const transY = ny * 6;
      const shadowX = -nx * 18;
      const shadowY = -ny * 14;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        gsap.to(card, {
          rotationY: rotateY,
          rotationX: rotateX,
          x: transX,
          y: transY,
          scale: 1.035,
          transformPerspective: 1200,
          transformOrigin: "center",
          duration: 0.45,
          ease: "power3.out",
        });
        gsap.to(img, { scale: 1.07, duration: 0.6, ease: "power3.out" });
        if (shadow) {
          gsap.to(shadow, {
            x: shadowX,
            y: shadowY,
            boxShadow: `${Math.abs(nx) * 40}px ${
              Math.abs(ny) * 40
            }px 60px rgba(15,23,42,0.18)`,
            duration: 0.45,
            ease: "power3.out",
          });
        }
      });
    }

    function onPointerEnter() {
      gsap.to(card, { scale: 1.03, duration: 0.45, ease: "power3.out" });
      gsap.to(img, { scale: 1.03, duration: 0.6, ease: "power3.out" });
    }

    function onPointerLeave() {
      if (rafId) cancelAnimationFrame(rafId);
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "elastic.out(1, 0.6)",
      });
      gsap.to(img, { scale: 1, duration: 0.9, ease: "power3.out" });
      if (shadow)
        gsap.to(shadow, {
          x: 0,
          y: 0,
          boxShadow: "0 8px 24px rgba(2,6,23,0.12)",
          duration: 0.7,
        });
    }

    wrap.addEventListener("pointermove", onPointerMove);
    wrap.addEventListener("pointerenter", onPointerEnter);
    wrap.addEventListener("pointerleave", onPointerLeave);

    return () => {
      wrap.removeEventListener("pointermove", onPointerMove);
      wrap.removeEventListener("pointerenter", onPointerEnter);
      wrap.removeEventListener("pointerleave", onPointerLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="px-6 pt-12 ">
      <h1 className="text-5xl mb-4 font-display font-extralight">About Me</h1>

      <div className="relative min-h-[80vh]  text-gray-200 ">
        <div className="absolute w-[28%] top-0 left-0">
          <p ref={leftParaRef} className="whitespace-pre-wrap">
            Hi I'm Shlok, a front-end / full-stack web developer who builds
            polished, responsive web experiences. I work primarily with React,
            Next.js and Tailwind, use GSAP for high-quality micro-motion, and
            bring Node + Mongo when a backend is needed. I care about clean UI,
            performance, and details that make interfaces feel delightful.
          </p>
        </div>

        <div className="absolute w-[28%] bottom-0 right-0">
          <p ref={rightParaRef} className="whitespace-pre-wrap">
            I design and ship production-ready sites, prototypes and small apps
            from animated landing pages to MERN features and tooling. If you've
            got a project, collaboration idea, or just want to say hi, check out
            my projects on GitHub or reach out — let's build something useful
            and beautiful.
          </p>
        </div>

        {/* Interactive GSAP Card */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 [perspective:1200px]">
          <div
            ref={wrapRef}
            className="relative w-[400px] h-[520px] rounded-2xl overflow-visible"
          >
            <div
              ref={shadowRef}
              className="absolute inset-0 rounded-2xl bg-white/0 shadow-lg"
              style={{ boxShadow: "0 8px 24px rgba(2,6,23,0.12)" }}
            />

            <div
              ref={cardRef}
              className="relative w-full h-full p-4 overflow-hidden border border-gray-300  transform-gpu will-change-transform"
              style={{ touchAction: "none" }}
            >
              <img
                ref={imgRef}
                src="https://images.unsplash.com/photo-1620122830785-a18b43585b44?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1200"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute left-4 bottom-6 text-white">
                <h3 className="text-xl font-semibold drop-shadow">
                  Shlok Arth
                </h3>
                <p className="text-sm drop-shadow/60">
                  Front-end & Full-stack Dev
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
