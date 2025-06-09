
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-orange-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(17,24,39,1))]"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Makwana
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Samir
              </span>
              <span className="text-white">.</span>
            </h1>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl text-gray-300 leading-relaxed">
              — Introduction
            </p>
            <h2 className="text-3xl lg:text-4xl text-white font-semibold leading-tight">
              Electronics & Communication Engineer, based in Gujarat.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Bridging Code & Circuit. A passionate tech enthusiast specializing in embedded systems, 
              full-stack development, and cybersecurity with hands-on experience in hardware-software integration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg transition-all duration-300"
            >
              View Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 pt-4">
            <a 
              href="https://github.com/sammakwana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/samir-makwana-59265a286" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image Placeholder */}
        <div className="relative animate-fade-in animation-delay-300">
          <div className="relative">
            <div className="w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-br from-orange-400/20 to-blue-600/20 border border-orange-500/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">MS</span>
                </div>
                <p className="text-gray-400">Profile Photo</p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center animate-fade-in animation-delay-600">
        <p className="text-gray-300 text-lg italic max-w-2xl">
          "You can't use up creativity, the more you use, more you have in your significant mind."
        </p>
      </div>
    </section>
  );
};

export default Hero;
