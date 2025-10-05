import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "R", "Java", "C/C++"]
  },
  {
    category: "Large Language Models",
    skills: ["Prompt Engineering", "OpenAI", "Llama2", "Mistral", "RAG"]
  },
  {
    category: "Machine Learning",
    skills: ["Classification", "Clustering", "Regression", "Predictive Analytics", "Hypothesis Testing"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["PyTorch", "TensorFlow", "Keras", "LangChain", "CrewAI", "Scikit-Learn", "Pandas", "NumPy"]
  },
  {
    category: "Data & Visualization",
    skills: ["PowerBI", "Matplotlib", "Seaborn", "Plotly", "Exploratory Data Analysis", "Streamlit"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "SQL Server", "ChromaDB", "FAISS"]
  },
  {
    category: "Tools & DevOps",
    skills: ["Docker", "GitLab", "VS Code", "Jupyter Notebook", "Anaconda"]
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

          <div className="grid md:grid-cols-2 gap-6">
            {skillsData.map((category, index) => (
              <Card
                key={index}
                className="p-6 backdrop-blur-sm bg-card/80 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(120,119,198,0.15)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-accent">▸</span>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-primary/10 hover:bg-primary/20 text-foreground border-primary/20 transition-colors"
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
