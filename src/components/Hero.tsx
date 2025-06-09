
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with floating particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-orange-900/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent),radial-gradient(circle_at_40%_40%,rgba(168,85,247,0.1),transparent)]"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400/60 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse animation-delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-pulse animation-delay-600"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-orange-300/60 rounded-full animate-pulse animation-delay-300"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-300/40 rounded-full animate-pulse animation-delay-600"></div>
      </div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium backdrop-blur-sm">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              <span className="text-gray-300">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Samir Makwana
              </span>
              <span className="text-white">.</span>
            </h1>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
              <div className="w-8 h-1 bg-gradient-to-r from-orange-400/60 to-orange-600/60 rounded-full"></div>
              <div className="w-4 h-1 bg-gradient-to-r from-orange-400/40 to-orange-600/40 rounded-full"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-orange-400 text-lg font-medium tracking-wide">
              — BRIDGING CODE & CIRCUIT
            </p>
            <h2 className="text-3xl lg:text-4xl text-white font-semibold leading-tight">
              Pursuing a Bachelor's in Electronics & Communication and a Diploma graduate in Computer Engineering
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              A passionate tech enthusiast specializing in embedded systems, full-stack development, 
              and cybersecurity with hands-on experience in hardware-software integration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 px-8 py-3 text-lg transition-all duration-300 backdrop-blur-sm"
            >
              <Download className="w-5 h-5 mr-2" />
              View Resume
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex space-x-6 pt-4">
            <a 
              href="https://github.com/sammakwana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300 hover:scale-110 transform backdrop-blur-sm"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/samir-makwana-59265a286" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300 hover:scale-110 transform backdrop-blur-sm"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Enhanced Right Content - Profile Image */}
        <div className="relative animate-fade-in animation-delay-300">
          <div className="relative">
            {/* Main profile container with enhanced styling */}
            <div className="w-full max-w-md mx-auto aspect-square rounded-3xl bg-gradient-to-br from-orange-400/10 via-blue-600/10 to-purple-600/10 border border-orange-500/20 flex items-center justify-center backdrop-blur-sm relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5"></div>
              
              <div className="text-center relative z-10">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-2xl">
                  <span className="text-3xl font-bold text-white">SM</span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300 font-medium">Profile Photo</p>
                  <p className="text-gray-500 text-sm">Coming Soon</p>
                </div>
              </div>
              
              {/* Inner decorative elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-orange-400/60 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse animation-delay-300"></div>
            </div>
            
            {/* Enhanced Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-2xl animate-pulse animation-delay-600"></div>
            <div className="absolute top-1/2 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse animation-delay-300"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Quote with modern styling */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center animate-fade-in animation-delay-600">
        <div className="backdrop-blur-sm bg-gray-900/30 border border-orange-500/20 rounded-2xl px-8 py-4 max-w-2xl">
          <p className="text-gray-300 text-lg italic">
            "You can't use up creativity, the more you use, more you have in your significant mind."
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-3 rounded-full"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
