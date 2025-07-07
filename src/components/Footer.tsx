
const Footer = () => {
  return (
    <footer className="py-8 border-t border-purple-500/20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © 2024 AI Engineer Portfolio. Crafted with passion for innovation.
            </p>
          </div>
          <div className="gradient-text font-semibold">
            Powered by Creativity
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
