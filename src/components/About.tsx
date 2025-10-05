import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, FlaskConical, BookOpen } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Current Education",
      subtitle: "Doctoral Researcher, Tampere University, Finland",
      date: "Dec 2024 - Present",
      color: "text-primary"
    },
    {
      icon: Briefcase,
      title: "Professional Experience",
      subtitle: "6+ Years in Academia & Industry",
      description: "Research • Teaching • Development",
      color: "text-accent"
    },
    {
      icon: FlaskConical,
      title: "Research Lab",
      subtitle: "GPT-Lab, Tampere University, Finland",
      description: "Generative AI & Agentic Systems",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Recent News",
      subtitle: "Assessing Small Language Models for Code Generation",
      description: "Submitted to Elsevier (Preprint)",
      color: "text-accent",
      badge: true
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 animate-fade-in mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Hi, I'm <span className="gradient-text">Toufique</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left: My Journey */}
            <Card className="p-8 backdrop-blur-sm bg-card/80 border-primary/10">
              <h3 className="text-2xl font-bold gradient-text mb-6">My Journey</h3>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  As a <span className="text-foreground font-semibold">Doctoral Researcher in Computing Sciences</span> at Tampere 
                  University, I specialize in Generative AI and Agentic Systems. My research centers on designing Agentic 
                  Retrieval-Augmented Generation (RAG) architectures and Agentic AI Systems — building intelligent agents 
                  that combine semantic search, knowledge retrieval, and reasoning to tackle complex, real-world problems.
                </p>
                
                <p>
                  I began my academic journey with a Bachelor's in Computer Science and Engineering, continued with a 
                  Master's in Data Science, and now focus on Generative AI research. Along the way, I've guided students 
                  in computer science and worked as a software engineer before beginning my doctoral research.
                </p>

                <p>
                  At the heart of my work is a simple goal: to <span className="text-foreground font-semibold">bridge research and 
                  practice</span> by creating AI systems that are context-aware, trustworthy, and genuinely useful in 
                  real-world decision-making.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-foreground font-semibold mb-3">Research Focus:</p>
                <div className="flex flex-wrap gap-2">
                  {["Small Language Models for Code Generation", "Fairness & Explainability in AI", 
                    "Retrieval Augmented Generation (RAG)", "Multi-Agent AI Systems"].map((focus) => (
                    <span key={focus} className="px-3 py-1 rounded-full bg-primary/10 text-sm text-foreground border border-primary/20">
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* Right: Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 backdrop-blur-sm bg-card/80 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-primary/10 ${item.color}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-bold text-foreground">{item.title}</h4>
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">{item.subtitle}</p>
                      {item.date && (
                        <p className="text-xs text-primary font-medium">{item.date}</p>
                      )}
                      {item.description && (
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      )}
                    </div>
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

export default About;
