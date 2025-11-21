import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profilePhoto from "@/assets/pooja-profile.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-hero-gradient">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-secondary text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold">Pooja Chippa</h1>
              <p className="text-xl md:text-2xl text-secondary font-semibold">
                Aspiring Engineer | Tech Enthusiast | Problem Solver
              </p>
            </div>
            
            <p className="text-lg text-white/90 leading-relaxed max-w-xl">
              A highly motivated B.Tech student passionate about leveraging technology 
              to create innovative solutions. Committed to continuous learning and 
              making a meaningful impact through code.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToSection("projects")}
                className="gap-2"
              >
                View Portfolio <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="gap-2 bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <img
                  src={profilePhoto}
                  alt="Pooja Chippa"
                  className="w-full h-full object-cover rounded-full border-4 border-secondary/50 shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-primary px-6 py-3 rounded-full font-bold shadow-lg">
                  B.Tech Student
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
