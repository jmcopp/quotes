import * as React from "react";

// import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
// import { ModeToggle } from "@/components/mode-toggle"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex justify-center py-6">
        <img
          src="/images/black_HP1.png"
          alt="HP1 Logo"
          className="h-16 w-auto"
        />
      </div>
    </footer>
  );
}
