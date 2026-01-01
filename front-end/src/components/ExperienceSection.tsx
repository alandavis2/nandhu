import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Design-Pods",
    location: "Kochi, Ernakulam",
    role: "MERN Stack Intern",
    period: "Sep 2025 - Present",
    type: "current",
    responsibilities: [
      "Developed responsive UIs using React.js with modern HTML/CSS/JavaScript (ES6+)",
      "Built reusable UI components with component-based architecture",
      "Implemented state management using React Hooks and Redux",
      "Designed RESTful APIs using Node.js and Express.js",
      "Implemented secure authentication and authorization mechanisms",
      "Performed CRUD operations on MongoDB databases",
    ],
  },
  {
    company: "Luminar Technolab Pvt Limited",
    location: "Kakkanad, Kochi",
    role: "Python-Django-React Fullstack Intern",
    period: "Sep 2024 - April 2025",
    type: "past",
    responsibilities: [
      "Developed server-side logic using Python and Django framework",
      "Designed and implemented RESTful APIs for front-end communication",
      "Implemented user authentication and authorization mechanisms",
      "Enhanced front-end components using HTML, CSS, and JavaScript",
      "Ensured responsiveness and performance of web applications",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-background md:-translate-x-1/2 z-10"
                    style={{ background: "var(--gradient-primary)" }}
                  />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="gradient-border rounded-xl p-6 hover-glow">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{exp.role}</h3>
                          <p className="text-primary text-sm">{exp.company}</p>
                          <p className="text-muted-foreground text-xs mt-1">
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs font-mono text-muted-foreground">
                          {exp.period}
                        </span>
                        {exp.type === "current" && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">
                            Current
                          </span>
                        )}
                      </div>

                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
