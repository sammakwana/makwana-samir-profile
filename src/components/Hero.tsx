
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Hi, I'm <span className="text-orange-500">Samir</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A passionate tech enthusiast specializing in embedded systems, full-stack development, and cybersecurity
        </p>

        <Button 
          onClick={() => scrollToSection('projects')}
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
        >
          <Github className="w-5 h-5 mr-2" />
          View Projects
        </Button>
      </div>
    </section>
  );
};

export default Hero;
