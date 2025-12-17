import { GraduationCap, MapPin, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Get To Know</p>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Objective */}
            <div className="space-y-6">
              <div className="gradient-border rounded-xl p-6 hover-glow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Objective</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Seeking a position in an organization where my skills and abilities can be 
                      creatively utilized to add value to attain professional growth while being 
                      competent and resourceful.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border rounded-xl p-6 hover-glow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground text-sm">Kerala, India</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Open to remote opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Education */}
            <div className="space-y-6">
              <div className="gradient-border rounded-xl p-6 hover-glow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">Education</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-2 border-primary/30 pl-4">
                        <p className="text-sm text-primary font-mono">Nov 2022 - June 2024</p>
                        <h4 className="font-medium mt-1">Master of Computer Applications</h4>
                        <p className="text-sm text-muted-foreground">
                          Mar Athanasios College for Advanced Studies, Tiruvalla
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">CGPA: 7.2</p>
                      </div>

                      <div className="border-l-2 border-accent/30 pl-4">
                        <p className="text-sm text-accent font-mono">July 2019 - June 2022</p>
                        <h4 className="font-medium mt-1">Bachelor of Science</h4>
                        <p className="text-sm text-muted-foreground">
                          College of Applied Science, Adoor
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">CGPA: 6.82</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
