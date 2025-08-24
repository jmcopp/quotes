import { ThemeProvider } from "@/components/theme-provider";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10">{children}</div>
    </div>
  );
}
