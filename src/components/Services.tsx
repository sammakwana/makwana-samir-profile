
import { 
  FileText, 
  Palette, 
  Video, 
  Monitor, 
  Globe, 
  Cpu, 
  Brush, 
  Code 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Microsoft Office",
      description: "Professional document creation, Excel data analysis, and PowerPoint presentations with modern design aesthetics.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Palette,
      title: "Logo Design & Canva Editing",
      description: "Creative logo design and professional graphic editing using Canva for branding and marketing materials.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing services for promotional content, tutorials, and social media with modern effects.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "User-centered design solutions creating intuitive interfaces and seamless user experiences for digital products.",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web development using modern technologies to create responsive, scalable, and performant web applications.",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: Cpu,
      title: "Embedded System Solutions",
      description: "Hardware-software integration solutions using microcontrollers, IoT devices, and real-time systems development.",
      color: "from-teal-400 to-teal-600"
    },
    {
      icon: Brush,
      title: "Custom Design Services",
      description: "Tailored design solutions for unique requirements including branding, illustrations, and digital artwork.",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: Code,
      title: "Custom Coding Services",
      description: "Bespoke software development, automation scripts, and technical solutions for specific business needs.",
      color: "from-red-400 to-red-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-orange-500">Services</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions combining technical expertise with creative design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card p-6 rounded-lg border border-border hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-orange-500/50"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`p-4 rounded-full bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-orange-500 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Need a custom solution? <span className="text-orange-500 font-semibold">Let's discuss your project!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
