import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="gradient-text">Md Mahade Hasan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              PhD Researcher in Generative AI & Software Engineering
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bridging the gap between artificial intelligence and software development at Tampere University, 
              with expertise in LLMs, machine learning, and data science.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(120,119,198,0.3)] hover:shadow-[0_0_40px_rgba(120,119,198,0.5)] transition-all duration-300"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a
              href="https://github.com/mahade315"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahadehasan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=gBjV5LsAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FileText className="w-6 h-6" />
            </a>
            <a
              href="mailto:mahadehasan5217@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
