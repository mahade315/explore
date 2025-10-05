import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Play } from "lucide-react";

const projectsData = [
  {
    title: "AI Code Review Assistant",
    description: "Developed an intelligent code review system using large language models to automatically analyze pull requests, suggest improvements, and identify potential bugs.",
    technologies: ["Python", "OpenAI", "LangChain", "GitLab API"],
    github: "https://github.com/mahade315",
    demo: null
  },
  {
    title: "Multi-Agent RAG System",
    description: "Built a sophisticated retrieval-augmented generation system with multiple specialized agents for document analysis, query routing, and response synthesis.",
    technologies: ["Python", "LangChain", "CrewAI", "ChromaDB", "FAISS"],
    github: "https://github.com/mahade315",
    demo: null
  },
  {
    title: "SQUIRREL 2.0",
    description: "Research implementation of a fair and explainable sequential group recommendation system. Published at DOLAP 2024.",
    technologies: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
    github: null,
    demo: null
  },
  {
    title: "ML Model Interpretability Dashboard",
    description: "Created an interactive dashboard for visualizing and explaining machine learning model predictions using SHAP values and LIME.",
    technologies: ["Python", "Streamlit", "SHAP", "Plotly", "Scikit-Learn"],
    github: "https://github.com/mahade315",
    demo: null
  },
  {
    title: "GeoBot: Real-time Geolocation Estimation",
    description: "A deep learning system that predicts real-time geolocation of non-GPS samples for LTE tracer, trained on MDT UE GPS location reports.",
    technologies: ["Python", "Neural Networks", "TensorFlow"],
    github: null,
    demo: null
  },
  {
    title: "Customer Churn Prediction",
    description: "Predictive Neural Network model deployed on banking data to forecast customer churn, achieving an 85% accuracy rate for proactive customer retention.",
    technologies: ["Python", "ANN", "TensorFlow", "Keras"],
    github: null,
    demo: null
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <Card
                key={index}
                className="p-6 backdrop-blur-sm bg-card/80 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-primary/10 text-foreground border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.demo && (
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Play className="w-4 h-4 mr-2" />
                          View Demo
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/30 hover:border-primary hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
