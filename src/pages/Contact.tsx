import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, User } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your project to life? Let's discuss how I can help you create something amazing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-hover bg-gradient-secondary border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Let's Work Together</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="project">Project Type</Label>
                  <Input 
                    id="project" 
                    placeholder="Web Design, PSD to HTML, Logo Design, etc." 
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-muted/50 border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-lg py-6">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="card-hover bg-gradient-secondary border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">hello@yourportfolio.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover bg-gradient-secondary border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover bg-gradient-secondary border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Availability</h3>
                      <p className="text-muted-foreground">Available for new projects</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover bg-gradient-secondary border-border/50">
                <CardContent className="p-8">
                  <h3 className="font-semibold mb-4">What I Offer</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Custom Web Design & Development</li>
                    <li>• PSD to HTML/WordPress Conversion</li>
                    <li>• React Application Development</li>
                    <li>• Logo & Brand Identity Design</li>
                    <li>• Responsive Design Solutions</li>
                    <li>• UI/UX Design Consulting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;