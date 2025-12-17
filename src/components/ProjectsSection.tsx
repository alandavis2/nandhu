import { ExternalLink, Github, Utensils, ShoppingCart, Bus } from "lucide-react";

const projects = [
  {
    title: "Foody",
    description: "Full-stack Restaurant Management and Booking Application with real-time food ordering and comprehensive Admin Dashboard for organizational control, sales analytics, and inventory management.",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap"],
    icon: Utensils,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Swift Cart",
    description: "Multi-Vendor E-Commerce Platform with separate dashboards for customers, vendors, and delivery agents. Features real-time order tracking, product management, and sales analytics.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    icon: ShoppingCart,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Private Bus-Fleet Operator System",
    description: "Web-based application for managing a private bus fleet including user/employee management, vehicle tracking, maintenance, trip scheduling, financial oversight, and reporting analytics.",
    tech: ["Python", "Django", "JavaScript", "MySQL"],
    icon: Bus,
    gradient: "from-purple-500 to-pink-500",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My Work</p>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group gradient-border rounded-xl overflow-hidden hover-glow transition-all duration-300"
              >
                {/* Project Header */}
                <div className={`h-40 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center relative overflow-hidden`}>
                  <project.icon className="w-16 h-16 text-white/90" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Github className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
