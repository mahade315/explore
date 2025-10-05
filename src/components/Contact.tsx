import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Send, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mahadehasan5217@gmail.com",
      href: "mailto:mahadehasan5217@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+358 415705792",
      href: "tel:+358415705792"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tampere, Finland",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      description: "Professional network & updates",
      href: "https://www.linkedin.com/in/mahadehasan/"
    },
    {
      icon: Github,
      label: "GitHub",
      description: "Open source projects & code",
      href: "https://github.com/mahade315"
    },
    {
      icon: FileText,
      label: "Google Scholar",
      description: "Academic publications",
      href: "https://scholar.google.com/citations?user=gBjV5LsAAAAJ&hl=en"
    },
    {
      icon: FileText,
      label: "ORCiD",
      description: "Academic identifier",
      href: "https://orcid.org/0009-0006-5154-7331"
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = formData.get("subject");
    const message = formData.get("message");
    
    const mailtoLink = `mailto:mahadehasan5217@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(message as string)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in collaboration, research opportunities, or just want to chat about AI? 
              I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 backdrop-blur-sm bg-card/80 border-primary/10">
                <h3 className="text-xl font-bold gradient-text mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 backdrop-blur-sm bg-card/80 border-primary/10">
                <h3 className="text-xl font-bold gradient-text mb-6">Follow My Work</h3>
                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-all border border-transparent hover:border-primary/20 group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <link.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{link.label}</p>
                        <p className="text-xs text-muted-foreground">{link.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right: Message Form */}
            <Card className="p-6 backdrop-blur-sm bg-card/80 border-primary/10">
              <h3 className="text-xl font-bold gradient-text mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Your first name"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Your last name"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, research idea, or collaboration opportunity..."
                    rows={5}
                    required
                    className="border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
