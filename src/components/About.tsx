
import { User, MapPin, Mail, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="gradient-border">
                <div className="bg-card p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <User className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold">Personal Info</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong className="text-foreground">Name:</strong> [Your Name]</p>
                    <p><strong className="text-foreground">Age:</strong> [Your Age]</p>
                    <p className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <strong className="text-foreground mr-2">Location:</strong> [Your Location]
                    </p>
                    <p className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      <strong className="text-foreground mr-2">Email:</strong> [Your Email]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="gradient-border">
                <div className="bg-card p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Sparkles className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold">What Makes Me Unique</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    As an AI Engineer, I bridge the gap between theoretical machine learning concepts 
                    and real-world applications. I'm passionate about creating intelligent systems 
                    that solve complex problems and push the boundaries of what's possible with 
                    artificial intelligence.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card/50 rounded-lg border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-400">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-lg border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-400">10+</div>
                  <div className="text-sm text-muted-foreground">AI Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
