import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";
import publicationsData from "@/lib/publications";
 
/* const publicationsData = [
  {
    authors: "M.M. Hasan, M. Waseem, K.K. Kemell, J. Rasku, J. Ala-Rantala, P. Abrahamsson",
    title: "Assessing Small Language Models for Code Generation: An Empirical Study with Benchmarks",
    venue: "arXiv preprint",
    arxivId: "2507.03160",
    arxivUrl: "https://arxiv.org/pdf/2507.03160",
    status: "Preprint",
    year: "2025"
  },
  {
    authors: "S. Siddeeq, M. Waseem, Z. Rasheed, M.M. Hasan, J. Rasku, M. Saari, P. Abrahamsson",
    title: "LLM-based Multi-Agent System for Intelligent Refactoring of Haskell Code",
    venue: "arXiv preprint",
    arxivId: "2506.19481",
    arxivUrl: "https://arxiv.org/pdf/2506.19481",
    status: "Preprint",
    year: "2025"
  },
  {
    authors: "Z. Rasheed, M.A. Sami, J. Rasku, K.K. Kemell, Z. Zhang, J. Harjamaki, M.M. Hasan, M. Saari, P. Abrahamsson",
    title: "Timeless: A vision for the next generation of software development",
    venue: "arXiv preprint",
    arxivId: "2411.08507",
    arxivUrl: "https://arxiv.org/pdf/2411.08507",
    status: "Preprint",
    year: "2024"
  },
  {
    authors: "M.M. Hasan, S. Pervez, M. Stratigi, K. Stefanidis",
    title: "SQUIRREL 2.0: fairness & explanations for sequential group recommendations",
    venue: "International Workshop on Design, Optimization, Languages and Analytical Processing of Big Data (DOLAP)",
    location: "Co-located with EDBT/ICDT 2024, Paestum, Italy",
    date: "March 25, 2024",
    status: "Published",
    year: "2024"
  },
  {
    authors: "E. Ahmed, M.M. Hasan, M.O. Faruk, M.F. Hossain, M.A. Rahman, A. Islam",
    title: "Icons for the mass: An approach towards text free smart interface",
    venue: "International Conference on Advances in Science, Engineering and Robotics Technology (ICASERT-2019)",
    location: "East West University, Dhaka, Bangladesh",
    date: "May 3-5, 2019",
    status: "Published",
    year: "2019"
  }
]; */

const Publications = () => {
  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Research</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* 1. Research Focus */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold gradient-text mb-4">Research Focus</h3>
            </div>
            <Card className="p-6 backdrop-blur-sm bg-card/80 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Small Language Models (SLMs)",
                  "Fine-Tuning Language Models", 
                  "Multi-Agent Systems",
                  "Context Engineering",
                  "Model Context Protocol (MCP)",
                  "Agent to Agent Communication Protocol (A2A)"
                ].map((focus) => (
                  <div key={focus} className="group flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse group-hover:animate-bounce"></div>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{focus}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* 2. Research Funding */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold gradient-text mb-4">Research Funding</h3>
            </div>
            <Card className="p-6 md:p-8 backdrop-blur-sm bg-primary/5 border-primary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse"></div>
                    <h4 className="text-xl font-bold text-foreground">Finnish Acceleration for Scientific Talent (FAST) Scholarship</h4>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                    Doctoral Education
                  </span>
                </div>
                <div className="pl-6">
                  <p className="text-muted-foreground leading-relaxed">
                    The Finnish Ministry of Education and Culture has awarded three years of funding 
                    (August 2024 - July 2027) for doctoral education under the FAST program.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* 3. Publications */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold gradient-text mb-4">List of Publications</h3>
              <p className="text-sm text-muted-foreground italic">* Preprints indicate manuscripts under review</p>
            </div>
            <div className="space-y-6">
              {publicationsData.map((pub, index) => (
                <Card
                  key={index}
                  className="p-6 backdrop-blur-sm bg-card/80 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                        <Badge 
                          variant={pub.status === "Preprint" ? "outline" : "secondary"}
                          className={pub.status === "Preprint" 
                            ? "border-accent text-accent" 
                            : "bg-primary/10 text-primary border-primary/20"
                          }
                        >
                          {pub.status}
                        </Badge>
                      </div>
                      <span className="text-sm font-semibold text-muted-foreground">{pub.year}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {pub.authors}
                    </p>
                    
                    <h4 className="text-lg font-semibold text-foreground leading-relaxed">
                      "{pub.title}"
                    </h4>
                    
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p className="italic">{pub.venue}</p>
                      {pub.location && <p>{pub.location}</p>}
                      {pub.date && <p className="text-xs">{pub.date}</p>}
                      {pub.arxivId && (
                        <p className="text-xs">
                          arXiv: {pub.arxivId}
                        </p>
                      )}
                    </div>
                    
                    {pub.arxivUrl && (
                      <div className="pt-2">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="text-primary border-primary/20 hover:bg-primary/10"
                        >
                          <a
                            href={pub.arxivUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <FileText className="w-4 h-4" />
                            View Paper
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
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

export default Publications;
