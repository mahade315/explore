import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/80 border-primary/10 shadow-[0_0_20px_rgba(120,119,198,0.1)]">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a PhD researcher at Tampere University, Finland, focusing on the intersection of 
                <span className="text-foreground font-semibold"> Generative AI and Software Engineering</span>. 
                My research explores how large language models can transform software development practices, 
                from automated code review to intelligent requirements engineering.
              </p>
              
              <p>
                With a Master's degree in Data Science from Tampere University and professional experience 
                as an AI/ML Engineer at Nokia, I bring both academic rigor and practical industry insights 
                to my work. I'm particularly passionate about making AI systems more accessible, explainable, 
                and useful for real-world applications.
              </p>

              <p>
                Beyond research, I'm dedicated to education and knowledge sharing. I've supervised multiple 
                thesis projects, taught undergraduate courses in AI and programming, and actively contribute 
                to the open-source community. I believe in the power of collaboration and continuous learning 
                to push the boundaries of what's possible with AI.
              </p>

              <div className="pt-4">
                <p className="text-foreground font-semibold">
                  Current Focus:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                  <li>Small Language Models for Code Generation</li>
                  <li>Fairness & Explainability in AI Systems</li>
                  <li>Retrieval Augmented Generation (RAG)</li>
                  <li>Multi-Agent AI Systems</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
