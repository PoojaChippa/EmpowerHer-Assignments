import { GraduationCap, Target, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/pooja-profile.jpg";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Highly Motivated",
      description: "Committed to excellence with strong organizational and time-management skills",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Passionate about using technical knowledge to create real-world solutions",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learner",
      description: "Dedicated to growth and staying updated with latest technologies",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-teal/10 rounded-2xl blur-2xl"></div>
              <img
                src={profilePhoto}
                alt="Pooja Chippa"
                className="relative w-80 h-80 object-cover rounded-2xl shadow-card"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed">
              I am a highly motivated and hardworking individual with strong organisational 
              and time-management skills. My passion lies in leveraging technical knowledge 
              to develop innovative solutions that address real-world challenges.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Currently pursuing my B.Tech at Nalla Malla Reddy Engineering College (2022-2026), 
              I am committed to continuous learning and personal growth. I believe in the power 
              of technology to transform lives and am eager to contribute to meaningful projects.
            </p>
            
            <div className="bg-muted p-6 rounded-xl border-l-4 border-secondary">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="text-secondary" size={24} />
                <h3 className="text-xl font-bold text-primary">Education</h3>
              </div>
              <p className="text-foreground font-semibold">B.Tech in Engineering</p>
              <p className="text-muted-foreground">Nalla Malla Reddy Engineering College</p>
              <p className="text-muted-foreground text-sm">2022 - 2026</p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-0 shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-secondary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
