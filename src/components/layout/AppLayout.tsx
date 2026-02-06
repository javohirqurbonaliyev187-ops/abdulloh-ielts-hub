import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, GraduationCap } from "lucide-react";
import { AppSidebar } from "./AppSidebar";
import { Button } from "@/components/ui/button";

interface AppLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

export function AppLayout({ children, showNav = true }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Top Bar */}
      {showNav && (
        <header className="fixed top-0 left-0 right-0 z-30 bg-card/80 backdrop-blur-lg border-b border-border">
          <div className="container-main">
            <div className="flex items-center justify-between h-16 px-4 md:px-8">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
                <Link to="/" className="flex items-center gap-2 group">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-lg font-bold text-foreground leading-tight">
                      IELTS
                    </span>
                    <span className="text-xs text-accent font-semibold -mt-1">
                      with Abdulloh
                    </span>
                  </div>
                </Link>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <Button variant="ghost" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/register">Start Free</Link>
                </Button>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <div className={showNav ? "pt-16" : ""}>
        {children}
      </div>
    </div>
  );
}
