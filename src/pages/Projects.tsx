import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Complete e-commerce solution built with React and WordPress backend. Features include product catalog, shopping cart, payment integration, and admin dashboard.",
      technologies: ["React", "WordPress", "CSS3", "JavaScript"],
      category: "Web Development"
    },
    {
      title: "Corporate Website Redesign",
      description: "Complete redesign and development of a corporate website. Converted PSD designs to responsive HTML/CSS and integrated with WordPress CMS.",
      technologies: ["HTML5", "CSS3", "Bootstrap", "WordPress", "Photoshop"],
      category: "PSD to HTML"
    },
    {
      title: "SaaS Dashboard Interface",
      description: "Modern dashboard interface for a SaaS platform. Created in Figma and developed using React with responsive design principles.",
      technologies: ["React", "Figma", "TypeScript", "CSS3"],
      category: "UI/UX Design"
    },
    {
      title: "Brand Identity Package",
      description: "Complete brand identity design including logo, business cards, letterheads, and marketing materials for a tech startup.",
      technologies: ["Photoshop", "Illustrator", "Figma"],
      category: "Logo Design"
    },
    {
      title: "Restaurant Website",
      description: "Modern restaurant website with online menu, reservation system, and responsive design. Built using HTML5, CSS3, and Bootstrap framework.",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      category: "Web Development"
    },
    {
      title: "Mobile App Landing Page",
      description: "Converting complex PSD design to pixel-perfect responsive HTML/CSS landing page for a mobile application launch.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Photoshop"],
      category: "PSD to HTML"
    }
  ];

  const categories = ["All", "Web Development", "PSD to HTML", "UI/UX Design", "Logo Design"];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work spanning web development, design, and conversion projects
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-gradient-primary" : "bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover bg-gradient-secondary border-border/50 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                      View Project
                    </Button>
                    <Button size="sm" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;