import { Award } from "lucide-react";

const certificates = [
  {
    title: "NACTET Certification",
    issuer: "National Council For Technology and Training",
  },
  {
    title: "E-Commerce Developer",
    issuer: "RISAYA Academy in collaboration with ICT Academy of Kerala",
  },
];

const CertificatesSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Achievements</p>
            <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="gradient-border rounded-xl p-6 hover-glow transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {cert.issuer}
                    </p>
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

export default CertificatesSection;
