
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      name: "DISTANCE-DETECTER-USING-ATMEGA32",
      description: "A real-time embedded system using ATmega32 microcontroller and HC-SR04 ultrasonic sensor to measure distance. Output is shown on a 16x2 I2C LCD. Built for precise and low-power object detection.",
      tech: ["C", "AVR", "ATmega32", "Sensors"],
      github: "https://github.com/sammakwana/DISTANCE-DETECTER-USING-ATMEGA32",
      demo: "#"
    },
    {
      name: "Personal Portfolio Website",
      description: "A modern, responsive personal portfolio website built with HTML, CSS, JavaScript, and PHP. Features include smooth scroll, interactive sections, and a working contact form via EmailJS. Deployed using Lovable.",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      github: "https://github.com/sammakwana/makwana-samir-profile",
      demo: "#"
    },
    {
      name: "Cybersecurity Tool",
      description: "Network security analysis tool for vulnerability assessment and penetration testing",
      tech: ["Python", "Security", "Networking"],
      github: "https://github.com/sammakwana",
      demo: "#"
    },
    {
      name: "Circuit Design Project",
      description: "Analog and digital circuit designs for electronic communication systems",
      tech: ["Electronics", "PCB", "Design"],
      github: "https://github.com/sammakwana",
      demo: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My <span className="text-orange-500">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Explore my latest projects showcasing skills in embedded systems, web development, and cybersecurity
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5 rounded-xl" />
              <div className="absolute inset-0 bg-card/20 backdrop-blur-sm rounded-xl border border-white/10" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-orange-500 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted/50 hover:bg-orange-500/20 text-muted-foreground hover:text-orange-500 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="p-2 rounded-lg bg-muted/50 hover:bg-orange-500/20 text-muted-foreground hover:text-orange-500 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full border border-orange-500/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        ease: "easeOut", 
                        delay: techIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Button 
              asChild
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/25 font-medium"
            >
              <a 
                href="https://github.com/sammakwana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View All Projects
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
