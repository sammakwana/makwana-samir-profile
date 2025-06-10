
import { CheckCircle, Code, Cpu, Github, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WhyHireMe = () => {
  const reasons = [
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      title: "Quick Learner & Adaptable",
      description: "Passionate tech enthusiast who stays current with emerging technologies and adapts quickly to new challenges."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Team Player",
      description: "Strong collaborative skills with experience working in diverse teams to deliver successful projects."
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: "Full-Stack Expertise",
      description: "Hands-on experience with web development, from frontend frameworks to backend systems and databases."
    },
    {
      icon: <Cpu className="w-8 h-8 text-orange-500" />,
      title: "Hardware & Software Skills",
      description: "Unique combination of embedded systems knowledge and software development capabilities."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
      title: "Problem Solver",
      description: "Strong analytical and problem-solving skills with proven project execution abilities."
    },
    {
      icon: <Github className="w-8 h-8 text-orange-500" />,
      title: "Open Source Contributor",
      description: "Active GitHub profile showcasing real-world projects and continuous learning journey."
    }
  ];

  return (
    <section id="why-hire-me" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why <span className="text-orange-500">Hire Me?</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm a passionate tech enthusiast with a background in Computer Engineering and currently pursuing Electronics & Communication. 
              I bring a unique mix of software and hardware skills — from coding to circuit design.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Quick learner and team player</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Hands-on experience with embedded systems and web development</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Strong problem-solving and project execution skills</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/30 transition-colors duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground mb-6">
            <Github className="w-5 h-5" />
            <span className="text-lg">Check out my projects on GitHub</span>
          </div>
          <Button 
            asChild
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
          >
            <a 
              href="https://github.com/sammakwana" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View GitHub Profile
            </a>
          </Button>
          <p className="text-2xl font-semibold text-foreground mt-8">
            Let's build something great together! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
