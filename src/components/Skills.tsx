
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Code, 
  Shield, 
  Wifi, 
  Brain, 
  Database, 
  FileText, 
  Video, 
  Palette, 
  Wrench,
  Zap,
  Lock,
  Network,
  Globe
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 85, icon: Code },
        { name: "C++", level: 80, icon: Code },
        { name: "Python", level: 90, icon: Code },
        { name: "PHP", level: 75, icon: Code }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: 95, icon: Globe },
        { name: "CSS", level: 90, icon: Palette },
        { name: "JavaScript", level: 85, icon: Code },
        { name: "PHP", level: 80, icon: Code }
      ]
    },
    {
      title: "Embedded & Electronics",
      skills: [
        { name: "AVR Microcontrollers", level: 85, icon: Cpu },
        { name: "ATmega32", level: 80, icon: Cpu },
        { name: "Analog Circuits", level: 75, icon: Zap },
        { name: "Digital Electronics", level: 80, icon: Cpu }
      ]
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: "Ethical Hacking", level: 75, icon: Shield },
        { name: "Network Security", level: 70, icon: Network },
        { name: "Information Security", level: 75, icon: Lock }
      ]
    },
    {
      title: "Other Technologies",
      skills: [
        { name: "IoT", level: 80, icon: Wifi },
        { name: "AI/ML", level: 70, icon: Brain },
        { name: "Oracle SQL", level: 75, icon: Database },
        { name: "Microsoft Office", level: 95, icon: FileText }
      ]
    },
    {
      title: "Design & Media",
      skills: [
        { name: "Canva", level: 90, icon: Palette },
        { name: "Video Editing", level: 85, icon: Video },
        { name: "Logo Design", level: 80, icon: Palette },
        { name: "Troubleshooting", level: 90, icon: Wrench }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.02
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div 
                      key={skillIndex}
                      className="w-full"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        ease: "easeOut", 
                        delay: skillIndex * 0.02 
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                          <IconComponent 
                            className="w-5 h-5 text-orange-500" 
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="flex-1 min-w-0 flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground truncate">{skill.name}</span>
                          <span className="text-sm text-muted-foreground ml-2 flex-shrink-0">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="w-full pl-9">
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <motion.div 
                            className="bg-gradient-to-r from-orange-400 to-orange-600 h-full rounded-full"
                            style={{ maxWidth: '100%', boxSizing: 'border-box' }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${Math.min(skill.level, 100)}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.6, 
                              ease: "easeOut", 
                              delay: skillIndex * 0.02 + 0.1 
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
