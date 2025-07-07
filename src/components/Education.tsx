
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "BTech in Computer Science (AI, ML)",
      institution: "JNTU, Hyderabad",
      year: "December 2020 - 2024",
      description: "Specialized in Artificial Intelligence and Machine Learning with relevant coursework in Machine Learning, Natural Language Processing, Deep Learning, Reinforcement Learning, Design and Analysis of Algorithms, and Cloud Computing. Completed prestigious internships at Karma Labs, Ozonetel Communications, and AidenAI, focusing on cutting-edge AI applications. Awarded for outstanding research on Generative Adversarial Networks (GANs). Speaker at the Global AI Summit in Hyderabad, where research and projects were showcased to an international audience."
    },
    {
      degree: "Primary and Secondary Schooling",
      institution: "The Hyderabad Public School",
      year: "2005 - 2019",
      description: "Graduated with academic distinction while actively participating in Model United Nations conferences, representing global perspectives and winning accolades. Excelled in inter-school debates and public speaking competitions, developing strong oratory and critical thinking skills. Represented the school in regional sports tournaments and cultural fests, demonstrating leadership, teamwork, and a well-rounded personality.",
      
    }

  ];

  const certifications = [
    "AWS Machine Learning Specialty",
    "Google Cloud AI Engineer",
    "Deep Learning Specialization (Coursera)",
    "TensorFlow Developer Certificate"
  ];

  return (
    <section id="education" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Education</span> & Certifications
          </h2>

          <div className="space-y-8 mb-12">
            {education.map((edu, index) => (
              <div key={index} className="gradient-border">
                <div className="bg-card p-8 rounded-lg hover:bg-card/80 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-purple-400 mt-1" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                      <p className="text-purple-400 font-medium mb-2">{edu.institution}</p>
                      <div className="flex items-center text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.year}</span>
                      
                        
                      </div>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="gradient-border">
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 bg-background/50 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
