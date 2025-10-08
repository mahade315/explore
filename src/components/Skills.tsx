import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar } from "lucide-react";

const skillsData = [
  {
    category: "AI & Machine Learning",
    icon: "🤖",
    skills: ["Large Language Models", "Generative AI", "Agentic Systems", "RAG Pipelines", "Prompt Engineering", "Neural Networks", "Deep Learning"]
  },
  {
    category: "Programming & Development",
    icon: "💻",
    skills: ["Python", "R", "Java", "C/C++", "API Development", "Software Engineering"]
  },
  {
    category: "ML Frameworks & Libraries",
    icon: "🔧",
    skills: ["PyTorch", "TensorFlow", "Keras", "LangChain", "CrewAI", "Scikit-Learn", "Hugging Face", "OpenAI"]
  },
  {
    category: "Data Science & Analytics",
    icon: "📊",
    skills: ["Pandas", "NumPy", "Data Analysis", "Statistical Modeling", "Predictive Analytics", "Hypothesis Testing"]
  },
  {
    category: "Visualization & BI",
    icon: "📈",
    skills: ["PowerBI", "Matplotlib", "Seaborn", "Plotly", "Streamlit", "Data Storytelling"]
  },
  {
    category: "Databases & Vector Stores",
    icon: "🗄️",
    skills: ["MySQL", "SQL Server", "ChromaDB", "FAISS", "Vector Databases", "Query Optimization"]
  },
  {
    category: "MLOps & Tools",
    icon: "⚙️",
    skills: ["Docker", "Git", "GitLab", "Jupyter", "VS Code", "Anaconda", "MLflow"]
  }
];

const certificationsData = [
  {
    title: "Multi AI Agent Systems with crewAI",
    issuer: "CrewAI",
    date: "2024",
    status: "Completed",
    credentialId: "CERT-001",
    credentialUrl: "#",
    type: "Professional"
  },
  {
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    date: "2023",
    status: "Completed",
    credentialId: "FCC-001",
    credentialUrl: "#",
    type: "Technical"
  },
  {
    title: "Machine Learning Fundamentals",
    issuer: "Coursera",
    date: "2023",
    status: "Completed",
    credentialId: "ML-001",
    credentialUrl: "#",
    type: "Technical"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, index) => (
              <Card
                key={index}
                className="p-6 backdrop-blur-sm bg-card/80 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{category.icon}</span>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-primary/10 hover:bg-primary/20 text-foreground border-primary/20 transition-all hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="space-y-6">
            <div className="text-center space-y-4 animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-bold">
                Licenses & <span className="gradient-text">Certifications</span>
              </h3>
              <div className="h-1 w-16 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificationsData.map((cert, index) => (
                <Card
                  key={index}
                  className="group p-6 backdrop-blur-sm bg-card/80 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    {/* Header with icon and status */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Award className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <Badge 
                            variant={cert.type === "Professional" ? "default" : "secondary"}
                            className={cert.type === "Professional" 
                              ? "bg-accent/10 text-accent border-accent/20" 
                              : "bg-primary/10 text-primary border-primary/20"
                            }
                          >
                            {cert.type}
                          </Badge>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                        {cert.status}
                      </span>
                    </div>

                    {/* Title and issuer */}
                    <div>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-medium">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Date and credential info */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                      <span className="text-xs bg-muted/30 px-2 py-1 rounded">
                        {cert.credentialId}
                      </span>
                    </div>

                    {/* Action button */}
                    {cert.credentialUrl && (
                      <div className="pt-2">
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors group/link"
                        >
                          View Credential
                          <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
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

export default Skills;
