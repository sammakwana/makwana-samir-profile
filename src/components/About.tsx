
const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About <span className="text-orange-500">Me</span>
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Hi, I'm Makwana Samir – Bridging Code & Circuit
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                A passionate tech enthusiast currently pursuing Bachelor's in Electronics & Communication 
                Engineering with a strong foundation in Computer Engineering. I bring a unique blend of 
                hardware and software expertise to solve real-world technological challenges.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My journey in technology is driven by a deep curiosity for how things work and a desire 
                to create innovative solutions that bridge the gap between digital and physical worlds. 
                From embedded systems to full-stack development, I enjoy exploring the endless possibilities 
                that technology offers.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  Current Education
                </h4>
                <p className="text-muted-foreground">
                  <strong>B.E. in Electronics & Communication</strong><br />
                  Vishwakarma Government Engineering College<br />
                  2024 – 2027
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  Previous Education
                </h4>
                <p className="text-muted-foreground">
                  <strong>Diploma in Computer Engineering</strong><br />
                  A.V. Parekh Technical Institute, Rajkot<br />
                  2021 – 2024
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              My Motivation
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              I'm driven by the endless possibilities that emerge when hardware meets software. 
              My goal is to contribute to the tech industry by developing innovative solutions 
              that make a real impact on people's lives, whether through embedded systems, 
              web applications, or cybersecurity implementations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
