import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Pen, Settings, Star } from "lucide-react";
import heroWorkspace from "@/assets/hero-workspace.jpg";

const Index = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, HTML5, CSS3, and JavaScript.",
      skills: ["React", "HTML5", "CSS3", "JavaScript"]
    },
    {
      icon: <Pen className="w-8 h-8" />,
      title: "PSD to HTML",
      description: "Pixel-perfect conversion of your design files into responsive, semantic HTML/CSS code.",
      skills: ["Photoshop", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins, along with PSD to WordPress conversions.",
      skills: ["WordPress", "PHP", "MySQL", "Custom Themes"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly designs created in Figma and Photoshop, including logo and brand identity.",
      skills: ["Figma", "Photoshop", "Logo Design", "Branding"]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroWorkspace} 
            alt="Web designer workspace" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
              Senior Web Designer
              <br />
              & Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Crafting beautiful, functional websites with expertise in React, WordPress, 
              and modern design tools. From concept to deployment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 glow">
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {["React", "HTML5", "CSS3", "WordPress", "Figma", "Photoshop"].map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-muted/20 backdrop-blur-sm text-foreground border border-border/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              What I Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web design and development services to bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover bg-gradient-secondary border-border/50 group">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-primary/20 rounded-lg inline-block mb-6 group-hover:bg-primary/30 transition-colors">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="text-4xl md:text-6xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Footer */}
      <footer className="relative py-20 bg-gradient-to-r from-background via-background/95 to-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 glow">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Senior Web Designer & Developer
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-border/30 shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
                  <div className="flex items-center gap-3 text-lg">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">Currently working at</span>
                  </div>
                  <a 
                    href="https://seventhtechnology.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-300 hover:scale-105 transform"
                  >
                    Seventh Technology
                  </a>
                </div>
                
                <div className="flex items-center justify-center gap-4 p-4 bg-muted/20 rounded-xl border border-border/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Available for contact</span>
                  </div>
                  <a 
                    href="mailto:info@designerankush.com"
                    className="text-lg font-medium text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105 transform flex items-center gap-2"
                  >
                    <span>info@designerankush.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-secondary/30 backdrop-blur-sm rounded-full border border-border/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Portfolio. Crafted with passion & precision.
              </span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </footer>
    </div>
  );
};

export default Index;