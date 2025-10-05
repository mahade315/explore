import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Clock } from "lucide-react";

const publicationsData = {
  underReview: [
    {
      authors: "M. M. Hasan, M. Waseem, K. Kemell, J. Rasku, J. Ala-Rantala, P. Abrahamsson",
      title: "Assessing Small Language Models for Code Generation: An Empirical Study with Benchmarks",
      venue: "Submitted to Elsevier",
      status: "Under Review"
    }
  ],
  published: [
    {
      authors: "M. M. Hasan, S. Pervez, M. Stratigi, and K Stefanidis",
      title: "SQUIRREL 2.0: Fairness & Explanations for Sequential Group Recommendations",
      venue: "26th International Workshop on Design, Optimization, Languages and Analytical Processing of Big Data (DOLAP)",
      location: "Co-located with EDBT/ICDT 2024, Paestum, Italy",
      date: "March 25, 2024"
    },
    {
      authors: "E. Ahmed, M.M. Hasan, O. Faruk, F. Hossain, A. Islam",
      title: "Icons for the Mass: Towards Text Free Smart Interface",
      venue: "International Conference on Advances in Science, Engineering and Robotics Technology (ICASERT-2019)",
      location: "East West University, Dhaka, Bangladesh",
      date: "May 3-5, 2019"
    }
  ]
};

const Publications = () => {
  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Research <span className="gradient-text">Publications</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* Under Review */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Under Review</h3>
            </div>
            
            {publicationsData.underReview.map((pub, index) => (
              <Card
                key={index}
                className="p-6 backdrop-blur-sm bg-card/80 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(72,187,209,0.15)]"
              >
                <div className="space-y-3">
                  <Badge variant="outline" className="border-accent text-accent">
                    {pub.status}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {pub.authors}
                  </p>
                  <h4 className="text-lg font-semibold text-foreground leading-relaxed">
                    "{pub.title}"
                  </h4>
                  <p className="text-sm text-muted-foreground italic">
                    {pub.venue}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Published */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Published</h3>
            </div>
            
            {publicationsData.published.map((pub, index) => (
              <Card
                key={index}
                className="p-6 backdrop-blur-sm bg-card/80 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(120,119,198,0.15)]"
              >
                <div className="space-y-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Published
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {pub.authors}
                  </p>
                  <h4 className="text-lg font-semibold text-foreground leading-relaxed">
                    "{pub.title}"
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p className="italic">{pub.venue}</p>
                    <p>{pub.location}</p>
                    <p className="text-xs">{pub.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Funding */}
          <Card className="p-6 md:p-8 backdrop-blur-sm bg-primary/5 border-primary/20">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">Research Funding</h3>
              <div>
                <p className="font-semibold text-primary">Finnish Acceleration for Scientific Talent (FAST) Scholarship</p>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  The Finnish Ministry of Education and Culture has awarded three years of funding 
                  (August 2024 - July 2027) for doctoral education under the FAST program.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Publications;
