import React, { useState, useRef } from "react";
import gsap from "gsap";
import "./NavButton.css";

const NavButton = ({ onToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [iconClass, setIconClass] = useState("ri-menu-4-fill");

  const buttonRef = useRef(null);
  const iconRef = useRef(null);
  const ringRef = useRef(null);

  const handleMenuToggle = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    setIconClass(newState ? "ri-close-line" : "ri-menu-4-fill");
    onToggle(newState);

    // Click animation
    gsap.fromTo(
      iconRef.current,
      { scale: 1, rotate: 0 },
      {
        scale: 1.2,
        rotate: newState ? 180 : -180,
        duration: 0.3,
        ease: "power3.out",
        onComplete: () => {
          gsap.to(iconRef.current, {
            scale: 1,
            rotate: 0,
            duration: 0.2,
            ease: "power2.out",
          });
        },
      }
    );

    // Ring pulse
    gsap.fromTo(
      ringRef.current,
      { scale: 0, opacity: 1 },
      { scale: 2.5, opacity: 0, duration: 0.6, ease: "power2.out" }
    );
  };

  const handleMouseMove = (e) => {
    const btn = buttonRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(iconRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(iconRef.current, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "elastic.out(1,0.5)",
    });
  };

  return (
    <div
      className="nav-btn-icon-container"
      ref={buttonRef}
      onClick={handleMenuToggle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="nav-btn-ring" ref={ringRef}></div>
      <i ref={iconRef} className={`nav-icon ${iconClass}`}></i>
    </div>
  );
};

export default NavButton;
