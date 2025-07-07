
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer",
      company: "AidenAI",
      location: "Hyderabad, India",
      period: "September 2024 - Present",
      description: [
        "Designed and developed advanced AI applications including RAG systems, AI agents, and recommendation engines",
        "Fine-tuned large language models for domain-specific tasks and performance optimization",
        "Built intelligent retrieval-augmented generation (RAG) pipelines integrating vector databases and LLMs",
        "Developed and deployed AI agents capable of autonomous task execution and contextual reasoning",
        "Engineered robust APIs, integrated databases, and managed full-stack software infrastructure for AI systems",
        "Led architectural planning and implementation of scalable, distributed microservices",
        "Applied system design principles to ensure high availability, maintainability, and modularity of AI platforms"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Ozonetel Communications",
      location: "Hyderabad, India",
      period: "September 2022 - December 2022",
      description: [
        "Contributed to the design and implementation of Automated Speech Recognition (ASR) models for transcribing customer calls",
        "Optimized ASR models to improve transcription accuracy and reduce error rates using domain-specific telephony data",
        "Built NLP models for sentiment analysis from call transcripts and customer feedback",
        "Developed dashboards to visualize sentiment trends, aiding customer service improvement",
        "Enabled business teams to identify common issues and enhance customer experience using insights from sentiment analysis"
      ]
    },
    {
      title: "Research Intern",
      company: "Karma Labs",
      location: "Bangalore, India",
      period: "June 2022 - August 2022",
      description: [
        "Conducted research on basic machine learning algorithms and their applications in IT solutions",
        "Reviewed academic papers and industry articles to stay updated on ML trends and documented findings for team knowledge sharing",
        "Designed and implemented ML models including linear regression, logistic regression, decision trees, and clustering algorithms",
        "Developed clean, maintainable, and scalable code for training and testing ML models",
        "Conducted exploratory data analysis (EDA) to identify patterns and relationships in data",
        "Created data visualizations using Matplotlib, Seaborn, and Tableau to communicate key insights"
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
