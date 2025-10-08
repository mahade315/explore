import { Card } from "@/components/ui/card";
import { Briefcase, ExternalLink } from "lucide-react";

const experienceData = [
  {
    title: "Doctoral Researcher",
    company: "Tampere University",
    location: "Tampere, Finland",
    period: "August 2024 - Present",
    description: "Generative AI & Software Engineering",
    type: "Academic"
  },
  {
    title: "Graduate Teaching Assistant (GTA)",
    company: "Tampere University",
    location: "",
    period: "",
    description: "COMP.CS.530 - Fine-tuning Large Language Models (LLM)",
    timeline: "Jan 2025 - Apr 2025 | Jan 2026 - Apr 2026",
    type: "Academic",
    link: "https://opiskelijanopas.tuni.fi/en/tampere-university/curriculum/course-units/otm-68424c80-193a-4f3e-a347-9c51809ef25e?year=2024"
  },
  {
    title: "Trainee, AI/ML Engineer",
    company: "Nokia Solutions & Networks Oy",
    location: "Tampere, Finland",
    period: "June 2023 - June 2024",
    description: "Analyzed networking data and implemented AI solutions for telecommunications infrastructure. Developed machine learning models for network optimization and performance prediction.",
    type: "Industry"
  },
  {
    title: "Lecturer of Computer Science",
    company: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    period: "September 2017 - September 2021",
    description: "Taught undergraduate courses including Object Oriented Programming, Artificial Intelligence, Data Structures, Algorithms, and Database Systems. Supervised undergraduate thesis projects.",
    type: "Academic"
  },
  {
    title: "Mobile Application Developer",
    company: "Aamra Digital Services",
    location: "Dhaka, Bangladesh",
    period: "May 2017 - August 2017",
    description: "Designed and developed custom Android applications for clients.",
    type: "Industry"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)] hidden md:block" />

            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <Card
                  key={index}
                  className="p-6 md:p-8 md:ml-16 backdrop-blur-sm bg-card/80 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(120,119,198,0.15)] group relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-16 top-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hidden md:flex">
                    <Briefcase className="w-5 h-5 text-white drop-shadow-sm" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="text-muted-foreground text-sm">
                      {exp.location && <p>{exp.location}</p>}
                      <p>{exp.period}</p>
                    </div>

                    {exp.link ? (
                      <div>
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors leading-relaxed"
                        >
                          {exp.description}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        {exp.timeline && (
                          <p className="text-sm text-muted-foreground font-medium mt-1">
                            {exp.timeline}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                        {exp.timeline && (
                          <p className="text-sm text-muted-foreground font-medium mt-1">
                            {exp.timeline}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
