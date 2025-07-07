import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import profileLogo from "@/assets/profile-logo.png";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src={profileLogo} 
                alt="Ankush - Senior Web Designer" 
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 transition-all duration-300 group-hover:border-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/25"
                style={{
                  background: 'transparent',
                  filter: 'drop-shadow(0 0 8px rgba(var(--primary), 0.3))'
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold gradient-text group-hover:text-primary transition-colors duration-300">
              Ankush
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;