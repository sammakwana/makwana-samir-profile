import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Samir_Makwana_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with floating particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-orange-900/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent),radial-gradient(circle_at_40%_40%,rgba(168,85,247,0.1),transparent)]"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-2 h-2 bg-orange-400/60 rounded-full"
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-1 h-1 bg-blue-400/60 rounded-full"
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400/60 rounded-full"
          animate={{ y: [0, -8, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1 }}
        />
      </div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div 
          className="space-y-8 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Welcome Badge */}
          <motion.div 
            className="inline-block"
            variants={itemVariants}
          >
            <span className="px-6 py-3 bg-background/20 backdrop-blur-md border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium shadow-lg">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading with Typewriter Effect */}
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              variants={typewriterVariants}
            >
              <span className="text-muted-foreground">Hi, I'm</span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              >
                Samir Makwana
              </motion.span>
              <span className="text-foreground">.</span>
            </motion.h1>
          </motion.div>

          {/* Decorative Line */}
          <motion.div 
            className="flex items-center justify-center lg:justify-start space-x-4"
            variants={itemVariants}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-orange-400/60 to-orange-600/60 rounded-full"></div>
            <div className="w-4 h-1 bg-gradient-to-r from-orange-400/40 to-orange-600/40 rounded-full"></div>
          </motion.div>

          {/* Subtitle and Description */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="backdrop-blur-md bg-background/10 border border-border/20 rounded-2xl p-6 shadow-lg">
              <p className="text-orange-400 text-lg font-semibold tracking-wide leading-relaxed mb-4">
                — BRIDGING CODE & CIRCUIT
              </p>
              <h2 className="text-2xl lg:text-3xl text-foreground font-semibold leading-tight mb-4">
                Pursuing a Bachelor's in Electronics & Communication and a Diploma graduate in Computer Engineering
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A passionate tech enthusiast specializing in embedded systems, full-stack development, 
                and cybersecurity with hands-on experience in hardware-software integration.
              </p>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/25 font-medium rounded-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Button 
                onClick={handleViewResume}
                variant="outline" 
                size="lg"
                className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 px-8 py-4 text-lg transition-all duration-300 backdrop-blur-sm font-medium rounded-xl"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Button 
                onClick={handleDownloadResume}
                variant="outline" 
                size="lg"
                className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 px-8 py-4 text-lg transition-all duration-300 backdrop-blur-sm font-medium rounded-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex space-x-6 justify-center lg:justify-start pt-4"
            variants={itemVariants}
          >
            {[
              { href: "https://github.com/sammakwana", Icon: Github },
              { href: "https://linkedin.com/in/samir-makwana-59265a286", Icon: Linkedin }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.href}
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-background/20 backdrop-blur-md border border-border/30 text-muted-foreground hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <social.Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Right Content - Profile Image */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <div className="relative">
            {/* Main profile container with enhanced styling */}
            <div className="w-full max-w-md mx-auto aspect-square rounded-3xl bg-background/20 backdrop-blur-md border border-orange-500/20 flex items-center justify-center shadow-2xl relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5"></div>
              
              <div className="relative z-10">
                {/* Profile Image with circular mask */}
                <motion.div 
                  className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-orange-500/30 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <img 
                    src="/lovable-uploads/profile-image.jpeg" 
                    alt="Samir Makwana" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              {/* Inner decorative elements */}
              <motion.div 
                className="absolute top-6 right-6 w-3 h-3 bg-orange-400/60 rounded-full"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.div 
                className="absolute bottom-8 left-8 w-2 h-2 bg-blue-400/60 rounded-full"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              />
            </div>
            
            {/* Enhanced Decorative Elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeOut", delay: 1 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Enhanced Bottom Quote with modern styling */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
      >
        <div className="backdrop-blur-md bg-background/20 border border-orange-500/20 rounded-2xl px-8 py-4 max-w-2xl shadow-lg">
          <p className="text-muted-foreground text-lg italic leading-relaxed">
            "You can't use up creativity, the more you use, more you have in your significant mind."
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-3 rounded-full"></div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      >
        <div className="w-6 h-10 border-2 border-orange-500/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-orange-500 rounded-full mt-2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
