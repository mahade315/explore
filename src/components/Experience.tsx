import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    title: "Graduate Teaching Assistant",
    company: "Tampere University",
    location: "Tampere, Finland",
    period: "January 2025 - April 2025",
    description: "Supporting PhD-level courses in Computing Sciences department.",
    type: "Academic"
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
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <Card
                  key={index}
                  className="p-6 md:p-8 md:ml-16 backdrop-blur-sm bg-card/80 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(120,119,198,0.15)] group relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-16 top-8 w-12 h-12 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center group-hover:bg-primary/20 transition-colors hidden md:flex">
                    <Briefcase className="w-5 h-5 text-primary" />
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
                      <p>{exp.location} • {exp.period}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
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
