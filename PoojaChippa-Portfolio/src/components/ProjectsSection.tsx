import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Database, LineChart, Globe } from "lucide-react";

const ProjectsSection = () => {
  const features = [
    {
      icon: LineChart,
      text: "Uses Gaussian Naïve Bayes for soil fertility classification",
    },
    {
      icon: Database,
      text: "Analyzes soil pH, NPK content, and moisture levels",
    },
    {
      icon: Globe,
      text: "Real-time predictions through web interface",
    },
    {
      icon: Leaf,
      text: "Promotes sustainable farming practices",
    },
  ];

  const techStack = [
    "Python",
    "Scikit-learn",
    "Machine Learning",
    "Data Analysis",
    "Web Development",
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Featured Project</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions powered by artificial intelligence
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in border-0 shadow-card">
            <div className="grid md:grid-cols-2">
              {/* Project Image/Icon */}
              <div className="bg-gradient-to-br from-secondary/20 to-teal/20 p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl"></div>
                  <div className="relative bg-white rounded-full p-12 shadow-xl">
                    <Leaf size={120} className="text-secondary" />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 md:p-10 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-3">
                    AI-driven Soil Health Analyzer
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    An intelligent system that revolutionizes agricultural practices by providing 
                    data-driven insights into soil health, helping farmers make informed decisions 
                    for sustainable farming.
                  </p>
                </div>

                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-secondary/10 rounded-lg p-2 mt-1">
                        <feature.icon size={18} className="text-secondary" />
                      </div>
                      <p className="text-foreground flex-1">{feature.text}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    size="lg"
                    className="gap-2"
                    onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth' })}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
