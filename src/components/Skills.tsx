import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

          <Card className="p-6 md:p-8 backdrop-blur-sm bg-card/80 border-accent/20">
            <div className="text-center space-y-3">
              <h3 className="text-xl font-bold text-foreground">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="outline" className="border-accent text-accent">
                  Multi AI Agent Systems with crewAI
                </Badge>
                <Badge variant="outline" className="border-accent text-accent">
                  Data Analysis with Python - freeCodeCamp
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
