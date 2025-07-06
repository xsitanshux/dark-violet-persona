
import { ChevronDown, Brain, Code, Zap, User } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

function Hero() {
  const [currentDesignation, setCurrentDesignation] = useState('');
  const [currentDesignationIndex, setCurrentDesignationIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const typingIndex = useRef(0);
  // Updated designations as requested
  const designations = [
    'I talk to machines more than people',
    'But still get misunderstood', 
    'But atleast the model learns'
  ];

  // Add your name here
  const name = 'Sitanshu Boyini';

  useEffect(() => {
    const designation = designations[currentDesignationIndex];

    if (isTyping) {
      typingIndex.current = 0;
      const typingInterval = setInterval(() => {
        if (typingIndex.current < designation.length) {
          setCurrentDesignation(designation.slice(0, typingIndex.current + 1));
          typingIndex.current++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setIsTyping(false), 1000);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    } else {
      const deletingInterval = setInterval(() => {
        setCurrentDesignation(prev => {
          if (prev.length > 0) {
            return prev.slice(0, -1);
          } else {
            clearInterval(deletingInterval);
            setCurrentDesignationIndex((prevIndex) => (prevIndex + 1) % designations.length);
            setIsTyping(true);
            return '';
          }
        });
      }, 30);

      return () => clearInterval(deletingInterval);
    }
  }, [currentDesignationIndex, isTyping]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-background"></div>
      <div className="absolute top-32 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Photo Section - Large and Prominent */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[28rem] rounded-2xl border-4 border-purple-500/30 overflow-hidden glow-effect shadow-2xl">
                <img 
                  src="/lovable-uploads/background-replacer-result.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements around the photo */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            {/* Floating Icons */}
            <div className="flex justify-center lg:justify-start space-x-8 mb-8">
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

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="gradient-text">{name}</span>
              <br />
              <span className="text-foreground min-h-[1.2em] inline-block">
                {currentDesignation}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 animate-fade-in-up delay-200">
              Crafting intelligent solutions at the intersection of 
              <span className="text-purple-400"> artificial intelligence</span> and 
              <span className="text-purple-400"> cutting-edge technology</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up delay-400">
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
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;
