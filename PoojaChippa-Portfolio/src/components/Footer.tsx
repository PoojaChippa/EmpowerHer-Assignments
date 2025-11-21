import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Pooja Chippa</h3>
            <p className="text-white/80">
              B.Tech Student passionate about technology and innovation
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-white/80 hover:text-secondary transition-colors">
                About
              </a>
              <a href="#skills" className="block text-white/80 hover:text-secondary transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-white/80 hover:text-secondary transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-white/80 hover:text-secondary transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/pooja-chippa-246a402a0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/PoojaChippa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:poojachippa04@gmail.com"
                className="bg-white/10 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} Pooja Chippa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
