import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@radix-ui/react-icons";

const services = [
  {
    name: "Scan/CAD Services",
    description:
      "Need Models Now? You're Covered. \nProfessional high-precision scanning and CAD modeling services with rapid turnaround.\nStart your project today and get back to innovation.",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    buttons: (
      <div className="flex gap-4 justify-center w-full">
        <Button variant="default" asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link href="/pricing">Pricing</Link>
        </Button>
      </div>
    ),
  },
  {
    name: "HyperP Beta",
    description:
      "Transform Physical Parts into CAD Models — Automatically. \nOur AI-powered platform converts scans into manufacturing-ready CAD files.\nBe a part of the future of engineering.",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    buttons: (
      <div className="flex gap-4 justify-center w-full">
        <Button variant="default" asChild size="lg">
          <Link href="/waitlist">Add Me to Wait List!</Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link href="#demo">
            Watch Beta Demo <ArrowDownIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    ),
  },
];

const ServiceCard = ({
  name,
  description,
  className,
  background,
  buttons,
}: {
  name: string;
  description: string;
  className: string;
  background: React.ReactNode;
  buttons: React.ReactNode;
}) => (
  <div
    className={`group relative flex flex-col overflow-hidden rounded-xl h-[240px]
    bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]
    dark:bg-black dark:border dark:border-white/10 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]
    transform-gpu transition-all duration-300 ${className}`}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col justify-between h-full p-4 transition-all duration-300">
      <div className="text-center transform-gpu transition-all duration-300 group-hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
          {name}
        </h3>
        <p className="text-muted-foreground text-lg whitespace-pre-line">
          {description}
        </p>
      </div>
      <div className="transform-gpu transition-all duration-300 group-hover:-translate-y-2 pointer-events-auto">
        {buttons}
      </div>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export function ServicesBento() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
      {services.map((service) => (
        <ServiceCard key={service.name} {...service} />
      ))}
    </div>
  );
}
