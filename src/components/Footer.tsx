const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Md Mahade Hasan. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            PhD Researcher in Generative AI & Software Engineering at Tampere University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
