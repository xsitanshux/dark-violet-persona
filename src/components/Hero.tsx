
import { ChevronDown, Brain, Code, Zap, User } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentDesignation, setCurrentDesignation] = useState('');
  const [currentDesignationIndex, setCurrentDesignationIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Updated designations as requested
  const designations = [
    'AI Engineer',
    'Fitness Coach', 
    'Stoic'
  ];

  // Add your name here
  const name = 'Your Name';

  useEffect(() => {
    const designation = designations[currentDesignationIndex];

    if (isTyping) {
      // Typing phase
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < designation.length) {
          setCurrentDesignation(designation.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          // Fully typed, wait before starting to delete
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(false);
          }, 8000); // Wait 8 seconds before deleting
        }
      }, 1000);

      return () => clearInterval(typingInterval);
    } else {
      // Deleting phase
      const deletingInterval = setInterval(() => {
        setCurrentDesignation(prev => {
          if (prev.length > 0) {
            return prev.slice(0, -1);
          } else {
            // Finished deleting, move to next designation
            clearInterval(deletingInterval);
            setCurrentDesignationIndex((prevIndex) => (prevIndex + 1) % designations.length);
            setIsTyping(true);
            return '';
          }
        });
      }, 50);

      return () => clearInterval(deletingInterval);
    }
  }, [currentDesignationIndex, isTyping, designations]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-background"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Photo Section */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-purple-500/30 overflow-hidden glow-effect">
                <img 
                  src="/lovable-uploads/2158c1fd-39a5-4035-aa89-476e2f83e66a.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Floating Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="animate-float">
              <Brain className="w-12 h-12 text-purple-400" />
            </div>
            <div className="animate-float delay-1000">
              <Code className="w-12 h-12 text-purple-500" />
            </div>
            <div className="animate-float delay-2000">
              <Zap className="w-12 h-12 text-purple-600" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text">{name}</span>
            <br />
            <span className="text-foreground min-h-[1.2em] inline-block">
              {currentDesignation}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up delay-200">
            Crafting intelligent solutions at the intersection of 
            <span className="text-purple-400"> artificial intelligence</span> and 
            <span className="text-purple-400"> cutting-edge technology</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
            <a 
              href="#projects" 
              className="gradient-border"
            >
              <div className="bg-background px-8 py-3 rounded-lg hover:bg-purple-500/10 transition-all duration-300 glow-effect">
                View My Work
              </div>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;
