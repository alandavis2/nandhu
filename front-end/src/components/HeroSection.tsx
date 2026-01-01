import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text">Nandhu S</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Full Stack Developer
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Passionate about building modern web applications with React, Django, and the MERN stack.
            Seeking opportunities to create impactful digital experiences.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://www.linkedin.com/in/nandhu-s-900b2022b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover-glow"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Nandhu-suresh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover-glow"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:nandhusuresh9493@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover-glow"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg font-medium transition-all duration-300"
              style={{ background: "var(--gradient-primary)" }}
            >
              <span className="text-primary-foreground">View My Work</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-border font-medium hover:border-primary hover:text-primary transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <ChevronDown size={32} className="text-muted-foreground" />
      </a>
    </section>
  );
};

export default HeroSection;
