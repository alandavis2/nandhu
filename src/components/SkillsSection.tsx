const skills = {
  languages: [
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "SQL", level: 80 },
  ],
  frameworks: [
    { name: "React", level: 90 },
    { name: "Django", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Redux", level: 75 },
  ],
  soft: [
    "Leadership",
    "Event Management",
    "Writing",
    "Public Speaking",
    "Time Management",
  ],
};

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-xs text-muted-foreground font-mono">{level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: `${level}%`,
          background: "var(--gradient-primary)",
        }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">What I Know</p>
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="gradient-border rounded-xl p-6 hover-glow">
              <h3 className="text-lg font-semibold mb-6 gradient-text">Languages</h3>
              <div className="space-y-5">
                {skills.languages.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="gradient-border rounded-xl p-6 hover-glow">
              <h3 className="text-lg font-semibold mb-6 gradient-text">Frameworks</h3>
              <div className="space-y-5">
                {skills.frameworks.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            {/* Tools & Databases */}
            <div className="gradient-border rounded-xl p-6 hover-glow">
              <h3 className="text-lg font-semibold mb-6 gradient-text">Tools & Databases</h3>
              <div className="space-y-5">
                {skills.tools.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-8">
            <div className="gradient-border rounded-xl p-6 hover-glow">
              <h3 className="text-lg font-semibold mb-6 gradient-text text-center">Soft Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.soft.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
