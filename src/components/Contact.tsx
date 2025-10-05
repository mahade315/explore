import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, FileText, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mahadehasan5217@gmail.com",
    link: "mailto:mahadehasan5217@gmail.com"
  },
  {
    icon: Mail,
    label: "University Email",
    value: "mdmahade.hasan@tuni.fi",
    link: "mailto:mdmahade.hasan@tuni.fi"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+358 50 570 0414",
    link: "tel:+358505700414"
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/mahadehasan/",
    color: "hover:text-[#0077b5]"
  },
  {
    icon: Github,
    label: "GitHub",
    link: "https://github.com/mahade315",
    color: "hover:text-foreground"
  },
  {
    icon: FileText,
    label: "Google Scholar",
    link: "https://scholar.google.com/citations?user=gBjV5LsAAAAJ&hl=en",
    color: "hover:text-[#4285f4]"
  },
  {
    icon: ExternalLink,
    label: "ORCiD",
    link: "https://orcid.org/0009-0006-5154-7331",
    color: "hover:text-[#a6ce39]"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing research collaborations, project opportunities, 
              or just having a conversation about AI and software engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <Card className="p-6 md:p-8 backdrop-blur-sm bg-card/80 border-primary/10 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 md:p-8 backdrop-blur-sm bg-card/80 border-primary/10 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Connect Online</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto py-6 flex flex-col items-center gap-3 border-primary/20 hover:border-primary/40"
                      asChild
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors ${item.color}`}
                      >
                        <Icon className="w-6 h-6" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </a>
                    </Button>
                  );
                })}
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground text-center">
                  Based in Tampere, Finland
                </p>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <Card className="p-8 text-center backdrop-blur-sm bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're looking for research collaboration, have questions about my work, 
              or just want to connect, feel free to reach out!
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(120,119,198,0.3)] hover:shadow-[0_0_40px_rgba(120,119,198,0.5)] transition-all duration-300"
              asChild
            >
              <a href="mailto:mahadehasan5217@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send an Email
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
