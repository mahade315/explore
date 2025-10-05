import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Brain, TrendingUp, Instagram, Film } from "lucide-react";

const projectsData = [
  {
    title: "Automated Code Review with LLM",
    description: "An automatic code review tool that streamlines the software development process, enhancing efficiency and maintaining high coding standards to improve overall code quality.",
    technologies: ["Python", "LangChain", "LLM", "GitLab", "Prompt Engineering"],
    icon: Code2
  },
  {
    title: "Inventory Query System using LLM",
    description: "Developed a natural language interface to query MySQL databases, enhancing user accessibility and simplifying data retrieval with the power of Large Language Models.",
    technologies: ["Python", "LangChain", "MySQL", "ChromaDB"],
    icon: Database
  },
  {
    title: "GeoBot: Real-time Geolocation Estimation",
    description: "A deep learning system that predicts real-time geolocation of non-GPS samples for LTE tracer, trained on MDT UE GPS location reports.",
    technologies: ["Python", "Neural Networks", "TensorFlow"],
    icon: Brain
  },
  {
    title: "Customer Churn Prediction",
    description: "Predictive Neural Network model deployed on banking data to forecast customer churn, achieving an 85% accuracy rate for proactive customer retention policy.",
    technologies: ["Python", "ANN", "TensorFlow", "Keras"],
    icon: TrendingUp
  },
  {
    title: "Instagram Reach Analysis",
    description: "An impactful Exploratory Data Analysis on Instagram Reach, revealing key insights and trends for optimizing social media strategy.",
    technologies: ["Python", "Pandas", "Plotly", "Data Visualization"],
    icon: Instagram
  },
  {
    title: "Movie Recommendation System",
    description: "User-based and Item-based Collaborative Filtering approach implemented on MovieLens dataset to provide personalized movie recommendations.",
    technologies: ["Python", "Collaborative Filtering", "ML"],
    icon: Film
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
            {projectsData.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={index}
                  className="p-6 backdrop-blur-sm bg-card/80 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(120,119,198,0.15)] group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-accent/10 text-accent border-accent/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
