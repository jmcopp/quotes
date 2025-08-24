import Link from "next/link";
import { BentoDemo } from "@/components/bento-features";
import { ServicesBento } from "@/components/services-bento";
import { Icons } from "@/components/icons";
import ShineBorder from "@/components/magicui/shine-border";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Companies } from "@/components/social-proof";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HeroParticles from "@/components/hero-particles";

const HeroPage = () => {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20">
        <HeroParticles>
          <ShineBorder
            className="absolute p-6 flex items-center justify-center"
            color={["#FFFFFF", "#FE8FB5", "#FFBE7B"]}
          >
            <img
              src="/images/black_HP1.png"
              alt="QuotesAI Logo"
              className="h-24 w-auto object-contain"
            />
          </ShineBorder>

          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-20">
            <b>AUTOMATE</b> REVERSE ENGINEERING
          </h1>

          {/* Services Bento Grid */}
          <div className="mt-12 mb-8 w-full">
            <ServicesBento />
          </div>
        </HeroParticles>

        <div className="relative rounded-xl mx-auto justify-center flex flex-col items-center lg:max-w-[1000px] overflow-hidden md:overflow-auto lg:overflow-auto">
          <img
            src="/darkoutput.png"
            alt="Hero Image"
            className="hidden lg:max-w-[1000px] rounded-[inherit] border object-contain shadow-lg dark:block overflow-hidden md:overflow-auto lg:overflow-auto"
          />
          <img
            src="/lightoutput.png"
            alt="Hero Image"
            className="block lg:max-w-[1000px] rounded-[inherit] border object-contain shadow-lg dark:hidden overflow-hidden md:overflow-auto lg:overflow-auto"
          />
          <div
            style={{
              "--size": "250",
              "--duration": "15",
              "--anchor": "90",
              "--border-width": "1.5",
              "--color-from": "#FFFFFF",
              "--color-to": "#B8860B",
              "--delay": "-0s",
            }}
            className="absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"
          />
        </div>
      </section>

      <Companies />

      <section
        id="Features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-10"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h3 className="text-center text-sm font-semibold text-gray-500 pb-2">
            HOW SERVICE WORKS
          </h3>
        </div>
        <BentoDemo />
      </section>

      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <HeroParticles>
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
            <b>DEMOCRATIZE</b> REVERSE ENGINEERING
          </h1>
        </HeroParticles>
      </section>
    </>
  );
};

export default HeroPage;
