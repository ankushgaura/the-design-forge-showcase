import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "HTML5", "CSS3", "Bootstrap", "React", "WordPress", "Photoshop", 
    "Figma", "JavaScript", "TypeScript", "Responsive Design",
    "PSD to HTML", "Logo Design", "UI/UX Design"
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating beautiful, functional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="card-hover bg-gradient-secondary border-border/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">My Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a Senior Web Designer and Front-end Developer, I bring over years of experience 
                  crafting digital solutions that bridge the gap between beautiful design and 
                  functional development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey spans from creating pixel-perfect designs in Photoshop and Figma 
                  to bringing them to life with modern web technologies. I specialize in 
                  converting complex PSD designs into responsive, interactive websites.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-secondary border-border/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">What I Do</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Custom Web Design & Development
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    PSD to HTML/WordPress Conversion
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    React Application Development
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Logo & Brand Identity Design
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Responsive Web Design
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="card-hover bg-gradient-secondary border-border/50 mb-16">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Skills & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;