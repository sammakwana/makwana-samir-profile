
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 80 },
        { name: "Python", level: 90 },
        { name: "PHP", level: 75 }
      ]
    },
    {
      title: "Web & UI/UX",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Django", level: 85 },
        { name: "UI/UX Design", level: 80 }
      ]
    },
    {
      title: "Embedded & Electronics",
      skills: [
        { name: "AVR Microcontrollers", level: 85 },
        { name: "ATmega32", level: 80 },
        { name: "Analog Circuits", level: 75 },
        { name: "Digital Electronics", level: 80 }
      ]
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: "Ethical Hacking", level: 75 },
        { name: "Network Security", level: 70 },
        { name: "Information Security", level: 75 }
      ]
    },
    {
      title: "Other Technologies",
      skills: [
        { name: "IoT", level: 80 },
        { name: "AI/ML", level: 70 },
        { name: "Oracle SQL", level: 75 },
        { name: "Microsoft Office", level: 95 }
      ]
    },
    {
      title: "Design & Media",
      skills: [
        { name: "Canva", level: 90 },
        { name: "Video Editing", level: 85 },
        { name: "Logo Design", level: 80 },
        { name: "Troubleshooting", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
