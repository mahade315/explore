import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Doctor of Philosophy - PhD",
    major: "Generative AI & Software Engineering",
    institution: "Tampere University",
    location: "Tampere, Finland",
    period: "August 2024 - Present",
    highlights: [
      "FAST Scholarship recipient (2024-2027)",
      "Focus on LLMs in Software Engineering"
    ]
  },
  {
    degree: "Master of Science",
    major: "Computing Sciences (Data Science)",
    institution: "Tampere University",
    location: "Tampere, Finland",
    period: "Completed May 2024",
    highlights: [
      "Thesis Grade: 5/5",
      "Specialized in AI and Machine Learning"
    ]
  },
  {
    degree: "Bachelor of Science",
    major: "Computer Science and Engineering",
    institution: "Ahsanullah University of Science and Technology",
    location: "Dhaka, Bangladesh",
    period: "Completed January 2017",
    highlights: [
      "Strong foundation in CS fundamentals",
      "General Secretary, CSE Society (2016)"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)] hidden md:block" />

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 md:p-8 md:ml-16 backdrop-blur-sm bg-card/80 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(120,119,198,0.15)] group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-16 top-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hidden md:flex">
                    <GraduationCap className="w-5 h-5 text-white drop-shadow-sm" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-primary font-semibold">
                          {edu.major}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    
                    <div className="text-muted-foreground">
                      <p className="font-medium">{edu.institution}</p>
                      <p className="text-sm">{edu.location}</p>
                    </div>

                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent mt-1">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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

export default Education;
