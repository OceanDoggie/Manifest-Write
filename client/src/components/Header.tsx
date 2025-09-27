import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    console.log('Dark mode toggled:', !darkMode);
  };

  return (
    <header className="flex items-center justify-between p-6 pearl-crystal-bg border-b border-border/50 relative mystical-symbol-bg">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-8 h-8 bg-gradient-to-br from-primary via-accent to-primary rounded-full mystical-symbol"></div>
          <div className="absolute inset-0 text-white text-xs flex items-center justify-center font-bold">✧</div>
        </div>
        <h1 className="text-xl font-serif font-semibold text-foreground">
          Manifest Write
        </h1>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Examples</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
      </nav>

      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDarkMode}
          data-testid="button-theme-toggle"
        >
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        <Button variant="outline" data-testid="button-sign-in">Sign In</Button>
        <Button data-testid="button-get-started">Get Started</Button>
      </div>
    </header>
  );
}