// App.jsx
import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import gsap from "gsap";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/ui/Navbar";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

export default function App() {
  const location = useLocation();

  const [displayPath, setDisplayPath] = useState(location.pathname);

  const pageRef = useRef(null);

  const tlRef = useRef(null);

  useEffect(() => {
    const el = pageRef.current;
    if (!el) return;

    gsap.killTweensOf(el);

    gsap.fromTo(
      el,
      { y: 20, opacity: 0, scale: 0.995 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
    );
  }, [displayPath]);

  useEffect(() => {
    if (location.pathname === displayPath) return;

    const el = pageRef.current;
    if (!el) {
      setDisplayPath(location.pathname);
      return;
    }

    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    const tl = gsap.timeline({
      defaults: { duration: 0.45, ease: "power2.inOut" },
      onComplete: () => {
        setDisplayPath(location.pathname);
        tlRef.current = null;
      },
    });

    tl.to(el, { y: -20, opacity: 0, scale: 0.98 });

    tlRef.current = tl;

    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
    };
  }, [location.pathname, displayPath]);

  return (
    <>
      {/* Example nav (you can keep your existing nav) */}
      <Navbar />

      {/* Wrapper that GSAP animates in/out */}
      <div
        ref={pageRef}
        aria-live="polite"
        style={{ minHeight: "80vh", willChange: "transform, opacity" }}
      >
        {/* Render the route corresponding to displayPath (not the current location) so we can control swap timing */}
        <Routes location={{ pathname: displayPath }}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </>
  );
}
