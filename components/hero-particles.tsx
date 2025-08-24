"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface HeroParticlesProps {
  children: React.ReactNode;
}

const HeroParticles = ({ children }: HeroParticlesProps) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const handleScriptLoad = () => {
    setScriptLoaded(true);
  };

  useEffect(() => {
    if (scriptLoaded && typeof window !== "undefined") {
      const particlesConfig = {
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#808080",
          },
          opacity: {
            value: 0.3,
            random: false,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
        },
        retina_detect: true,
      };

      // @ts-ignore
      if (window.particlesJS) {
        // @ts-ignore
        window.particlesJS("hero-particles", particlesConfig);
      }
    }

    return () => {
      // @ts-ignore
      if (window.pJSDom && window.pJSDom[0]) {
        // @ts-ignore
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
      }
    };
  }, [scriptLoaded]);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        onLoad={handleScriptLoad}
      />
      <div
        id="hero-particles"
        className="container flex max-w-[90rem] flex-col items-center gap-4 text-center relative"
      >
        {children}
      </div>
    </>
  );
};

export default HeroParticles;
