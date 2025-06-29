
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior AI Engineer",
      company: "[Current Company]",
      location: "[Location]",
      period: "2023 - Present",
      description: [
        "Lead development of machine learning models for production environments",
        "Architect scalable AI infrastructure serving millions of users",
        "Mentor junior engineers and conduct technical interviews",
        "Collaborate with product teams to define AI strategy and roadmap"
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "[Previous Company]",
      location: "[Location]",
      period: "2021 - 2023",
      description: [
        "Developed and deployed computer vision models for autonomous systems",
        "Optimized model performance achieving 40% reduction in inference time",
        "Built MLOps pipelines for continuous model training and deployment",
        "Researched and implemented state-of-the-art deep learning techniques"
      ]
    },
    {
      title: "AI Research Intern",
      company: "[Research Lab/Company]",
      location: "[Location]",
      period: "2020 - 2021",
      description: [
        "Conducted research on natural language processing and transformers",
        "Published findings in peer-reviewed conferences",
        "Collaborated with PhD researchers on cutting-edge AI projects",
        "Prototyped novel algorithms for text understanding and generation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="gradient-border">
                <div className="bg-card p-8 rounded-lg hover:bg-card/80 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Briefcase className="w-8 h-8 text-purple-400 mt-1" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4">
                        <p className="text-purple-400 font-medium">{exp.company}</p>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="mr-3">{exp.location}</span>
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-muted-foreground">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
